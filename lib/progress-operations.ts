import { getDatabase } from './database';

export interface QuizAttempt {
  id: number;
  student_id: string;
  topic_id: number;
  difficulty: string;
  total_questions: number;
  correct_answers: number;
  score_percentage: number;
  time_spent_seconds: number | null;
  completed_at: string;
}

export interface QuestionResponse {
  id: number;
  attempt_id: number;
  question_id: number;
  selected_answer: number;
  is_correct: number;
  time_spent_seconds: number | null;
}

export interface StudentProgress {
  totalAttempts: number;
  averageScore: number;
  topicScores: { [key: string]: number };
  recentAttempts: QuizAttempt[];
  weakTopics: Array<{ topic: string; score: number }>;
  strongTopics: Array<{ topic: string; score: number }>;
}

// Save quiz attempt
export function saveQuizAttempt(
  studentId: string,
  topicId: number,
  difficulty: string,
  totalQuestions: number,
  correctAnswers: number,
  timeSpent: number | null
): number {
  const db = getDatabase();
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  const result = db.prepare(`
    INSERT INTO quiz_attempts (
      student_id, topic_id, difficulty, total_questions, 
      correct_answers, score_percentage, time_spent_seconds
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(studentId, topicId, difficulty, totalQuestions, correctAnswers, scorePercentage, timeSpent);

  return result.lastInsertRowid as number;
}

// Save individual question responses
export function saveQuestionResponse(
  attemptId: number,
  questionId: number,
  selectedAnswer: number,
  isCorrect: boolean,
  timeSpent: number | null
): void {
  const db = getDatabase();

  db.prepare(`
    INSERT INTO question_responses (
      attempt_id, question_id, selected_answer, is_correct, time_spent_seconds
    ) VALUES (?, ?, ?, ?, ?)
  `).run(attemptId, questionId, selectedAnswer, isCorrect ? 1 : 0, timeSpent);
}

// Get student progress
export function getStudentProgress(studentId: string): StudentProgress {
  const db = getDatabase();

  // Get all attempts
  const attempts = db.prepare(`
    SELECT qa.*, t.title as topic_title, s.name as subject_name, g.grade_number
    FROM quiz_attempts qa
    JOIN topics t ON qa.topic_id = t.id
    JOIN subjects s ON t.subject_id = s.id
    JOIN grades g ON s.grade_id = g.id
    WHERE qa.student_id = ?
    ORDER BY qa.completed_at DESC
  `).all(studentId) as any[];

  if (attempts.length === 0) {
    return {
      totalAttempts: 0,
      averageScore: 0,
      topicScores: {},
      recentAttempts: [],
      weakTopics: [],
      strongTopics: [],
    };
  }

  // Calculate average score
  const averageScore = attempts.reduce((sum, a) => sum + a.score_percentage, 0) / attempts.length;

  // Calculate topic scores
  const topicScores: { [key: string]: { total: number; count: number; title: string } } = {};
  attempts.forEach(attempt => {
    const key = `${attempt.grade_number}-${attempt.subject_name}-${attempt.topic_title}`;
    if (!topicScores[key]) {
      topicScores[key] = { total: 0, count: 0, title: attempt.topic_title };
    }
    topicScores[key].total += attempt.score_percentage;
    topicScores[key].count += 1;
  });

  // Calculate average per topic
  const topicAverages = Object.entries(topicScores).map(([key, data]) => ({
    topic: data.title,
    score: data.total / data.count,
  }));

  // Sort by score
  const sortedTopics = [...topicAverages].sort((a, b) => a.score - b.score);
  const weakTopics = sortedTopics.slice(0, 3).filter(t => t.score < 70);
  const strongTopics = sortedTopics.slice(-3).reverse().filter(t => t.score >= 80);

  return {
    totalAttempts: attempts.length,
    averageScore: Math.round(averageScore * 10) / 10,
    topicScores: Object.fromEntries(
      Object.entries(topicScores).map(([key, data]) => [key, Math.round((data.total / data.count) * 10) / 10])
    ),
    recentAttempts: attempts.slice(0, 10),
    weakTopics,
    strongTopics,
  };
}

// Get topic progress for a student
export function getTopicProgress(studentId: string, topicId: number) {
  const db = getDatabase();

  const attempts = db.prepare(`
    SELECT * FROM quiz_attempts
    WHERE student_id = ? AND topic_id = ?
    ORDER BY completed_at DESC
  `).all(studentId, topicId) as QuizAttempt[];

  if (attempts.length === 0) {
    return {
      attempts: [],
      averageScore: 0,
      bestScore: 0,
      totalAttempts: 0,
      improvement: 0,
    };
  }

  const averageScore = attempts.reduce((sum, a) => sum + a.score_percentage, 0) / attempts.length;
  const bestScore = Math.max(...attempts.map(a => a.score_percentage));
  
  // Calculate improvement (compare last 3 to first 3)
  let improvement = 0;
  if (attempts.length >= 6) {
    const recent = attempts.slice(0, 3).reduce((sum, a) => sum + a.score_percentage, 0) / 3;
    const initial = attempts.slice(-3).reduce((sum, a) => sum + a.score_percentage, 0) / 3;
    improvement = recent - initial;
  }

  return {
    attempts,
    averageScore: Math.round(averageScore * 10) / 10,
    bestScore: Math.round(bestScore * 10) / 10,
    totalAttempts: attempts.length,
    improvement: Math.round(improvement * 10) / 10,
  };
}

// Check if student needs review (failed quiz)
export function needsReview(studentId: string, topicId: number): boolean {
  const db = getDatabase();

  const lastAttempt = db.prepare(`
    SELECT score_percentage FROM quiz_attempts
    WHERE student_id = ? AND topic_id = ?
    ORDER BY completed_at DESC
    LIMIT 1
  `).get(studentId, topicId) as { score_percentage: number } | undefined;

  return lastAttempt ? lastAttempt.score_percentage < 60 : false;
}

// Get recommended topics for review
export function getRecommendedReview(studentId: string): Array<{
  topic_id: number;
  topic_title: string;
  subject_name: string;
  grade_number: number;
  average_score: number;
  attempts: number;
}> {
  const db = getDatabase();

  const recommendations = db.prepare(`
    SELECT 
      t.id as topic_id,
      t.title as topic_title,
      s.name as subject_name,
      g.grade_number,
      AVG(qa.score_percentage) as average_score,
      COUNT(qa.id) as attempts
    FROM quiz_attempts qa
    JOIN topics t ON qa.topic_id = t.id
    JOIN subjects s ON t.subject_id = s.id
    JOIN grades g ON s.grade_id = g.id
    WHERE qa.student_id = ?
    GROUP BY t.id
    HAVING average_score < 70
    ORDER BY average_score ASC, attempts DESC
    LIMIT 5
  `).all(studentId) as any[];

  return recommendations;
}

import { getDatabase, DBGrade, DBSubject, DBTopic, DBQuestion, dbQuestionToAppFormat } from './database';
import { Grade, Subject, Topic, Question } from './curriculum-data';

// ==================== GRADE OPERATIONS ====================

export function getAllGrades(): Grade[] {
  const db = getDatabase();
  
  const grades = db.prepare(`
    SELECT * FROM grades ORDER BY grade_number
  `).all() as DBGrade[];

  return grades.map(grade => ({
    grade: grade.grade_number,
    subjects: getSubjectsByGrade(grade.grade_number),
  }));
}

export function getGradeByNumber(gradeNumber: number): Grade | null {
  const db = getDatabase();
  
  const grade = db.prepare(`
    SELECT * FROM grades WHERE grade_number = ?
  `).get(gradeNumber) as DBGrade | undefined;

  if (!grade) return null;

  return {
    grade: grade.grade_number,
    subjects: getSubjectsByGrade(grade.grade_number),
  };
}

export function insertGrade(gradeNumber: number, description?: string): number {
  const db = getDatabase();
  
  const result = db.prepare(`
    INSERT OR IGNORE INTO grades (grade_number, description)
    VALUES (?, ?)
  `).run(gradeNumber, description || null);

  return result.lastInsertRowid as number;
}

// ==================== SUBJECT OPERATIONS ====================

export function getSubjectsByGrade(gradeNumber: number): Subject[] {
  const db = getDatabase();
  
  const subjects = db.prepare(`
    SELECT s.* FROM subjects s
    JOIN grades g ON s.grade_id = g.id
    WHERE g.grade_number = ?
  `).all(gradeNumber) as DBSubject[];

  return subjects.map(subject => ({
    id: subject.subject_id,
    name: subject.name,
    icon: subject.icon || '📚',
    description: subject.description || '',
    topics: getTopicsBySubject(subject.id),
  }));
}

export function getSubjectByIds(gradeNumber: number, subjectId: string): Subject | null {
  const db = getDatabase();
  
  const subject = db.prepare(`
    SELECT s.* FROM subjects s
    JOIN grades g ON s.grade_id = g.id
    WHERE g.grade_number = ? AND s.subject_id = ?
  `).get(gradeNumber, subjectId) as DBSubject | undefined;

  if (!subject) return null;

  return {
    id: subject.subject_id,
    name: subject.name,
    icon: subject.icon || '📚',
    description: subject.description || '',
    topics: getTopicsBySubject(subject.id),
  };
}

export function insertSubject(gradeNumber: number, subjectId: string, name: string, icon?: string, description?: string): number {
  const db = getDatabase();
  
  // Get grade ID
  const grade = db.prepare(`
    SELECT id FROM grades WHERE grade_number = ?
  `).get(gradeNumber) as { id: number } | undefined;

  if (!grade) {
    throw new Error(`Grade ${gradeNumber} not found`);
  }

  const result = db.prepare(`
    INSERT OR IGNORE INTO subjects (grade_id, subject_id, name, icon, description)
    VALUES (?, ?, ?, ?, ?)
  `).run(grade.id, subjectId, name, icon || null, description || null);

  return result.lastInsertRowid as number;
}

// ==================== TOPIC OPERATIONS ====================

export function getTopicsBySubject(subjectDbId: number): Topic[] {
  const db = getDatabase();
  
  const topics = db.prepare(`
    SELECT * FROM topics WHERE subject_id = ?
  `).all(subjectDbId) as DBTopic[];

  return topics.map(topic => ({
    id: topic.topic_id,
    title: topic.title,
    description: topic.description || '',
    content: topic.content || '',
    questions: getQuestionsByTopic(topic.id),
  }));
}

export function getTopicByIds(gradeNumber: number, subjectId: string, topicId: string): Topic | null {
  const db = getDatabase();
  
  const topic = db.prepare(`
    SELECT t.* FROM topics t
    JOIN subjects s ON t.subject_id = s.id
    JOIN grades g ON s.grade_id = g.id
    WHERE g.grade_number = ? AND s.subject_id = ? AND t.topic_id = ?
  `).get(gradeNumber, subjectId, topicId) as DBTopic | undefined;

  if (!topic) return null;

  return {
    id: topic.topic_id,
    title: topic.title,
    description: topic.description || '',
    content: topic.content || '',
    questions: getQuestionsByTopic(topic.id),
  };
}

export function insertTopic(gradeNumber: number, subjectId: string, topicId: string, title: string, description?: string, content?: string): number {
  const db = getDatabase();
  
  // Get subject DB ID
  const subject = db.prepare(`
    SELECT s.id FROM subjects s
    JOIN grades g ON s.grade_id = g.id
    WHERE g.grade_number = ? AND s.subject_id = ?
  `).get(gradeNumber, subjectId) as { id: number } | undefined;

  if (!subject) {
    throw new Error(`Subject ${subjectId} not found for grade ${gradeNumber}`);
  }

  const result = db.prepare(`
    INSERT OR IGNORE INTO topics (subject_id, topic_id, title, description, content)
    VALUES (?, ?, ?, ?, ?)
  `).run(subject.id, topicId, title, description || null, content || null);

  return result.lastInsertRowid as number;
}

// ==================== QUESTION OPERATIONS ====================

export function getQuestionsByTopic(topicDbId: number): Question[] {
  const db = getDatabase();
  
  const questions = db.prepare(`
    SELECT * FROM questions WHERE topic_id = ? ORDER BY id
  `).all(topicDbId) as DBQuestion[];

  return questions.map(dbQuestionToAppFormat);
}

export function getQuestionsByTopicAndDifficulty(topicDbId: number, difficulty: string): Question[] {
  const db = getDatabase();
  
  const questions = db.prepare(`
    SELECT * FROM questions WHERE topic_id = ? AND difficulty = ? ORDER BY id
  `).all(topicDbId, difficulty) as DBQuestion[];

  return questions.map(dbQuestionToAppFormat);
}

export function insertQuestion(
  gradeNumber: number,
  subjectId: string,
  topicId: string,
  questionId: string,
  question: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced',
  aiGenerated: boolean = false,
  aiProvider?: string
): number {
  const db = getDatabase();
  
  // Get topic DB ID
  const topic = db.prepare(`
    SELECT t.id FROM topics t
    JOIN subjects s ON t.subject_id = s.id
    JOIN grades g ON s.grade_id = g.id
    WHERE g.grade_number = ? AND s.subject_id = ? AND t.topic_id = ?
  `).get(gradeNumber, subjectId, topicId) as { id: number } | undefined;

  if (!topic) {
    throw new Error(`Topic ${topicId} not found`);
  }

  const result = db.prepare(`
    INSERT OR REPLACE INTO questions 
    (topic_id, question_id, question, option_a, option_b, option_c, option_d, 
     correct_answer, explanation, difficulty, ai_generated, ai_provider)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    topic.id,
    questionId,
    question,
    options[0],
    options[1],
    options[2],
    options[3],
    correctAnswer,
    explanation,
    difficulty,
    aiGenerated ? 1 : 0,
    aiProvider || null
  );

  return result.lastInsertRowid as number;
}

export function insertAIGeneratedQuestions(
  gradeNumber: number,
  subjectId: string,
  topicId: string,
  questions: Question[],
  aiProvider: string
): number[] {
  const insertedIds: number[] = [];

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const questionId = `${topicId}-ai-${Date.now()}-${i}`;
    
    const id = insertQuestion(
      gradeNumber,
      subjectId,
      topicId,
      questionId,
      q.question,
      q.options,
      q.correctAnswer,
      q.explanation,
      q.difficulty,
      true,
      aiProvider
    );
    
    insertedIds.push(id);
  }

  return insertedIds;
}

// ==================== STATISTICS ====================

export function getStatistics() {
  const db = getDatabase();
  
  const stats = {
    totalGrades: db.prepare('SELECT COUNT(*) as count FROM grades').get() as { count: number },
    totalSubjects: db.prepare('SELECT COUNT(*) as count FROM subjects').get() as { count: number },
    totalTopics: db.prepare('SELECT COUNT(*) as count FROM topics').get() as { count: number },
    totalQuestions: db.prepare('SELECT COUNT(*) as count FROM questions').get() as { count: number },
    aiGeneratedQuestions: db.prepare('SELECT COUNT(*) as count FROM questions WHERE ai_generated = 1').get() as { count: number },
    questionsByDifficulty: db.prepare(`
      SELECT difficulty, COUNT(*) as count 
      FROM questions 
      GROUP BY difficulty
    `).all() as { difficulty: string; count: number }[],
    questionsByProvider: db.prepare(`
      SELECT ai_provider, COUNT(*) as count 
      FROM questions 
      WHERE ai_generated = 1 
      GROUP BY ai_provider
    `).all() as { ai_provider: string; count: number }[],
  };

  return {
    totalGrades: stats.totalGrades.count,
    totalSubjects: stats.totalSubjects.count,
    totalTopics: stats.totalTopics.count,
    totalQuestions: stats.totalQuestions.count,
    aiGeneratedQuestions: stats.aiGeneratedQuestions.count,
    manualQuestions: stats.totalQuestions.count - stats.aiGeneratedQuestions.count,
    questionsByDifficulty: stats.questionsByDifficulty,
    questionsByProvider: stats.questionsByProvider,
  };
}

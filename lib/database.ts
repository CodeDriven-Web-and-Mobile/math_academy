import Database from 'better-sqlite3';
import path from 'path';

// Database instance
let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!db) {
    const dbPath = path.join(process.cwd(), 'data', 'ontario-math.db');
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    initializeDatabase(db);
  }
  return db;
}

function initializeDatabase(db: Database.Database) {
  // Create tables
  db.exec(`
    -- Grades table
    CREATE TABLE IF NOT EXISTS grades (
      id INTEGER PRIMARY KEY,
      grade_number INTEGER UNIQUE NOT NULL,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Subjects table
    CREATE TABLE IF NOT EXISTS subjects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      grade_id INTEGER NOT NULL,
      subject_id TEXT NOT NULL,
      name TEXT NOT NULL,
      icon TEXT,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (grade_id) REFERENCES grades(id),
      UNIQUE(grade_id, subject_id)
    );

    -- Topics table
    CREATE TABLE IF NOT EXISTS topics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject_id INTEGER NOT NULL,
      topic_id TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (subject_id) REFERENCES subjects(id),
      UNIQUE(subject_id, topic_id)
    );

    -- Questions table
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      topic_id INTEGER NOT NULL,
      question_id TEXT NOT NULL,
      question TEXT NOT NULL,
      option_a TEXT NOT NULL,
      option_b TEXT NOT NULL,
      option_c TEXT NOT NULL,
      option_d TEXT NOT NULL,
      correct_answer INTEGER NOT NULL CHECK(correct_answer >= 0 AND correct_answer <= 3),
      explanation TEXT NOT NULL,
      difficulty TEXT NOT NULL CHECK(difficulty IN ('easy', 'medium', 'hard', 'advanced')),
      ai_generated BOOLEAN DEFAULT 0,
      ai_provider TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (topic_id) REFERENCES topics(id),
      UNIQUE(topic_id, question_id)
    );
    -- Indexes for better performance
    CREATE INDEX IF NOT EXISTS idx_subjects_grade ON subjects(grade_id);
    CREATE INDEX IF NOT EXISTS idx_topics_subject ON topics(subject_id);
    CREATE INDEX IF NOT EXISTS idx_questions_topic ON questions(topic_id);
    CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions(difficulty);
    CREATE INDEX IF NOT EXISTS idx_questions_ai ON questions(ai_generated);

    -- Student progress tracking
    CREATE TABLE IF NOT EXISTS quiz_attempts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id TEXT NOT NULL,
      topic_id INTEGER NOT NULL,
      difficulty TEXT NOT NULL,
      total_questions INTEGER NOT NULL,
      correct_answers INTEGER NOT NULL,
      score_percentage REAL NOT NULL,
      time_spent_seconds INTEGER,
      completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (topic_id) REFERENCES topics(id)
    );

    CREATE TABLE IF NOT EXISTS question_responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      attempt_id INTEGER NOT NULL,
      question_id INTEGER NOT NULL,
      selected_answer INTEGER NOT NULL,
      is_correct INTEGER NOT NULL,
      time_spent_seconds INTEGER,
      FOREIGN KEY (attempt_id) REFERENCES quiz_attempts(id),
      FOREIGN KEY (question_id) REFERENCES questions(id)
    );

    CREATE INDEX IF NOT EXISTS idx_quiz_attempts_student ON quiz_attempts(student_id);
    CREATE INDEX IF NOT EXISTS idx_quiz_attempts_topic ON quiz_attempts(topic_id);
    CREATE INDEX IF NOT EXISTS idx_question_responses_attempt ON question_responses(attempt_id);
  `);

  console.log('✅ Database initialized successfully');
}
export function closeDatabase() {
  if (db) {
    db.close();
    db = null;
  }
}

// Database types
export interface DBGrade {
  id: number;
  grade_number: number;
  description: string | null;
  created_at: string;
}

export interface DBSubject {
  id: number;
  grade_id: number;
  subject_id: string;
  name: string;
  icon: string | null;
  description: string | null;
  created_at: string;
}

export interface DBTopic {
  id: number;
  subject_id: number;
  topic_id: string;
  title: string;
  description: string | null;
  content: string | null;
  created_at: string;
}

export interface DBQuestion {
  id: number;
  topic_id: number;
  question_id: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced';
  ai_generated: boolean;
  ai_provider: string | null;
  created_at: string;
}

// Helper function to convert DB question to app format
export function dbQuestionToAppFormat(dbQuestion: DBQuestion) {
  return {
    id: dbQuestion.question_id,
    question: dbQuestion.question,
    options: [
      dbQuestion.option_a,
      dbQuestion.option_b,
      dbQuestion.option_c,
      dbQuestion.option_d,
    ],
    correctAnswer: dbQuestion.correct_answer,
    explanation: dbQuestion.explanation,
    difficulty: dbQuestion.difficulty,
  };
}

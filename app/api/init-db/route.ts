import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/database';
import { curriculumData } from '@/lib/curriculum-data';

export async function GET() {
  try {
    const db = getDatabase();
    
    // Check if data already exists
    const existingGrades = db.prepare('SELECT COUNT(*) as count FROM grades').get() as { count: number };
    
    if (existingGrades.count > 0) {
      return NextResponse.json({ 
        message: 'Database already initialized',
        grades: existingGrades.count 
      });
    }

    // Seed the database with curriculum data
    curriculumData.forEach((gradeData) => {
      // Insert grade
      db.prepare(`
        INSERT OR IGNORE INTO grades (grade_number, description)
        VALUES (?, ?)
      `).run(gradeData.grade, `Grade ${gradeData.grade} Mathematics`);

      const gradeId = db.prepare('SELECT id FROM grades WHERE grade_number = ?').get(gradeData.grade) as { id: number };

      // Insert subjects
      gradeData.subjects.forEach((subject) => {
        db.prepare(`
          INSERT OR IGNORE INTO subjects (grade_id, subject_id, name, icon, description)
          VALUES (?, ?, ?, ?, ?)
        `).run(gradeId.id, subject.id, subject.name, subject.icon, subject.description);

        const subjectDbId = db.prepare(`
          SELECT id FROM subjects WHERE grade_id = ? AND subject_id = ?
        `).get(gradeId.id, subject.id) as { id: number };

        // Insert topics
        subject.topics.forEach((topic) => {
          db.prepare(`
            INSERT OR IGNORE INTO topics (subject_id, topic_id, title, description, content)
            VALUES (?, ?, ?, ?, ?)
          `).run(subjectDbId.id, topic.id, topic.title, topic.description, topic.content || '');

          const topicDbId = db.prepare(`
            SELECT id FROM topics WHERE subject_id = ? AND topic_id = ?
          `).get(subjectDbId.id, topic.id) as { id: number };

          // Insert questions
          topic.questions.forEach((question) => {
            db.prepare(`
              INSERT OR IGNORE INTO questions (
                topic_id, question_id, question, option_a, option_b, option_c, option_d,
                correct_answer, explanation, difficulty
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).run(
              topicDbId.id,
              question.id,
              question.question,
              question.options[0],
              question.options[1],
              question.options[2],
              question.options[3],
              question.correctAnswer,
              question.explanation,
              question.difficulty
            );
          });
        });
      });
    });

    const finalCount = db.prepare('SELECT COUNT(*) as count FROM grades').get() as { count: number };

    return NextResponse.json({ 
      success: true,
      message: 'Database initialized successfully',
      grades: finalCount.count
    });

  } catch (error: any) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize database', message: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}

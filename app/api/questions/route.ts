import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/database';

// GET all questions or filter by topic
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const topicId = searchParams.get('topicId');
    const grade = searchParams.get('grade');
    const aiOnly = searchParams.get('aiOnly') === 'true';

    const db = getDatabase();
    
    let query = `
      SELECT 
        q.*,
        t.title as topic_title,
        t.topic_id,
        s.name as subject_name,
        s.subject_id,
        g.grade_number
      FROM questions q
      JOIN topics t ON q.topic_id = t.id
      JOIN subjects s ON t.subject_id = s.id
      JOIN grades g ON s.grade_id = g.id
      WHERE 1=1
    `;
    
    const params: any[] = [];
    
    if (topicId) {
      query += ` AND t.topic_id = ?`;
      params.push(topicId);
    }
    
    if (grade) {
      query += ` AND g.grade_number = ?`;
      params.push(parseInt(grade));
    }
    
    if (aiOnly) {
      query += ` AND q.ai_generated = 1`;
    }
    
    query += ` ORDER BY g.grade_number, s.name, t.title, q.id`;
    
    const questions = db.prepare(query).all(...params);
    
    return NextResponse.json(questions);

  } catch (error: any) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch questions', message: error.message },
      { status: 500 }
    );
  }
}

// PUT update a question
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      id,
      question,
      option_a,
      option_b,
      option_c,
      option_d,
      correct_answer,
      explanation,
      difficulty,
    } = body;

    // Validate
    if (!id || !question || !option_a || !option_b || !option_c || !option_d || 
        correct_answer === undefined || !explanation || !difficulty) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (correct_answer < 0 || correct_answer > 3) {
      return NextResponse.json(
        { error: 'Correct answer must be between 0 and 3' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    
    const result = db.prepare(`
      UPDATE questions 
      SET question = ?,
          option_a = ?,
          option_b = ?,
          option_c = ?,
          option_d = ?,
          correct_answer = ?,
          explanation = ?,
          difficulty = ?
      WHERE id = ?
    `).run(
      question,
      option_a,
      option_b,
      option_c,
      option_d,
      correct_answer,
      explanation,
      difficulty,
      id
    );

    if (result.changes === 0) {
      return NextResponse.json(
        { error: 'Question not found' },
        { status: 404 }
      );
    }

    console.log(`✅ Question ${id} updated successfully`);

    return NextResponse.json({
      success: true,
      message: 'Question updated successfully',
    });

  } catch (error: any) {
    console.error('Error updating question:', error);
    return NextResponse.json(
      { error: 'Failed to update question', message: error.message },
      { status: 500 }
    );
  }
}

// DELETE a question
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Question ID required' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    
    const result = db.prepare(`
      DELETE FROM questions WHERE id = ?
    `).run(parseInt(id));

    if (result.changes === 0) {
      return NextResponse.json(
        { error: 'Question not found' },
        { status: 404 }
      );
    }

    console.log(`✅ Question ${id} deleted successfully`);

    return NextResponse.json({
      success: true,
      message: 'Question deleted successfully',
    });

  } catch (error: any) {
    console.error('Error deleting question:', error);
    return NextResponse.json(
      { error: 'Failed to delete question', message: error.message },
      { status: 500 }
    );
  }
}

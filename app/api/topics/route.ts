import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/database';

export async function GET() {
  try {
    const db = getDatabase();
    
    const topics = db.prepare(`
      SELECT 
        t.id,
        t.topic_id,
        t.title,
        t.description,
        t.content,
        g.grade_number,
        s.subject_id,
        s.name as subject_name
      FROM topics t
      JOIN subjects s ON t.subject_id = s.id
      JOIN grades g ON s.grade_id = g.id
      ORDER BY g.grade_number, s.name, t.title
    `).all();

    return NextResponse.json(topics);
  } catch (error: any) {
    console.error('Error fetching topics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch topics', message: error.message },
      { status: 500 }
    );
  }
}

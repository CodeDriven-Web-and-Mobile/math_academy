import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topicId, content, description } = body;

    if (!topicId) {
      return NextResponse.json(
        { error: 'Topic ID is required' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    
    db.prepare(`
      UPDATE topics 
      SET content = ?, description = ?
      WHERE id = ?
    `).run(content || '', description || '', topicId);

    return NextResponse.json({ 
      success: true,
      message: 'Content updated successfully' 
    });
  } catch (error: any) {
    console.error('Error updating topic:', error);
    return NextResponse.json(
      { error: 'Failed to update topic', message: error.message },
      { status: 500 }
    );
  }
}

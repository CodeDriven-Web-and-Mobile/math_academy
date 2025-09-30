import { NextRequest, NextResponse } from 'next/server';
import { getAllGrades, getGradeByNumber, getStatistics } from '@/lib/db-operations';
import { getDatabase } from '@/lib/database';

// GET all grades or specific grade
export async function GET(request: NextRequest) {
  try {
    // Ensure database is initialized
    try {
      getDatabase();
    } catch (dbError) {
      console.error('Database initialization error:', dbError);
    }

    const { searchParams } = new URL(request.url);
    const grade = searchParams.get('grade');

    if (grade) {
      const gradeNumber = parseInt(grade);
      
      try {
        const gradeData = getGradeByNumber(gradeNumber);
        
        if (!gradeData) {
          return NextResponse.json(
            { error: `Grade ${gradeNumber} not found` },
            { status: 404 }
          );
        }

        return NextResponse.json(gradeData);
      } catch (error: any) {
        console.error(`Error fetching grade ${gradeNumber}:`, error);
        return NextResponse.json(
          { error: 'Database error', message: error.message },
          { status: 500 }
        );
      }
    }

    // Return all grades
    try {
      const grades = getAllGrades();
      return NextResponse.json(grades);
    } catch (error: any) {
      console.error('Error fetching all grades:', error);
      return NextResponse.json(
        { error: 'Database error', message: error.message },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Error fetching curriculum:', error);
    return NextResponse.json(
      { error: 'Failed to fetch curriculum data', message: error.message, stack: error.stack },
      { status: 500 }
    );
  }
}

// GET statistics
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (body.action === 'statistics') {
      const stats = getStatistics();
      return NextResponse.json(stats);
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );

  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', message: error.message },
      { status: 500 }
    );
  }
}

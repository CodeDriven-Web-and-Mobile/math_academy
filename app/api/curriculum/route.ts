import { NextRequest, NextResponse } from 'next/server';
import { getAllGrades, getGradeByNumber, getStatistics } from '@/lib/db-operations';

// GET all grades or specific grade
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const grade = searchParams.get('grade');

    if (grade) {
      const gradeNumber = parseInt(grade);
      const gradeData = getGradeByNumber(gradeNumber);
      
      if (!gradeData) {
        return NextResponse.json(
          { error: `Grade ${gradeNumber} not found` },
          { status: 404 }
        );
      }

      return NextResponse.json(gradeData);
    }

    // Return all grades
    const grades = getAllGrades();
    return NextResponse.json(grades);

  } catch (error: any) {
    console.error('Error fetching curriculum:', error);
    return NextResponse.json(
      { error: 'Failed to fetch curriculum data', message: error.message },
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

import { NextRequest, NextResponse } from 'next/server';
import { curriculumData } from '@/lib/curriculum-data';

// GET all grades or specific grade
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const grade = searchParams.get('grade');

    if (grade) {
      const gradeNumber = parseInt(grade);
      const gradeData = curriculumData.find(g => g.grade === gradeNumber);
      
      if (!gradeData) {
        return NextResponse.json(
          { error: `Grade ${gradeNumber} not found` },
          { status: 404 }
        );
      }

      return NextResponse.json(gradeData);
    }

    // Return all grades
    return NextResponse.json(curriculumData);

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
      // Calculate statistics from curriculum data
      const totalGrades = curriculumData.length;
      const totalSubjects = curriculumData.reduce((sum, g) => sum + g.subjects.length, 0);
      const totalTopics = curriculumData.reduce((sum, g) => 
        sum + g.subjects.reduce((s, subj) => s + subj.topics.length, 0), 0);
      const totalQuestions = curriculumData.reduce((sum, g) => 
        sum + g.subjects.reduce((s, subj) => 
          s + subj.topics.reduce((t, topic) => t + topic.questions.length, 0), 0), 0);

      return NextResponse.json({
        totalGrades,
        totalSubjects,
        totalTopics,
        totalQuestions
      });
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

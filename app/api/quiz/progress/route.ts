import { NextRequest, NextResponse } from 'next/server';
import { 
  saveQuizAttempt, 
  saveQuestionResponse, 
  getStudentProgress, 
  getTopicProgress,
  getRecommendedReview 
} from '@/lib/progress-operations';

// Save quiz attempt
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      studentId,
      topicId,
      difficulty,
      totalQuestions,
      correctAnswers,
      timeSpent,
      responses,
    } = body;

    // Validate
    if (!studentId || !topicId || !difficulty || totalQuestions === undefined || correctAnswers === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save quiz attempt
    const attemptId = saveQuizAttempt(
      studentId,
      topicId,
      difficulty,
      totalQuestions,
      correctAnswers,
      timeSpent || null
    );

    // Save individual responses
    if (responses && Array.isArray(responses)) {
      responses.forEach((response: any) => {
        saveQuestionResponse(
          attemptId,
          response.questionId,
          response.selectedAnswer,
          response.isCorrect,
          response.timeSpent || null
        );
      });
    }

    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const needsReview = scorePercentage < 60;

    console.log(`✅ Quiz attempt saved for student ${studentId}: ${scorePercentage}%`);

    return NextResponse.json({
      success: true,
      attemptId,
      scorePercentage,
      needsReview,
      message: needsReview 
        ? 'Consider reviewing the lesson content to improve your understanding.'
        : 'Great job! Keep practicing to maintain your progress.',
    });

  } catch (error: any) {
    console.error('Error saving quiz progress:', error);
    return NextResponse.json(
      { error: 'Failed to save progress', message: error.message },
      { status: 500 }
    );
  }
}

// Get student progress
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');
    const topicId = searchParams.get('topicId');
    const action = searchParams.get('action');

    if (!studentId) {
      return NextResponse.json(
        { error: 'Student ID required' },
        { status: 400 }
      );
    }

    // Get recommended review topics
    if (action === 'recommendations') {
      const recommendations = getRecommendedReview(studentId);
      return NextResponse.json({ recommendations });
    }

    // Get topic-specific progress
    if (topicId) {
      const progress = getTopicProgress(studentId, parseInt(topicId));
      return NextResponse.json(progress);
    }

    // Get overall progress
    const progress = getStudentProgress(studentId);
    return NextResponse.json(progress);

  } catch (error: any) {
    console.error('Error fetching progress:', error);
    return NextResponse.json(
      { error: 'Failed to fetch progress', message: error.message },
      { status: 500 }
    );
  }
}

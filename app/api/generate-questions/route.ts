import { NextRequest, NextResponse } from 'next/server';
import { getAIService, QuestionGenerationRequest } from '@/lib/ai-providers';
import { insertAIGeneratedQuestions } from '@/lib/db-operations';

export async function POST(request: NextRequest) {
  try {
    // Check if AI questions are enabled
    if (process.env.ENABLE_AI_QUESTIONS !== 'true') {
      return NextResponse.json(
        { error: 'AI question generation is not enabled' },
        { status: 403 }
      );
    }

    const body: QuestionGenerationRequest & { 
      provider?: 'openai' | 'claude' | 'deepseek';
      subjectId?: string;
      topicId?: string;
      saveToDb?: boolean;
    } = await request.json();

    // Validate request
    if (!body.topic || !body.grade || !body.difficulty || !body.count || !body.subject) {
      return NextResponse.json(
        { error: 'Missing required fields: topic, grade, difficulty, count, subject' },
        { status: 400 }
      );
    }

    // Validate count
    if (body.count < 1 || body.count > 10) {
      return NextResponse.json(
        { error: 'Count must be between 1 and 10' },
        { status: 400 }
      );
    }

    // Get AI service
    const aiService = getAIService(body.provider);

    // Generate questions
    const questions = await aiService.generateQuestions({
      topic: body.topic,
      grade: body.grade,
      difficulty: body.difficulty,
      count: body.count,
      subject: body.subject,
      context: body.context,
    });

    // Check for duplicates and save to database if requested
    let savedIds: number[] = [];
    if (body.saveToDb && body.subjectId && body.topicId) {
      try {
        const { getDatabase } = require('@/lib/database');
        const db = getDatabase();
        
        // Get existing questions for this topic
        const existingQuestions = db.prepare(`
          SELECT q.question FROM questions q
          JOIN topics t ON q.topic_id = t.id
          JOIN subjects s ON t.subject_id = s.id
          JOIN grades g ON s.grade_id = g.id
          WHERE g.grade_number = ? AND s.subject_id = ? AND t.topic_id = ?
        `).all(body.grade, body.subjectId, body.topicId) as { question: string }[];

        // Filter out duplicates (check for similar questions)
        const uniqueQuestions = questions.filter(newQ => {
          const isDuplicate = existingQuestions.some(existingQ => {
            // Simple similarity check - normalize and compare
            const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
            const similarity = normalize(newQ.question).includes(normalize(existingQ.question).substring(0, 20)) ||
                             normalize(existingQ.question).includes(normalize(newQ.question).substring(0, 20));
            return similarity;
          });
          return !isDuplicate;
        });

        if (uniqueQuestions.length === 0) {
          console.log('⚠️ All generated questions are duplicates. Try generating with different parameters.');
        } else {
          const questionsWithIds = uniqueQuestions.map((q, i) => ({
            id: `ai-${Date.now()}-${i}`,
            ...q
          }));
          savedIds = insertAIGeneratedQuestions(
            body.grade,
            body.subjectId,
            body.topicId,
            questionsWithIds,
            aiService.getProvider()
          );
          console.log(`✅ Saved ${savedIds.length} unique AI-generated questions to database (${questions.length - uniqueQuestions.length} duplicates filtered)`);
        }
      } catch (dbError: any) {
        console.error('Error saving to database:', dbError);
      }
    }

    return NextResponse.json({
      success: true,
      provider: aiService.getProvider(),
      questions,
      count: questions.length,
      savedToDb: savedIds.length > 0,
      savedIds: savedIds.length > 0 ? savedIds : undefined,
      duplicatesFiltered: body.saveToDb ? questions.length - savedIds.length : 0,
    });

  } catch (error: any) {
    console.error('Error generating questions:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate questions',
        message: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

// GET endpoint to check API status
export async function GET() {
  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  const hasClaude = !!process.env.ANTHROPIC_API_KEY;
  const hasDeepSeek = !!process.env.DEEPSEEK_API_KEY;
  const isEnabled = process.env.ENABLE_AI_QUESTIONS === 'true';

  return NextResponse.json({
    enabled: isEnabled,
    providers: {
      openai: hasOpenAI,
      claude: hasClaude,
      deepseek: hasDeepSeek,
    },
    defaultProvider: process.env.DEFAULT_AI_PROVIDER || 'openai',
  });
}

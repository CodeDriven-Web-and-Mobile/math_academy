import { NextRequest, NextResponse } from 'next/server';
import { getAIService } from '@/lib/ai-providers';
import { getDatabase } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    // Check if AI content generation is enabled
    if (process.env.ENABLE_AI_QUESTIONS !== 'true') {
      return NextResponse.json(
        { error: 'AI content generation is not enabled' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      topic,
      grade,
      subject,
      subjectId,
      topicId,
      contentType = 'full',
      currentContent,
      provider,
      appendMode = true,
      saveToDb = false,
    } = body;

    // Validate request
    if (!topic || !grade || !subject) {
      return NextResponse.json(
        { error: 'Missing required fields: topic, grade, subject' },
        { status: 400 }
      );
    }

    // Get AI service
    const aiService = getAIService(provider);

    // Build prompt based on content type
    let prompt = '';
    
    if (contentType === 'full') {
      prompt = `Create comprehensive lesson content for Grade ${grade} students learning about "${topic}" in ${subject}.

IMPORTANT: Use LaTeX notation for all mathematical formulas and expressions:
- Inline math: \\( formula \\) or $ formula $
- Display math: \\[ formula \\] or $$ formula $$
- Examples: \\( \\frac{a}{b} \\), \\( x^2 \\), \\( \\sqrt{x} \\), \\( \\sum_{i=1}^{n} \\)

VISUALIZATIONS: Include Mermaid diagrams where helpful:
\`\`\`mermaid
graph TD
    A[Start] --> B[Step 1]
    B --> C[Step 2]
    C --> D[End]
\`\`\`

Diagram types:
- Flowcharts: graph TD or graph LR
- Number lines: Use simple graph
- Process steps: graph TD
- Relationships: graph LR

The content should follow this structure:

# ${topic}

[Brief introduction explaining what this topic is and why it's important]

## Key Concepts:
- **Concept 1**: Clear explanation with LaTeX formulas where appropriate
- **Concept 2**: Clear explanation with LaTeX formulas where appropriate
- **Concept 3**: Clear explanation with LaTeX formulas where appropriate

## Important Formulas/Rules:
[List formulas using LaTeX notation, e.g., \\( \\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd} \\)]

## Step-by-Step Process:
1. Step one with explanation (use LaTeX for math)
2. Step two with explanation (use LaTeX for math)
3. Step three with explanation (use LaTeX for math)

## Worked Examples:

### Example 1:
**Problem**: [State the problem using LaTeX, e.g., \\( \\frac{1}{4} + \\frac{2}{4} \\)]
**Solution**: 
[Show step-by-step solution with LaTeX formulas]
**Answer**: [Final answer with LaTeX]

### Example 2:
**Problem**: [State the problem using LaTeX]
**Solution**: 
[Show step-by-step solution with LaTeX formulas]
**Answer**: [Final answer with LaTeX]

## Common Mistakes to Avoid:
- Mistake 1 and how to avoid it
- Mistake 2 and how to avoid it

## Real-World Applications:
- Application 1 with explanation
- Application 2 with explanation

## Practice Tips:
- Tip 1
- Tip 2

Make it engaging, clear, and appropriate for Grade ${grade} students following the Ontario curriculum. Use LaTeX for ALL mathematical expressions!`;
    } else if (contentType === 'expand') {
      prompt = `Expand and enhance the following lesson content for Grade ${grade} students learning about "${topic}" in ${subject}.

IMPORTANT: Use LaTeX notation for all mathematical formulas:
- Inline math: \\( formula \\) or $ formula $
- Display math: \\[ formula \\] or $$ formula $$

Current Content:
${currentContent}

Please:
1. Add more detailed explanations where needed (use LaTeX for all math)
2. Include additional worked examples (use LaTeX for all formulas)
3. Add more real-world applications
4. Include practice tips and common mistakes
5. Make it more comprehensive while maintaining the existing structure

Keep the same markdown format and make it engaging for Grade ${grade} students. Use LaTeX for ALL mathematical expressions!`;
    } else if (contentType === 'examples') {
      prompt = `Generate 3-5 additional worked examples for Grade ${grade} students learning about "${topic}" in ${subject}.

IMPORTANT: Use LaTeX notation for all mathematical formulas:
- Inline math: \\( formula \\) or $ formula $
- Display math: \\[ formula \\] or $$ formula $$
- Examples: \\( \\frac{a}{b} \\), \\( x^2 \\), \\( \\sqrt{x} \\)

${currentContent ? `Context from existing lesson:\n${currentContent}\n\n` : ''}

For each example, provide:
- A clear problem statement (using LaTeX for math)
- Step-by-step solution with explanations (using LaTeX for all formulas)
- Final answer (using LaTeX)
- Why this example is useful

Format in markdown with clear headings. Make examples progressively more challenging. Use LaTeX for ALL mathematical expressions!`;
    }

    // Generate content using AI
    const response = await fetch(
      provider === 'claude' 
        ? 'https://api.anthropic.com/v1/messages'
        : provider === 'deepseek'
        ? 'https://api.deepseek.com/v1/chat/completions'
        : 'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(provider === 'claude' 
            ? {
                'x-api-key': process.env.ANTHROPIC_API_KEY!,
                'anthropic-version': '2023-06-01',
              }
            : {
                'Authorization': `Bearer ${provider === 'deepseek' ? process.env.DEEPSEEK_API_KEY : process.env.OPENAI_API_KEY}`,
              }
          ),
        },
        body: JSON.stringify(
          provider === 'claude'
            ? {
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 4096,
                messages: [{ role: 'user', content: prompt }],
              }
            : {
                model: provider === 'deepseek' ? 'deepseek-chat' : 'gpt-4o-mini',
                messages: [
                  {
                    role: 'system',
                    content: 'You are an expert mathematics educator creating comprehensive lesson content for Ontario curriculum students.',
                  },
                  { role: 'user', content: prompt },
                ],
                temperature: 0.7,
              }
        ),
      }
    );

    if (!response.ok) {
      throw new Error(`AI API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Extract content based on provider
    let content = '';
    if (provider === 'claude') {
      content = data.content[0].text;
    } else {
      content = data.choices[0].message.content;
    }

    // Save to database if requested
    let saved = false;
    if (saveToDb && subjectId && topicId) {
      try {
        const db = getDatabase();
        
        // Get topic DB ID and current content
        const topicRecord = db.prepare(`
          SELECT t.id, t.content FROM topics t
          JOIN subjects s ON t.subject_id = s.id
          JOIN grades g ON s.grade_id = g.id
          WHERE g.grade_number = ? AND s.subject_id = ? AND t.topic_id = ?
        `).get(grade, subjectId, topicId) as { id: number; content: string | null } | undefined;

        if (topicRecord) {
          let finalContent = content;
          
          // Respect appendMode setting
          if (topicRecord.content && appendMode) {
            // Append new content with separator
            const sectionTitle = contentType === 'expand' 
              ? 'Additional Content (AI-Enhanced)' 
              : contentType === 'examples'
              ? 'Additional Examples'
              : 'Updated Content';
            
            finalContent = topicRecord.content + '\n\n---\n\n## ' + sectionTitle + '\n\n' + content;
          }
          // If appendMode is false, just use the new content (replace)
          
          // Update topic content
          db.prepare(`
            UPDATE topics 
            SET content = ?, 
                description = CASE 
                  WHEN description IS NULL OR description = '' 
                  THEN ? 
                  ELSE description 
                END
            WHERE id = ?
          `).run(
            finalContent,
            `Comprehensive lesson on ${topic}`,
            topicRecord.id
          );
          
          saved = true;
          const action = topicRecord.content ? 'expanded' : 'created';
          console.log(`✅ Content ${action} in database for Grade ${grade} - ${subject} - ${topic}`);
        }
      } catch (dbError: any) {
        console.error('Error saving content to database:', dbError);
      }
    }

    return NextResponse.json({
      success: true,
      provider: aiService.getProvider(),
      content,
      savedToDb: saved,
      contentType,
    });

  } catch (error: any) {
    console.error('Error generating content:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate content',
        message: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

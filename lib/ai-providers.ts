// AI Provider Configuration and API Clients

export type AIProvider = 'openai' | 'claude' | 'deepseek';

export interface AIConfig {
  provider: AIProvider;
  apiKey: string;
  model?: string;
}

export interface QuestionGenerationRequest {
  topic: string;
  grade: number;
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced';
  count: number;
  subject: string;
  context?: string;
}

export interface GeneratedQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced';
}

// OpenAI Client
export class OpenAIProvider {
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model: string = 'gpt-4o-mini') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async generateQuestions(request: QuestionGenerationRequest): Promise<GeneratedQuestion[]> {
    const prompt = this.buildPrompt(request);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          {
            role: 'system',
            content: 'You are an expert mathematics educator creating questions for Ontario curriculum students. Generate questions in valid JSON format.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' }
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);
    return content.questions;
  }

  private buildPrompt(request: QuestionGenerationRequest): string {
    return `Generate ${request.count} ${request.difficulty} level mathematics questions for Grade ${request.grade} students studying ${request.topic} in the ${request.subject} subject.

${request.context ? `Context: ${request.context}` : ''}

Requirements:
- Align with Ontario mathematics curriculum
- Age-appropriate language for Grade ${request.grade}
- Each question must have exactly 4 options
- Mark the correct answer index (0-3)
- Provide clear, educational explanations
- Difficulty: ${request.difficulty}

Return JSON in this exact format:
{
  "questions": [
    {
      "question": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Detailed explanation of why this is correct and how to solve it.",
      "difficulty": "${request.difficulty}"
    }
  ]
}`;
  }
}

// Claude (Anthropic) Client
export class ClaudeProvider {
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model: string = 'claude-3-5-sonnet-20241022') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async generateQuestions(request: QuestionGenerationRequest): Promise<GeneratedQuestion[]> {
    const prompt = this.buildPrompt(request);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: this.model,
        max_tokens: 4096,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.content[0].text;
    
    // Extract JSON from markdown code blocks if present
    const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/) || content.match(/\{[\s\S]*\}/);
    const jsonStr = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : content;
    const parsed = JSON.parse(jsonStr);
    
    return parsed.questions;
  }

  private buildPrompt(request: QuestionGenerationRequest): string {
    return `Generate ${request.count} ${request.difficulty} level mathematics questions for Grade ${request.grade} students studying ${request.topic} in the ${request.subject} subject.

${request.context ? `Context: ${request.context}` : ''}

Requirements:
- Align with Ontario mathematics curriculum
- Age-appropriate language for Grade ${request.grade}
- Each question must have exactly 4 options
- Mark the correct answer index (0-3)
- Provide clear, educational explanations
- Difficulty: ${request.difficulty}

Return ONLY valid JSON in this exact format (no markdown, no extra text):
{
  "questions": [
    {
      "question": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Detailed explanation of why this is correct and how to solve it.",
      "difficulty": "${request.difficulty}"
    }
  ]
}`;
  }
}

// DeepSeek Client
export class DeepSeekProvider {
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model: string = 'deepseek-chat') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async generateQuestions(request: QuestionGenerationRequest): Promise<GeneratedQuestion[]> {
    const prompt = this.buildPrompt(request);

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          {
            role: 'system',
            content: 'You are an expert mathematics educator creating questions for Ontario curriculum students. Generate questions in valid JSON format.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' }
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);
    return content.questions;
  }

  private buildPrompt(request: QuestionGenerationRequest): string {
    return `Generate ${request.count} ${request.difficulty} level mathematics questions for Grade ${request.grade} students studying ${request.topic} in the ${request.subject} subject.

${request.context ? `Context: ${request.context}` : ''}

Requirements:
- Align with Ontario mathematics curriculum
- Age-appropriate language for Grade ${request.grade}
- Each question must have exactly 4 options
- Mark the correct answer index (0-3)
- Provide clear, educational explanations
- Difficulty: ${request.difficulty}

Return JSON in this exact format:
{
  "questions": [
    {
      "question": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Detailed explanation of why this is correct and how to solve it.",
      "difficulty": "${request.difficulty}"
    }
  ]
}`;
  }
}

// AI Service Factory
export class AIService {
  private provider: AIProvider;
  private client: OpenAIProvider | ClaudeProvider | DeepSeekProvider;

  constructor(provider: AIProvider = 'openai') {
    this.provider = provider;
    
    const apiKey = this.getApiKey(provider);
    
    switch (provider) {
      case 'openai':
        this.client = new OpenAIProvider(apiKey);
        break;
      case 'claude':
        this.client = new ClaudeProvider(apiKey);
        break;
      case 'deepseek':
        this.client = new DeepSeekProvider(apiKey);
        break;
      default:
        throw new Error(`Unknown AI provider: ${provider}`);
    }
  }

  private getApiKey(provider: AIProvider): string {
    const keys = {
      openai: process.env.OPENAI_API_KEY,
      claude: process.env.ANTHROPIC_API_KEY,
      deepseek: process.env.DEEPSEEK_API_KEY,
    };

    const key = keys[provider];
    if (!key) {
      throw new Error(`API key not found for provider: ${provider}. Please set it in .env.local`);
    }

    return key;
  }

  async generateQuestions(request: QuestionGenerationRequest): Promise<GeneratedQuestion[]> {
    return this.client.generateQuestions(request);
  }

  getProvider(): AIProvider {
    return this.provider;
  }
}

// Helper function to get AI service instance
export function getAIService(provider?: AIProvider): AIService {
  const defaultProvider = (process.env.DEFAULT_AI_PROVIDER as AIProvider) || 'openai';
  return new AIService(provider || defaultProvider);
}

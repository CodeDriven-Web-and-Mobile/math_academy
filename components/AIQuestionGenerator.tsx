'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Loader2, CheckCircle, XCircle } from 'lucide-react';

interface AIQuestionGeneratorProps {
  topic: string;
  grade: number;
  subject: string;
  subjectId?: string;
  topicId?: string;
  onQuestionsGenerated?: (questions: any[]) => void;
}

export default function AIQuestionGenerator({
  topic,
  grade,
  subject,
  subjectId,
  topicId,
  onQuestionsGenerated,
}: AIQuestionGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | 'advanced'>('medium');
  const [selectedProvider, setSelectedProvider] = useState<'openai' | 'claude' | 'deepseek'>('openai');
  const [questionCount, setQuestionCount] = useState(3);
  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);
  const [savedToDatabase, setSavedToDatabase] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiStatus, setApiStatus] = useState<any>(null);

  // Check API status on mount
  useState(() => {
    fetch('/api/generate-questions')
      .then(res => res.json())
      .then(data => setApiStatus(data))
      .catch(() => setApiStatus({ enabled: false }));
  });

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    setGeneratedQuestions([]);
    setSavedToDatabase(false);

    try {
      const response = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic,
          grade,
          subject,
          subjectId,
          topicId,
          difficulty: selectedDifficulty,
          count: questionCount,
          provider: selectedProvider,
          saveToDb: !!(subjectId && topicId), // Save to DB if IDs are provided
          context: `Ontario curriculum Grade ${grade} mathematics`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate questions');
      }

      const data = await response.json();
      setGeneratedQuestions(data.questions);
      setSavedToDatabase(data.savedToDb || false);
      
      // Show success message if saved to database
      if (data.savedToDb) {
        console.log(`✅ ${data.count} questions saved to database for Grade ${grade} - ${subject} - ${topic}`);
      }
      
      if (onQuestionsGenerated) {
        onQuestionsGenerated(data.questions);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while generating questions');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!apiStatus?.enabled) {
    return (
      <Card className="border-2 border-amber-200 bg-amber-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-amber-800 mb-2">⚠️ AI Question Generation Not Configured</p>
            <p className="text-sm text-amber-700">
              To enable AI-generated questions, add API keys to your .env.local file.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
          AI Question Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* AI Provider Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AI Provider
          </label>
          <div className="flex gap-2">
            {apiStatus?.providers?.openai && (
              <Button
                variant={selectedProvider === 'openai' ? 'default' : 'outline'}
                onClick={() => setSelectedProvider('openai')}
                size="sm"
              >
                OpenAI
              </Button>
            )}
            {apiStatus?.providers?.claude && (
              <Button
                variant={selectedProvider === 'claude' ? 'default' : 'outline'}
                onClick={() => setSelectedProvider('claude')}
                size="sm"
              >
                Claude
              </Button>
            )}
            {apiStatus?.providers?.deepseek && (
              <Button
                variant={selectedProvider === 'deepseek' ? 'default' : 'outline'}
                onClick={() => setSelectedProvider('deepseek')}
                size="sm"
              >
                DeepSeek
              </Button>
            )}
          </div>
        </div>

        {/* Difficulty Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Difficulty Level
          </label>
          <div className="flex gap-2 flex-wrap">
            {(['easy', 'medium', 'hard', 'advanced'] as const).map((diff) => (
              <Button
                key={diff}
                variant={selectedDifficulty === diff ? 'default' : 'outline'}
                onClick={() => setSelectedDifficulty(diff)}
                size="sm"
              >
                {diff.charAt(0).toUpperCase() + diff.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Question Count */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Questions: {questionCount}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={questionCount}
            onChange={(e) => setQuestionCount(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Questions...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate {questionCount} Question{questionCount > 1 ? 's' : ''}
            </>
          )}
        </Button>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800">Error</p>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Generated Questions Display */}
        {generatedQuestions.length > 0 && (
          <div className="space-y-4 mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">
                  Generated {generatedQuestions.length} Question{generatedQuestions.length > 1 ? 's' : ''}
                </h3>
              </div>
              {savedToDatabase && (
                <Badge className="bg-green-100 text-green-800 gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Saved to Database
                </Badge>
              )}
            </div>

            {generatedQuestions.map((q, index) => (
              <Card key={index} className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Question {index + 1}</h4>
                    <Badge className={
                      q.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                      q.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      q.difficulty === 'hard' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }>
                      {q.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-800 mb-3 font-medium">{q.question}</p>
                  
                  <div className="space-y-2 mb-3">
                    {q.options.map((option: string, optIndex: number) => (
                      <div
                        key={optIndex}
                        className={`p-2 rounded border ${
                          optIndex === q.correctAnswer
                            ? 'bg-green-100 border-green-300 font-medium'
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        {optIndex === q.correctAnswer && '✓ '}
                        {option}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Explanation:</p>
                    <p className="text-sm text-blue-800">{q.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2">
                💡 <strong>Tip:</strong> You can copy these questions and add them to your curriculum-data.ts file,
                or use them directly in a custom quiz session.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

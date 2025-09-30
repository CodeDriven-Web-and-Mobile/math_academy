'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Loader2, CheckCircle, XCircle, BookOpen } from 'lucide-react';

interface AIContentGeneratorProps {
  topic: string;
  grade: number;
  subject: string;
  subjectId?: string;
  topicId?: string;
  currentContent?: string;
  onContentGenerated?: (content: string) => void;
}

export default function AIContentGenerator({
  topic,
  grade,
  subject,
  subjectId,
  topicId,
  currentContent,
  onContentGenerated,
}: AIContentGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<'openai' | 'claude' | 'deepseek'>('openai');
  const [contentType, setContentType] = useState<'full' | 'expand' | 'examples'>('full');
  const [appendMode, setAppendMode] = useState<boolean>(true);
  const [generatedContent, setGeneratedContent] = useState<string>('');
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
    setGeneratedContent('');
    setSavedToDatabase(false);

    try {
      const response = await fetch('/api/generate-content', {
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
          contentType,
          currentContent,
          provider: selectedProvider,
          appendMode,
          saveToDb: !!(subjectId && topicId),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate content');
      }

      const data = await response.json();
      setGeneratedContent(data.content);
      setSavedToDatabase(data.savedToDb || false);
      
      if (data.savedToDb) {
        console.log(`✅ Content saved to database for Grade ${grade} - ${subject} - ${topic}`);
      }
      
      if (onContentGenerated) {
        onContentGenerated(data.content);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while generating content');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!apiStatus?.enabled) {
    return (
      <Card className="border-2 border-amber-200 bg-amber-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-amber-800 mb-2">⚠️ AI Content Generation Not Configured</p>
            <p className="text-sm text-amber-700">
              To enable AI-generated content, add API keys to your .env.local file.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          AI Content Generator
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

        {/* Content Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Type
          </label>
          <div className="space-y-2">
            <button
              onClick={() => setContentType('full')}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                contentType === 'full'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="font-semibold">📚 Full Lesson Content</div>
              <div className="text-sm text-gray-600">
                Complete lesson with concepts, examples, and explanations
              </div>
            </button>
            
            <button
              onClick={() => setContentType('expand')}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                contentType === 'expand'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="font-semibold">➕ Expand Existing Content</div>
              <div className="text-sm text-gray-600">
                Add more details, examples, and explanations to current content
              </div>
            </button>
            
            <button
              onClick={() => setContentType('examples')}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                contentType === 'examples'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="font-semibold">💡 More Examples</div>
              <div className="text-sm text-gray-600">
                Generate additional worked examples and practice problems
              </div>
            </button>
          </div>
        </div>

        {/* Append/Replace Mode Toggle */}
        {currentContent && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={appendMode}
                onChange={(e) => setAppendMode(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <div>
                <div className="font-semibold text-gray-900">
                  {appendMode ? '➕ Append Mode (Keep Existing)' : '🔄 Replace Mode (Overwrite)'}
                </div>
                <div className="text-sm text-gray-600">
                  {appendMode 
                    ? 'New content will be added to existing content with a separator'
                    : 'New content will replace all existing content'}
                </div>
              </div>
            </label>
          </div>
        )}

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
              Generating Content...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate {contentType === 'full' ? 'Full Lesson' : contentType === 'expand' ? 'Expanded Content' : 'More Examples'}
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

        {/* Generated Content Display */}
        {generatedContent && (
          <div className="space-y-4 mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">
                  Generated Content
                </h3>
              </div>
              {savedToDatabase && (
                <Badge className="bg-green-100 text-green-800 gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Saved to Database
                </Badge>
              )}
            </div>

            <Card className="border-2 border-green-200 bg-white">
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-sm text-gray-800 leading-relaxed">
                    {generatedContent}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                💡 <strong>Tip:</strong> This content has been {savedToDatabase ? 'saved to the database and' : ''} formatted in markdown style. 
                Students will see it with proper formatting on the topic page.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

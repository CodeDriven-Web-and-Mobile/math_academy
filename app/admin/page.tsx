import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowLeft, Sparkles, BookOpen, Settings } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-600">Manage content and AI features</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h2>
          <p className="text-gray-600">Generate questions, customize content, and manage the curriculum</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Question Generator */}
          <Link href="/admin/ai-generator">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-400 hover:-translate-y-1 h-full">
              <CardHeader>
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">AI Question Generator</CardTitle>
                <CardDescription>
                  Use OpenAI, Claude, or DeepSeek to generate custom questions for any topic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Generate questions →</span>
                  <svg 
                    className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* AI Content Generator */}
          <Link href="/admin/content-generator">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-cyan-400 hover:-translate-y-1 h-full">
              <CardHeader>
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">AI Content Generator</CardTitle>
                <CardDescription>
                  Generate comprehensive lesson content with explanations, examples, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Generate content →</span>
                  <svg 
                    className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Question Editor */}
          <Link href="/admin/question-editor">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-green-400 hover:-translate-y-1 h-full">
              <CardHeader>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Question Editor</CardTitle>
                <CardDescription>
                  Review, edit, and fix AI-generated and manual questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Edit questions →</span>
                  <svg 
                    className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">72+</div>
                <div className="text-gray-600">Total Questions</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">18</div>
                <div className="text-gray-600">Topics Covered</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">7</div>
                <div className="text-gray-600">Grade Levels</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 AI-Powered Features</h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>✨ AI Question Generation:</strong> Use state-of-the-art AI models to generate curriculum-aligned questions instantly.
            </p>
            <p>
              <strong>🎯 Multiple Providers:</strong> Choose between OpenAI (GPT-4), Anthropic Claude, or DeepSeek based on your needs.
            </p>
            <p>
              <strong>📊 Adaptive Difficulty:</strong> Generate questions at any difficulty level from easy to advanced.
            </p>
            <p>
              <strong>🔧 Customizable:</strong> Fine-tune generation parameters to match your specific requirements.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

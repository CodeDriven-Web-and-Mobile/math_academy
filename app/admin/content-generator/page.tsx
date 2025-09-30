'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import AIContentGenerator from '@/components/AIContentGenerator';

export default function ContentGeneratorPage() {
  const [grades, setGrades] = useState<any[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch grades from database
  useEffect(() => {
    async function fetchGrades() {
      try {
        const response = await fetch('/api/curriculum');
        const data = await response.json();
        setGrades(data);
      } catch (error) {
        console.error('Error fetching grades:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGrades();
  }, []);

  const selectedGradeData = grades.find(g => g.grade === selectedGrade);
  const subjects = selectedGradeData?.subjects || [];
  const topics = selectedSubject?.topics || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Admin
              </Button>
            </Link>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">AI Content Generator</h1>
              <p className="text-sm text-gray-600">Generate comprehensive lesson content</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Generate Lesson Content</h2>
          <p className="text-lg text-gray-600">
            Select grade, subject, and topic, then use AI to create comprehensive lesson content with explanations, examples, and more.
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Grade Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1. Select Grade</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-sm text-gray-500">Loading...</p>
              ) : (
                <div className="space-y-2">
                  {grades.map((grade) => (
                    <button
                      key={grade.grade}
                      onClick={() => {
                        setSelectedGrade(grade.grade);
                        setSelectedSubject(null);
                        setSelectedTopic(null);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedGrade === grade.grade
                          ? 'border-blue-500 bg-blue-50 font-semibold'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      Grade {grade.grade}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Subject Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2. Select Subject</CardTitle>
            </CardHeader>
            <CardContent>
              {!selectedGrade ? (
                <p className="text-sm text-gray-500">Select a grade first</p>
              ) : (
                <div className="space-y-2">
                  {subjects.map((subject: any) => (
                    <button
                      key={subject.id}
                      onClick={() => {
                        setSelectedSubject(subject);
                        setSelectedTopic(null);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedSubject?.id === subject.id
                          ? 'border-blue-500 bg-blue-50 font-semibold'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {subject.icon} {subject.name}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Topic Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3. Select Topic</CardTitle>
            </CardHeader>
            <CardContent>
              {!selectedSubject ? (
                <p className="text-sm text-gray-500">Select a subject first</p>
              ) : (
                <div className="space-y-2">
                  {topics.map((topic: any) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedTopic?.id === topic.id
                          ? 'border-blue-500 bg-blue-50 font-semibold'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="font-medium">{topic.title}</div>
                      <div className="text-xs text-gray-500">
                        {topic.content ? '✓ Has content' : '○ No content yet'}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* AI Content Generator Component */}
        {selectedTopic ? (
          <>
            {/* Current Content Preview */}
            {selectedTopic.content && (
              <Card className="mb-6 border-2 border-gray-300">
                <CardHeader>
                  <CardTitle className="text-lg">Current Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">
                      {selectedTopic.content.substring(0, 500)}
                      {selectedTopic.content.length > 500 && '...'}
                    </pre>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {selectedTopic.content.length} characters
                  </p>
                </CardContent>
              </Card>
            )}

            <AIContentGenerator
              topic={selectedTopic.title}
              grade={selectedGrade!}
              subject={selectedSubject.name}
              subjectId={selectedSubject.id}
              topicId={selectedTopic.id}
              currentContent={selectedTopic.content}
            />
          </>
        ) : (
          <Card className="border-2 border-dashed border-gray-300">
            <CardContent className="pt-12 pb-12 text-center">
              <p className="text-gray-500 text-lg">
                👆 Select a grade, subject, and topic above to start generating content
              </p>
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <div className="mt-12 space-y-6">
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📝 How to Use</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">1</span>
                <span><strong>Select Context:</strong> Choose grade, subject, and topic from the database</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">2</span>
                <span><strong>Choose Content Type:</strong> Full lesson, expand existing, or add more examples</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">3</span>
                <span><strong>Select AI Provider:</strong> OpenAI, Claude, or DeepSeek</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">4</span>
                <span><strong>Generate:</strong> Click the button and wait for AI to create content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">5</span>
                <span><strong>Review & Save:</strong> Content is automatically saved to database and visible to students</span>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">✨ Content Types</h3>
            <div className="space-y-3 text-green-800">
              <div>
                <strong>📚 Full Lesson Content:</strong> Creates complete lesson with concepts, formulas, examples, common mistakes, and real-world applications
              </div>
              <div>
                <strong>➕ Expand Existing Content:</strong> Enhances current content with more details, examples, and explanations
              </div>
              <div>
                <strong>💡 More Examples:</strong> Generates additional worked examples with step-by-step solutions
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

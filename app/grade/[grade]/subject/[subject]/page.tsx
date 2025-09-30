import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, FileText } from 'lucide-react';
import { getSubjectByIds } from '@/lib/db-operations';
import { notFound } from 'next/navigation';

export default function SubjectPage({ 
  params 
}: { 
  params: { grade: string; subject: string } 
}) {
  const gradeNumber = parseInt(params.grade);
  const subjectData = getSubjectByIds(gradeNumber, params.subject);

  if (!subjectData || gradeNumber < 6 || gradeNumber > 12) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href={`/grade/${gradeNumber}`}>
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Grade {gradeNumber}
              </Button>
            </Link>
            <div className="text-right">
              <div className="flex items-center justify-end gap-3">
                <span className="text-4xl">{subjectData.icon}</span>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{subjectData.name}</h1>
                  <p className="text-sm text-gray-600">Grade {gradeNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subject Banner */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">{subjectData.name}</h2>
              <p className="text-lg opacity-90 mb-4">{subjectData.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{subjectData.topics.length} Topics</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Detailed Explanations</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block text-7xl opacity-20">
              {subjectData.icon}
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Topics</h3>
          <p className="text-gray-600">Select a topic to view explanations and practice questions</p>
        </div>

        {/* Topic Cards */}
        <div className="space-y-4">
          {subjectData.topics.map((topic, index) => (
            <Card key={topic.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-400">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm mb-4">
                      {topic.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="default">
                        {topic.questions.length} Questions
                      </Badge>
                      <Badge variant="secondary">
                        {topic.questions.filter(q => q.difficulty === 'easy').length} Easy
                      </Badge>
                      <Badge variant="secondary">
                        {topic.questions.filter(q => q.difficulty === 'medium').length} Medium
                      </Badge>
                      <Badge variant="secondary">
                        {topic.questions.filter(q => q.difficulty === 'hard').length} Hard
                      </Badge>
                      {topic.questions.filter(q => q.difficulty === 'advanced').length > 0 && (
                        <Badge variant="secondary">
                          {topic.questions.filter(q => q.difficulty === 'advanced').length} Advanced
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Link href={`/grade/${gradeNumber}/subject/${params.subject}/topic/${topic.id}`} className="flex-1">
                    <Button className="w-full gap-2">
                      <BookOpen className="h-4 w-4" />
                      View Explanation
                    </Button>
                  </Link>
                  <Link href={`/grade/${gradeNumber}/subject/${params.subject}/topic/${topic.id}/quiz`} className="flex-1">
                    <Button variant="outline" className="w-full gap-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Take Quiz
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Tips */}
        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Learning Tips
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">1.</span>
              <span>Start by reading the explanation carefully to understand the concept</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">2.</span>
              <span>Begin with easy questions to build confidence, then progress to harder levels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">3.</span>
              <span>Read the explanations for incorrect answers to learn from mistakes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">4.</span>
              <span>Practice regularly to reinforce your understanding and improve retention</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

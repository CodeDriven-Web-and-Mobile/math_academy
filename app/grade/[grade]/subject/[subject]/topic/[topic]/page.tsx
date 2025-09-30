import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookOpen, FileText } from 'lucide-react';
import { getTopicByIds } from '@/lib/db-operations';
import { notFound } from 'next/navigation';
import MathContent from '@/components/MathContent';

export default function TopicPage({ 
  params 
}: { 
  params: { grade: string; subject: string; topic: string } 
}) {
  const gradeNumber = parseInt(params.grade);
  const topicData = getTopicByIds(gradeNumber, params.subject, params.topic);

  if (!topicData || gradeNumber < 6 || gradeNumber > 12) {
    notFound();
  }

  // Convert markdown-style content to HTML-like structure
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        elements.push(<h1 key={key++} className="text-3xl font-bold text-gray-900 mb-4 mt-6">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={key++} className="text-2xl font-bold text-gray-800 mb-3 mt-5">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={key++} className="text-xl font-semibold text-gray-800 mb-2 mt-4">{line.substring(4)}</h3>);
      } else if (line.startsWith('- **') && line.includes('**:')) {
        const match = line.match(/- \*\*(.*?)\*\*:(.*)/);
        if (match) {
          elements.push(
            <li key={key++} className="ml-6 mb-2">
              <strong className="text-gray-900">{match[1]}:</strong>
              <span className="text-gray-700">{match[2]}</span>
            </li>
          );
        }
      } else if (line.startsWith('- ')) {
        elements.push(<li key={key++} className="ml-6 mb-2 text-gray-700">{line.substring(2)}</li>);
      } else if (line.trim() === '') {
        elements.push(<div key={key++} className="h-2"></div>);
      } else if (line.trim() !== '') {
        elements.push(<p key={key++} className="text-gray-700 leading-relaxed mb-3">{line}</p>);
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href={`/grade/${gradeNumber}/subject/${params.subject}`}>
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Topics
              </Button>
            </Link>
            <Link href={`/grade/${gradeNumber}/subject/${params.subject}/topic/${params.topic}/quiz`}>
              <Button className="gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Topic Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <span>Grade {gradeNumber}</span>
            <span>•</span>
            <span className="capitalize">{params.subject.replace('-', ' ')}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{topicData.title}</h1>
          <p className="text-lg text-gray-600">{topicData.description}</p>
        </div>

        {/* Content Card */}
        <Card className="mb-8">
          <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Lesson Content
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none pt-6">
            <MathContent content={topicData.content} />
          </CardContent>
        </Card>

        {/* Quiz Preview Card */}
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h3>
                <p className="text-blue-100 mb-4">
                  Practice with {topicData.questions.length} questions across multiple difficulty levels
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {topicData.questions.filter(q => q.difficulty === 'easy').length} Easy
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {topicData.questions.filter(q => q.difficulty === 'medium').length} Medium
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {topicData.questions.filter(q => q.difficulty === 'hard').length} Hard
                  </span>
                  {topicData.questions.filter(q => q.difficulty === 'advanced').length > 0 && (
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {topicData.questions.filter(q => q.difficulty === 'advanced').length} Advanced
                    </span>
                  )}
                </div>
              </div>
              <Link href={`/grade/${gradeNumber}/subject/${params.subject}/topic/${params.topic}/quiz`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Quiz
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Study Tips */}
        <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5 text-amber-600" />
            Study Tips
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-600">•</span>
              <span>Make sure you understand all the key concepts before taking the quiz</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600">•</span>
              <span>Try working through examples on paper to reinforce your understanding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600">•</span>
              <span>If you get stuck, review the relevant section of the lesson</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

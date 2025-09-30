import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { BookOpen, Calculator, TrendingUp, Award, GraduationCap, Sparkles } from 'lucide-react';
import { getAllGrades } from '@/lib/db-operations';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const gradeColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-purple-500',
  'from-pink-500 to-rose-500',
  'from-teal-500 to-cyan-500',
];

export default function Home() {
  // Get grades from database
  const grades = getAllGrades().map((gradeData: any, index: number) => ({
    grade: gradeData.grade,
    color: gradeColors[index % gradeColors.length],
    subjects: gradeData.subjects.length,
  }));
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Ontario Math Academy</h1>
                <p className="text-sm text-gray-600">Excellence in Mathematics Education</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium">Ontario Curriculum</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">Grades 6-12</span>
              </div>
              <Link href="/admin">
                <Button className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Sparkles className="h-4 w-4" />
                  AI Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Grade Level
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your grade to explore comprehensive math lessons, interactive explanations, 
            and multi-level quizzes aligned with the Ontario curriculum.
          </p>
        </div>

        {/* Grade Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {grades.map(({ grade, color, subjects }: { grade: number; color: string; subjects: number }) => (
            <Link key={grade} href={`/grade/${grade}`}>
              <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-400 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-full h-32 bg-gradient-to-br ${color} rounded-lg mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-1">{grade}</div>
                      <div className="text-white text-sm font-medium opacity-90">Grade</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">Grade {grade} Mathematics</CardTitle>
                  <CardDescription className="text-sm">
                    {subjects} subjects • Multiple topics • 4 difficulty levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Click to explore</span>
                    <svg 
                      className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" 
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
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Comprehensive Content</h3>
            <p className="text-gray-600 text-sm">
              Detailed explanations for every topic aligned with Ontario curriculum standards
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Multi-Level Quizzes</h3>
            <p className="text-gray-600 text-sm">
              Practice with questions ranging from easy to advanced difficulty levels
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600 text-sm">
              Monitor your learning journey and master each concept at your own pace
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 text-sm">
            <p>© 2025 Ontario Math Academy. Aligned with Ontario Mathematics Curriculum.</p>
            <p className="mt-2">Empowering students from Grade 6 to Grade 12</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

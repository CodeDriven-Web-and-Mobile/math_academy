'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function GradePage() {
  const params = useParams();
  const router = useRouter();
  const gradeNumber = parseInt(params.grade as string);
  const [gradeData, setGradeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGradeData() {
      try {
        const response = await fetch(`/api/curriculum?grade=${gradeNumber}`);
        if (!response.ok) {
          router.push('/');
          return;
        }
        const data = await response.json();
        setGradeData(data);
      } catch (error) {
        console.error('Error fetching grade data:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    }

    if (gradeNumber < 6 || gradeNumber > 12) {
      router.push('/');
      return;
    }

    fetchGradeData();
  }, [gradeNumber, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!gradeData) {
    return null;
  }

  const gradeColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-teal-500 to-cyan-500',
  ];

  const colorIndex = gradeNumber - 6;
  const gradientColor = gradeColors[colorIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Grades
              </Button>
            </Link>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">Grade {gradeNumber} Mathematics</h1>
              <p className="text-sm text-gray-600">Ontario Curriculum</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grade Banner */}
        <div className={`bg-gradient-to-br ${gradientColor} rounded-2xl p-8 mb-12 text-white shadow-xl`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-2">Grade {gradeNumber}</h2>
              <p className="text-lg opacity-90">
                Explore {gradeData.subjects.length} mathematical subjects with comprehensive lessons and quizzes
              </p>
            </div>
            <div className="hidden md:block text-8xl font-bold opacity-20">
              {gradeNumber}
            </div>
          </div>
        </div>

        {/* Subjects Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose a Subject</h3>
        </div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gradeData.subjects.map((subject: any) => (
            <Link key={subject.id} href={`/grade/${gradeNumber}/subject/${subject.id}`}>
              <Card className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-400 hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl">{subject.icon}</div>
                    <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {subject.topics.length} topics
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{subject.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{subject.topics.length} comprehensive topics</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Multi-level practice questions</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">Start Learning</span>
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

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About Grade {gradeNumber} Mathematics</h3>
          <p className="text-gray-600 leading-relaxed">
            The Grade {gradeNumber} mathematics curriculum focuses on building strong foundational skills 
            and developing problem-solving abilities. Each subject contains multiple topics with detailed 
            explanations, worked examples, and practice questions at various difficulty levels to ensure 
            comprehensive understanding and mastery of concepts.
          </p>
        </div>
      </main>
    </div>
  );
}

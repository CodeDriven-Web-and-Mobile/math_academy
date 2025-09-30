'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { Question } from '@/lib/curriculum-data';
import { useParams } from 'next/navigation';

type Difficulty = 'easy' | 'medium' | 'hard' | 'advanced' | 'all';

export default function QuizPage() {
  const params = useParams();
  const gradeNumber = parseInt(params.grade as string);
  
  const [topicData, setTopicData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch topic data from database via API
  useEffect(() => {
    async function fetchTopicData() {
      try {
        const response = await fetch(`/api/curriculum?grade=${gradeNumber}`);
        const gradeData = await response.json();
        
        const subject = gradeData.subjects?.find((s: any) => s.id === params.subject);
        const topic = subject?.topics?.find((t: any) => t.id === params.topic);
        
        setTopicData(topic);
      } catch (error) {
        console.error('Error fetching topic data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTopicData();
  }, [gradeNumber, params.subject, params.topic]);

  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('all');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  // Shuffle array function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (topicData) {
      const questions: Question[] = selectedDifficulty === 'all' 
        ? topicData.questions 
        : topicData.questions.filter((q: any) => q.difficulty === selectedDifficulty);
      
      // Shuffle and take maximum 10 questions
      const shuffled = shuffleArray(questions);
      const limitedQuestions = shuffled.slice(0, Math.min(10, shuffled.length));
      
      setFilteredQuestions(limitedQuestions);
      setAnsweredQuestions(new Array(limitedQuestions.length).fill(false));
    }
  }, [selectedDifficulty, topicData]);

  if (!topicData) {
    return <div>Loading...</div>;
  }

  const startQuiz = (difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === filteredQuestions[currentQuestionIndex].correctAnswer;
    if (isCorrect && !answeredQuestions[currentQuestionIndex]) {
      setScore(score + 1);
    }
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnswered);
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setSelectedDifficulty('all');
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const percentage = filteredQuestions.length > 0 ? Math.round((score / filteredQuestions.length) * 100) : 0;

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-orange-100 text-orange-800',
    advanced: 'bg-red-100 text-red-800'
  };

  // Loading state
  if (loading || !topicData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  // Difficulty Selection Screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href={`/grade/${gradeNumber}/subject/${params.subject}/topic/${params.topic}`}>
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Lesson
              </Button>
            </Link>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{topicData.title}</h1>
            <p className="text-lg text-gray-600">Choose your difficulty level to begin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* All Questions */}
            <Card 
              className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-blue-500"
              onClick={() => startQuiz('all')}
            >
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold mb-2">All Levels</h3>
                  <p className="text-gray-600 mb-4">Practice all questions</p>
                  <Badge variant="default" className="text-lg px-4 py-1">
                    {topicData.questions.length} Questions
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Easy */}
            {topicData.questions.filter(q => q.difficulty === 'easy').length > 0 && (
              <Card 
                className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-green-500"
                onClick={() => startQuiz('easy')}
              >
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🌱</div>
                    <h3 className="text-2xl font-bold mb-2">Easy</h3>
                    <p className="text-gray-600 mb-4">Build your foundation</p>
                    <Badge className="bg-green-100 text-green-800 text-lg px-4 py-1">
                      {topicData.questions.filter(q => q.difficulty === 'easy').length} Questions
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Medium */}
            {topicData.questions.filter(q => q.difficulty === 'medium').length > 0 && (
              <Card 
                className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-yellow-500"
                onClick={() => startQuiz('medium')}
              >
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="text-2xl font-bold mb-2">Medium</h3>
                    <p className="text-gray-600 mb-4">Test your understanding</p>
                    <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-1">
                      {topicData.questions.filter(q => q.difficulty === 'medium').length} Questions
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Hard */}
            {topicData.questions.filter(q => q.difficulty === 'hard').length > 0 && (
              <Card 
                className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-orange-500"
                onClick={() => startQuiz('hard')}
              >
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔥</div>
                    <h3 className="text-2xl font-bold mb-2">Hard</h3>
                    <p className="text-gray-600 mb-4">Challenge yourself</p>
                    <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-1">
                      {topicData.questions.filter(q => q.difficulty === 'hard').length} Questions
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Advanced */}
            {topicData.questions.filter(q => q.difficulty === 'advanced').length > 0 && (
              <Card 
                className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-red-500"
                onClick={() => startQuiz('advanced')}
              >
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">Advanced</h3>
                    <p className="text-gray-600 mb-4">Master the topic</p>
                    <Badge className="bg-red-100 text-red-800 text-lg px-4 py-1">
                      {topicData.questions.filter(q => q.difficulty === 'advanced').length} Questions
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Quiz Completed Screen
  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href={`/grade/${gradeNumber}/subject/${params.subject}/topic/${params.topic}`}>
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Lesson
              </Button>
            </Link>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="text-center">
            <CardContent className="pt-12 pb-12">
              <Trophy className="h-24 w-24 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Completed!</h1>
              <p className="text-xl text-gray-600 mb-8">Great job on completing the quiz!</p>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
                <div className="text-6xl font-bold mb-2">{percentage}%</div>
                <div className="text-xl">
                  {score} out of {filteredQuestions.length} correct
                </div>
              </div>

              <div className="space-y-3">
                {percentage >= 80 && (
                  <p className="text-lg text-green-600 font-semibold">
                    🎉 Excellent work! You've mastered this topic!
                  </p>
                )}
                {percentage >= 60 && percentage < 80 && (
                  <p className="text-lg text-blue-600 font-semibold">
                    👍 Good job! Keep practicing to improve further!
                  </p>
                )}
                {percentage < 60 && (
                  <p className="text-lg text-orange-600 font-semibold">
                    💪 Keep trying! Review the lesson and try again!
                  </p>
                )}
              </div>

              <div className="flex gap-4 justify-center mt-8">
                <Button onClick={resetQuiz} size="lg" className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Try Again
                </Button>
                <Link href={`/grade/${gradeNumber}/subject/${params.subject}/topic/${params.topic}`}>
                  <Button variant="outline" size="lg">
                    Review Lesson
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  // Quiz Question Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={resetQuiz} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Exit Quiz
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="default">
                Question {currentQuestionIndex + 1} of {filteredQuestions.length}
              </Badge>
              <Badge variant="secondary">
                Score: {score}/{filteredQuestions.length}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(((currentQuestionIndex + 1) / filteredQuestions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Question {currentQuestionIndex + 1}</CardTitle>
              <Badge className={difficultyColors[currentQuestion.difficulty]}>
                {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              {currentQuestion.question}
            </p>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showResult = showExplanation;

                let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
                
                if (!showResult) {
                  buttonClass += isSelected 
                    ? "border-blue-500 bg-blue-50" 
                    : "border-gray-300 hover:border-blue-300 hover:bg-gray-50";
                } else {
                  if (isCorrect) {
                    buttonClass += "border-green-500 bg-green-50";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-50";
                  } else {
                    buttonClass += "border-gray-300 bg-gray-50";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className={`mt-6 p-4 rounded-lg ${
                selectedAnswer === currentQuestion.correctAnswer 
                  ? 'bg-green-50 border-2 border-green-200' 
                  : 'bg-red-50 border-2 border-red-200'
              }`}>
                <div className="flex items-start gap-3">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                    </h4>
                    <p className="text-gray-700">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              {!showExplanation ? (
                <Button 
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="w-full"
                  size="lg"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button 
                  onClick={handleNextQuestion}
                  className="w-full"
                  size="lg"
                >
                  {currentQuestionIndex < filteredQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

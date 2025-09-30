'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Edit, Save, X, Trash2, CheckCircle, AlertCircle } from 'lucide-react';

export default function QuestionEditorPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Filters
  const [filterGrade, setFilterGrade] = useState<string>('all');
  const [filterAI, setFilterAI] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [questions, filterGrade, filterAI, searchTerm]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions');
      const data = await response.json();
      setQuestions(data);
      setFilteredQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
      showMessage('error', 'Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...questions];

    // Filter by grade
    if (filterGrade !== 'all') {
      filtered = filtered.filter(q => q.grade_number === parseInt(filterGrade));
    }

    // Filter by AI/Manual
    if (filterAI === 'ai') {
      filtered = filtered.filter(q => q.ai_generated === 1);
    } else if (filterAI === 'manual') {
      filtered = filtered.filter(q => q.ai_generated === 0);
    }

    // Search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(term) ||
        q.topic_title.toLowerCase().includes(term) ||
        q.subject_name.toLowerCase().includes(term)
      );
    }

    setFilteredQuestions(filtered);
  };

  const startEdit = (question: any) => {
    setEditingId(question.id);
    setEditForm({
      id: question.id,
      question: question.question,
      option_a: question.option_a,
      option_b: question.option_b,
      option_c: question.option_c,
      option_d: question.option_d,
      correct_answer: question.correct_answer,
      explanation: question.explanation,
      difficulty: question.difficulty,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = async () => {
    setSaving(true);
    try {
      const response = await fetch('/api/questions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });

      if (!response.ok) {
        throw new Error('Failed to update question');
      }

      // Update local state
      setQuestions(questions.map(q => 
        q.id === editForm.id ? { ...q, ...editForm } : q
      ));
      
      setEditingId(null);
      setEditForm({});
      showMessage('success', 'Question updated successfully!');
    } catch (error) {
      showMessage('error', 'Failed to update question');
    } finally {
      setSaving(false);
    }
  };

  const deleteQuestion = async (id: number) => {
    if (!confirm('Are you sure you want to delete this question?')) return;

    try {
      const response = await fetch(`/api/questions?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete question');
      }

      setQuestions(questions.filter(q => q.id !== id));
      showMessage('success', 'Question deleted successfully!');
    } catch (error) {
      showMessage('error', 'Failed to delete question');
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const grades = Array.from(new Set(questions.map(q => q.grade_number))).sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Admin
              </Button>
            </Link>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">Question Editor</h1>
              <p className="text-sm text-gray-600">Review and edit questions</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg border-2 ${
            message.type === 'success' 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center gap-2">
              {message.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
              )}
              <p className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                {message.text}
              </p>
            </div>
          </div>
        )}

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Grade Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Grade
                </label>
                <select
                  value={filterGrade}
                  onChange={(e) => setFilterGrade(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Grades</option>
                  {grades.map(grade => (
                    <option key={grade} value={grade}>Grade {grade}</option>
                  ))}
                </select>
              </div>

              {/* AI/Manual Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Source
                </label>
                <select
                  value={filterAI}
                  onChange={(e) => setFilterAI(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Questions</option>
                  <option value="ai">AI-Generated Only</option>
                  <option value="manual">Manual Only</option>
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredQuestions.length} of {questions.length} questions
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setFilterGrade('all');
                  setFilterAI('all');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Questions List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading questions...</p>
          </div>
        ) : filteredQuestions.length === 0 ? (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <p className="text-gray-500 text-lg">No questions found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((question) => (
              <Card key={question.id} className="border-2">
                <CardContent className="pt-6">
                  {editingId === question.id ? (
                    /* Edit Mode */
                    <div className="space-y-4">
                      {/* Question Text */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Question
                        </label>
                        <textarea
                          value={editForm.question}
                          onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Options */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['a', 'b', 'c', 'd'].map((opt, idx) => (
                          <div key={opt}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Option {opt.toUpperCase()}
                              {editForm.correct_answer === idx && (
                                <Badge className="ml-2 bg-green-100 text-green-800">Correct</Badge>
                              )}
                            </label>
                            <input
                              type="text"
                              value={editForm[`option_${opt}`]}
                              onChange={(e) => setEditForm({ ...editForm, [`option_${opt}`]: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Correct Answer */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Correct Answer
                        </label>
                        <select
                          value={editForm.correct_answer}
                          onChange={(e) => setEditForm({ ...editForm, correct_answer: parseInt(e.target.value) })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value={0}>Option A</option>
                          <option value={1}>Option B</option>
                          <option value={2}>Option C</option>
                          <option value={3}>Option D</option>
                        </select>
                      </div>

                      {/* Explanation */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Explanation
                        </label>
                        <textarea
                          value={editForm.explanation}
                          onChange={(e) => setEditForm({ ...editForm, explanation: e.target.value })}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Difficulty */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Difficulty
                        </label>
                        <select
                          value={editForm.difficulty}
                          onChange={(e) => setEditForm({ ...editForm, difficulty: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button onClick={saveEdit} disabled={saving} className="gap-2">
                          <Save className="h-4 w-4" />
                          {saving ? 'Saving...' : 'Save Changes'}
                        </Button>
                        <Button onClick={cancelEdit} variant="outline" className="gap-2">
                          <X className="h-4 w-4" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* View Mode */
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-blue-100 text-blue-800">
                              Grade {question.grade_number}
                            </Badge>
                            <Badge className="bg-purple-100 text-purple-800">
                              {question.subject_name}
                            </Badge>
                            <Badge className="bg-cyan-100 text-cyan-800">
                              {question.topic_title}
                            </Badge>
                            <Badge className={
                              question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                              question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              question.difficulty === 'hard' ? 'bg-orange-100 text-orange-800' :
                              'bg-red-100 text-red-800'
                            }>
                              {question.difficulty}
                            </Badge>
                            {question.ai_generated === 1 && (
                              <Badge className="bg-indigo-100 text-indigo-800">
                                AI ({question.ai_provider})
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => startEdit(question)}
                            className="gap-2"
                          >
                            <Edit className="h-4 w-4" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteQuestion(question.id)}
                            className="gap-2 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </div>

                      {/* Question */}
                      <p className="text-gray-900 font-medium mb-3">{question.question}</p>

                      {/* Options */}
                      <div className="space-y-2 mb-3">
                        {[
                          { label: 'A', value: question.option_a, index: 0 },
                          { label: 'B', value: question.option_b, index: 1 },
                          { label: 'C', value: question.option_c, index: 2 },
                          { label: 'D', value: question.option_d, index: 3 },
                        ].map((option) => (
                          <div
                            key={option.label}
                            className={`p-2 rounded border ${
                              option.index === question.correct_answer
                                ? 'bg-green-50 border-green-300 font-medium'
                                : 'bg-gray-50 border-gray-200'
                            }`}
                          >
                            {option.index === question.correct_answer && '✓ '}
                            {option.label}. {option.value}
                          </div>
                        ))}
                      </div>

                      {/* Explanation */}
                      <div className="bg-blue-50 border border-blue-200 rounded p-3">
                        <p className="text-sm font-semibold text-blue-900 mb-1">Explanation:</p>
                        <p className="text-sm text-blue-800">{question.explanation}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

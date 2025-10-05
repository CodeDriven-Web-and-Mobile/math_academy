'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Save, Eye, Code } from 'lucide-react';
import Link from 'next/link';
import MathContent from '@/components/MathContent';

interface Topic {
  id: number;
  topic_id: string;
  title: string;
  description: string;
  content: string | null;
  grade_number: number;
  subject_id: string;
  subject_name: string;
}

export default function ContentEditorPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [editedContent, setEditedContent] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Filters
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  useEffect(() => {
    fetchTopics();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedGrade, selectedSubject, topics]);

  const fetchTopics = async () => {
    try {
      const response = await fetch('/api/topics');
      if (response.ok) {
        const data = await response.json();
        setTopics(data);
      }
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  };

  const applyFilters = () => {
    let filtered = [...topics];

    if (selectedGrade !== 'all') {
      filtered = filtered.filter(t => t.grade_number === selectedGrade);
    }

    if (selectedSubject !== 'all') {
      filtered = filtered.filter(t => t.subject_id === selectedSubject);
    }

    setFilteredTopics(filtered);
  };

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setEditedContent(topic.content || '');
    setEditedDescription(topic.description || '');
    setPreviewMode(false);
    setMessage(null);
  };

  const handleSave = async () => {
    if (!selectedTopic) return;

    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/topics/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: selectedTopic.id,
          content: editedContent,
          description: editedDescription,
        }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Content saved successfully!' });
        // Update local state
        setTopics(topics.map(t => 
          t.id === selectedTopic.id 
            ? { ...t, content: editedContent, description: editedDescription }
            : t
        ));
        setSelectedTopic({ ...selectedTopic, content: editedContent, description: editedDescription });
      } else {
        setMessage({ type: 'error', text: 'Failed to save content' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error saving content' });
    } finally {
      setSaving(false);
    }
  };

  const grades = Array.from(new Set(topics.map(t => t.grade_number))).sort();
  const subjects = Array.from(new Set(topics.map(t => ({ id: t.subject_id, name: t.subject_name }))
    .map(s => JSON.stringify(s))))
    .map(s => JSON.parse(s));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Admin
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Content Editor</h1>
                <p className="text-sm text-gray-600">Edit lesson content and descriptions</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Topics List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Topics</CardTitle>
                <div className="space-y-3 mt-4">
                  {/* Grade Filter */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Grade</label>
                    <select
                      value={selectedGrade}
                      onChange={(e) => setSelectedGrade(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Grades</option>
                      {grades.map(grade => (
                        <option key={grade} value={grade}>Grade {grade}</option>
                      ))}
                    </select>
                  </div>

                  {/* Subject Filter */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Subject</label>
                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Subjects</option>
                      {subjects.map(subject => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {filteredTopics.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">No topics found</p>
                  ) : (
                    filteredTopics.map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => handleTopicSelect(topic)}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          selectedTopic?.id === topic.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-medium text-sm">{topic.title}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Grade {topic.grade_number} • {topic.subject_name}
                        </div>
                        <div className="mt-2">
                          <Badge variant={topic.content ? 'default' : 'secondary'} className="text-xs">
                            {topic.content ? 'Has Content' : 'No Content'}
                          </Badge>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Editor */}
          <div className="lg:col-span-2">
            {selectedTopic ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{selectedTopic.title}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        Grade {selectedTopic.grade_number} • {selectedTopic.subject_name}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={previewMode ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setPreviewMode(!previewMode)}
                        className="gap-2"
                      >
                        {previewMode ? <Eye className="h-4 w-4" /> : <Code className="h-4 w-4" />}
                        {previewMode ? 'Preview' : 'Edit'}
                      </Button>
                      <Button
                        onClick={handleSave}
                        disabled={saving}
                        size="sm"
                        className="gap-2"
                      >
                        <Save className="h-4 w-4" />
                        {saving ? 'Saving...' : 'Save'}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {message && (
                    <div className={`mb-4 p-3 rounded-lg ${
                      message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {message.text}
                    </div>
                  )}

                  {/* Description */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-gray-700 block mb-2">Description</label>
                    <input
                      type="text"
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Brief description of the topic"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Lesson Content
                      <span className="text-xs text-gray-500 ml-2">
                        (Supports Markdown, LaTeX, and Mermaid diagrams)
                      </span>
                    </label>

                    {previewMode ? (
                      <div className="border border-gray-300 rounded-lg p-4 bg-white min-h-[400px]">
                        <MathContent content={editedContent} />
                      </div>
                    ) : (
                      <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                        rows={20}
                        placeholder="Enter lesson content here...

Use LaTeX for math: \\( x^2 + y^2 = z^2 \\)
Use Mermaid for diagrams:
```mermaid
graph TD
  A[Start] --> B[End]
```"
                      />
                    )}
                  </div>

                  {/* Helper Text */}
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">Formatting Tips:</h4>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• <strong>Headers:</strong> # Title, ## Subtitle, ### Section</li>
                      <li>• <strong>Bold:</strong> **text** or __text__</li>
                      <li>• <strong>Italic:</strong> *text* or _text_</li>
                      <li>• <strong>Inline Math:</strong> \\( formula \\) or $ formula $</li>
                      <li>• <strong>Display Math:</strong> \\[ formula \\] or $$ formula $$</li>
                      <li>• <strong>Code:</strong> `code`</li>
                      <li>• <strong>Lists:</strong> - item or 1. item</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-20">
                  <div className="text-center text-gray-500">
                    <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Select a topic to edit</p>
                    <p className="text-sm mt-2">Choose a topic from the list to view and edit its content</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

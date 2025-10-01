#!/usr/bin/env ts-node

/**
 * Export Database to curriculum-data.ts
 * 
 * This script exports all content from the SQLite database
 * to the curriculum-data.ts file for static deployment.
 * 
 * Usage:
 *   npm run export-db
 */

import { getDatabase } from '../lib/database';
import fs from 'fs';
import path from 'path';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced';
}

interface Topic {
  id: string;
  title: string;
  description: string;
  content?: string;
  questions: Question[];
}

interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  topics: Topic[];
}

interface Grade {
  grade: number;
  subjects: Subject[];
}

function exportDatabaseToFile() {
  console.log('🚀 Starting database export...\n');

  try {
    const db = getDatabase();
    const curriculum: Grade[] = [];

    // Get all grades
    const grades = db.prepare(`
      SELECT DISTINCT grade_number 
      FROM grades 
      ORDER BY grade_number
    `).all() as { grade_number: number }[];

    console.log(`📚 Found ${grades.length} grades\n`);

    for (const { grade_number } of grades) {
      console.log(`📖 Processing Grade ${grade_number}...`);
      
      const gradeData: Grade = {
        grade: grade_number,
        subjects: []
      };

      // Get subjects for this grade
      const subjects = db.prepare(`
        SELECT s.subject_id, s.name, s.icon, s.description
        FROM subjects s
        JOIN grades g ON s.grade_id = g.id
        WHERE g.grade_number = ?
        ORDER BY s.subject_id
      `).all(grade_number) as any[];

      console.log(`  ✓ Found ${subjects.length} subjects`);

      for (const subject of subjects) {
        const subjectData: Subject = {
          id: subject.subject_id,
          name: subject.name,
          icon: subject.icon,
          description: subject.description,
          topics: []
        };

        // Get topics for this subject
        const topics = db.prepare(`
          SELECT t.topic_id, t.title, t.description, t.content
          FROM topics t
          JOIN subjects s ON t.subject_id = s.id
          JOIN grades g ON s.grade_id = g.id
          WHERE g.grade_number = ? AND s.subject_id = ?
          ORDER BY t.topic_id
        `).all(grade_number, subject.subject_id) as any[];

        console.log(`    ✓ ${subject.name}: ${topics.length} topics`);

        for (const topic of topics) {
          const topicData: Topic = {
            id: topic.topic_id,
            title: topic.title,
            description: topic.description,
            content: topic.content || '',
            questions: []
          };

          // Get questions for this topic
          const questions = db.prepare(`
            SELECT q.question_id, q.question, q.option_a, q.option_b, 
                   q.option_c, q.option_d, q.correct_answer, q.explanation, q.difficulty
            FROM questions q
            JOIN topics t ON q.topic_id = t.id
            JOIN subjects s ON t.subject_id = s.id
            JOIN grades g ON s.grade_id = g.id
            WHERE g.grade_number = ? AND s.subject_id = ? AND t.topic_id = ?
            ORDER BY q.difficulty, q.question_id
          `).all(grade_number, subject.subject_id, topic.topic_id) as any[];

          for (const q of questions) {
            topicData.questions.push({
              id: q.question_id,
              question: q.question,
              options: [q.option_a, q.option_b, q.option_c, q.option_d],
              correctAnswer: q.correct_answer,
              explanation: q.explanation,
              difficulty: q.difficulty as 'easy' | 'medium' | 'hard' | 'advanced'
            });
          }

          console.log(`      ✓ ${topic.title}: ${topicData.questions.length} questions`);
          subjectData.topics.push(topicData);
        }

        gradeData.subjects.push(subjectData);
      }

      curriculum.push(gradeData);
      console.log('');
    }

    // Generate the TypeScript file content
    const fileContent = `// Auto-generated from database export
// Last updated: ${new Date().toISOString()}
// 
// This file contains all curriculum data for the Ontario Math Academy.
// It is generated from the SQLite database using: npm run export-db

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced';
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  content?: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  topics: Topic[];
}

export interface Grade {
  grade: number;
  subjects: Subject[];
}

export const curriculumData: Grade[] = ${JSON.stringify(curriculum, null, 2)};
`;

    // Write to file
    const outputPath = path.join(process.cwd(), 'lib', 'curriculum-data.ts');
    fs.writeFileSync(outputPath, fileContent, 'utf-8');

    // Calculate statistics
    const totalSubjects = curriculum.reduce((sum, g) => sum + g.subjects.length, 0);
    const totalTopics = curriculum.reduce((sum, g) => 
      sum + g.subjects.reduce((s, subj) => s + subj.topics.length, 0), 0);
    const totalQuestions = curriculum.reduce((sum, g) => 
      sum + g.subjects.reduce((s, subj) => 
        s + subj.topics.reduce((t, topic) => t + topic.questions.length, 0), 0), 0);

    console.log('✅ Export completed successfully!\n');
    console.log('📊 Statistics:');
    console.log(`   Grades: ${curriculum.length}`);
    console.log(`   Subjects: ${totalSubjects}`);
    console.log(`   Topics: ${totalTopics}`);
    console.log(`   Questions: ${totalQuestions}`);
    console.log(`\n📁 File saved to: ${outputPath}`);
    console.log('\n🚀 You can now commit and push to deploy the changes!');

  } catch (error) {
    console.error('❌ Error exporting database:', error);
    process.exit(1);
  }
}

// Run the export
exportDatabaseToFile();

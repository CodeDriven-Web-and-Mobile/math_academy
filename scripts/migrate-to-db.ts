// Migration script to import existing curriculum data into SQLite database
import { curriculumData } from '../lib/curriculum-data';
import { insertGrade, insertSubject, insertTopic, insertQuestion } from '../lib/db-operations';
import fs from 'fs';
import path from 'path';

function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
    console.log('✅ Created data directory');
  }
}

function migrateData() {
  console.log('🚀 Starting migration...\n');
  
  ensureDataDirectory();

  let totalQuestions = 0;

  for (const gradeData of curriculumData) {
    console.log(`📚 Migrating Grade ${gradeData.grade}...`);
    
    // Insert grade
    insertGrade(gradeData.grade, `Grade ${gradeData.grade} Mathematics`);

    for (const subject of gradeData.subjects) {
      console.log(`  📖 Subject: ${subject.name}`);
      
      // Insert subject
      insertSubject(
        gradeData.grade,
        subject.id,
        subject.name,
        subject.icon,
        subject.description
      );

      for (const topic of subject.topics) {
        console.log(`    📝 Topic: ${topic.title}`);
        
        // Insert topic
        insertTopic(
          gradeData.grade,
          subject.id,
          topic.id,
          topic.title,
          topic.description,
          topic.content
        );

        // Insert questions
        for (const question of topic.questions) {
          insertQuestion(
            gradeData.grade,
            subject.id,
            topic.id,
            question.id,
            question.question,
            question.options,
            question.correctAnswer,
            question.explanation,
            question.difficulty,
            false // Not AI generated
          );
          totalQuestions++;
        }

        console.log(`      ✅ ${topic.questions.length} questions`);
      }
    }
    
    console.log('');
  }

  console.log('✅ Migration completed successfully!');
  console.log(`📊 Total questions migrated: ${totalQuestions}`);
}

// Run migration
try {
  migrateData();
} catch (error) {
  console.error('❌ Migration failed:', error);
  process.exit(1);
}

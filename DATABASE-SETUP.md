# 🗄️ Database Setup Guide - SQLite Integration

Your Ontario Math Academy now uses **SQLite database** to store all curriculum data and AI-generated questions!

---

## 🎯 What Changed

### Before (Static Files)
- ❌ Questions stored in TypeScript file
- ❌ No persistence for AI-generated questions
- ❌ Hard to manage large amounts of data
- ❌ Required code changes to add content

### After (SQLite Database)
- ✅ All data stored in SQLite database
- ✅ AI-generated questions automatically saved
- ✅ Easy to manage and query data
- ✅ Add content without code changes
- ✅ Track AI-generated vs manual questions
- ✅ Statistics and analytics

---

## 📊 Database Schema

### Tables

**1. grades** - Grade levels (6-12)
```sql
- id (PRIMARY KEY)
- grade_number (UNIQUE)
- description
- created_at
```

**2. subjects** - Math subjects per grade
```sql
- id (PRIMARY KEY)
- grade_id (FOREIGN KEY)
- subject_id (UNIQUE per grade)
- name
- icon
- description
- created_at
```

**3. topics** - Topics within subjects
```sql
- id (PRIMARY KEY)
- subject_id (FOREIGN KEY)
- topic_id (UNIQUE per subject)
- title
- description
- content (lesson text)
- created_at
```

**4. questions** - Practice questions
```sql
- id (PRIMARY KEY)
- topic_id (FOREIGN KEY)
- question_id (UNIQUE per topic)
- question
- option_a, option_b, option_c, option_d
- correct_answer (0-3)
- explanation
- difficulty (easy/medium/hard/advanced)
- ai_generated (boolean)
- ai_provider (openai/claude/deepseek)
- created_at
```

---

## 🚀 Setup Instructions

### Step 1: Install Dependencies

Already done! ✅ (better-sqlite3 installed)

### Step 2: Run Migration

This imports all existing curriculum data into the database:

```powershell
npm run migrate
```

**What this does:**
- Creates `data/ontario-math.db` file
- Creates all database tables
- Imports all existing questions from `curriculum-data.ts`
- Sets up indexes for performance

**Expected output:**
```
🚀 Starting migration...
✅ Created data directory
📚 Migrating Grade 6...
  📖 Subject: Number Sense
    📝 Topic: Introduction to Integers
      ✅ 6 questions
...
✅ Migration completed successfully!
📊 Total questions migrated: 72
```

### Step 3: Restart Development Server

```powershell
npm run dev
```

The app now reads from the database instead of the static file!

---

## 💾 Database Location

**File**: `data/ontario-math.db`

**Note**: This file is automatically created and is excluded from Git (in `.gitignore`)

---

## 🔄 How AI Questions Are Saved

### Automatic Saving

When you generate questions with AI:

1. **Generate** questions in the admin panel
2. **Specify** grade, subject, and topic
3. **Questions automatically saved** to database
4. **Tagged** with AI provider (OpenAI/Claude/DeepSeek)
5. **Immediately available** in quizzes

### Database Entry

Each AI-generated question includes:
- ✅ All question data (text, options, answer, explanation)
- ✅ Difficulty level
- ✅ `ai_generated = true` flag
- ✅ AI provider name
- ✅ Timestamp

---

## 📈 Statistics & Analytics

### View Statistics

The database tracks:
- Total questions (manual + AI)
- AI-generated questions count
- Questions by difficulty level
- Questions by AI provider
- Questions per grade/subject/topic

### Access Statistics

```typescript
import { getStatistics } from '@/lib/db-operations';

const stats = getStatistics();
console.log(stats);
```

**Example output:**
```json
{
  "totalGrades": 7,
  "totalSubjects": 15,
  "totalTopics": 18,
  "totalQuestions": 150,
  "aiGeneratedQuestions": 78,
  "manualQuestions": 72,
  "questionsByDifficulty": [
    { "difficulty": "easy", "count": 40 },
    { "difficulty": "medium", "count": 50 },
    { "difficulty": "hard", "count": 35 },
    { "difficulty": "advanced", "count": 25 }
  ],
  "questionsByProvider": [
    { "ai_provider": "openai", "count": 45 },
    { "ai_provider": "claude", "count": 20 },
    { "ai_provider": "deepseek", "count": 13 }
  ]
}
```

---

## 🛠️ Database Operations

### Query Functions

All database operations are in `lib/db-operations.ts`:

**Grades:**
```typescript
getAllGrades()              // Get all grades with subjects
getGradeByNumber(6)         // Get specific grade
insertGrade(6, "Grade 6")   // Add new grade
```

**Subjects:**
```typescript
getSubjectsByGrade(6)                    // All subjects for grade
getSubjectByIds(6, "number-sense")       // Specific subject
insertSubject(6, "algebra", "Algebra")   // Add subject
```

**Topics:**
```typescript
getTopicsBySubject(subjectId)                  // All topics
getTopicByIds(6, "algebra", "variables")       // Specific topic
insertTopic(6, "algebra", "variables", "...")  // Add topic
```

**Questions:**
```typescript
getQuestionsByTopic(topicId)                    // All questions
getQuestionsByTopicAndDifficulty(topicId, "easy") // Filtered
insertQuestion(...)                             // Add question
insertAIGeneratedQuestions(...)                 // Batch insert AI questions
```

---

## 🔧 Database Management

### Reset Database

To start fresh (deletes all data):

```powershell
npm run db:reset
```

**Warning**: This deletes the database and re-imports from `curriculum-data.ts`

### Backup Database

```powershell
# Create backup
Copy-Item data\ontario-math.db data\ontario-math-backup.db

# Restore from backup
Copy-Item data\ontario-math-backup.db data\ontario-math.db
```

### View Database

Use a SQLite viewer:
- **DB Browser for SQLite**: https://sqlitebrowser.org/
- **VS Code Extension**: SQLite Viewer
- **Command line**: `sqlite3 data/ontario-math.db`

---

## 📝 Adding Content

### Option 1: Via AI Generator (Recommended)

1. Go to Admin Panel → AI Question Generator
2. Select grade, subject, topic
3. Generate questions
4. **Automatically saved to database** ✅

### Option 2: Via Database Operations

```typescript
import { insertQuestion } from '@/lib/db-operations';

insertQuestion(
  6,                    // grade
  'number-sense',       // subject ID
  'integers',           // topic ID
  'int-q-new',         // question ID
  'What is -5 + 3?',   // question
  ['-2', '2', '-8', '8'], // options
  0,                    // correct answer index
  'Add the numbers...',   // explanation
  'easy',              // difficulty
  false                // not AI generated
);
```

### Option 3: Bulk Import

Create a script to import from CSV, JSON, or other sources.

---

## 🔍 Querying Examples

### Get all questions for a grade

```typescript
const grade6 = getGradeByNumber(6);
grade6.subjects.forEach(subject => {
  subject.topics.forEach(topic => {
    console.log(`${topic.title}: ${topic.questions.length} questions`);
  });
});
```

### Get only AI-generated questions

```typescript
const db = getDatabase();
const aiQuestions = db.prepare(`
  SELECT * FROM questions 
  WHERE ai_generated = 1 
  ORDER BY created_at DESC
`).all();
```

### Get questions by difficulty

```typescript
const hardQuestions = db.prepare(`
  SELECT q.*, t.title as topic_title
  FROM questions q
  JOIN topics t ON q.topic_id = t.id
  WHERE q.difficulty = 'hard'
`).all();
```

---

## 🎯 Benefits of Database Approach

### For Students
- ✅ More questions available
- ✅ Fresh AI-generated content
- ✅ Consistent experience

### For Teachers
- ✅ Easy content management
- ✅ Track question sources
- ✅ Analytics on question usage
- ✅ No code changes needed

### For Developers
- ✅ Scalable architecture
- ✅ Easy to query and filter
- ✅ Better performance
- ✅ Data persistence

---

## 🔒 Security & Backup

### Database Security
- ✅ Local file (not exposed to internet)
- ✅ Excluded from Git
- ✅ No sensitive data stored
- ✅ Can be encrypted if needed

### Backup Strategy
1. **Regular backups**: Copy database file
2. **Version control**: Keep migration scripts in Git
3. **Export**: Can export to JSON/CSV
4. **Cloud backup**: Upload to cloud storage

---

## 📊 Performance

### Optimizations
- ✅ Indexes on foreign keys
- ✅ Indexes on frequently queried fields
- ✅ WAL mode for better concurrency
- ✅ Prepared statements for speed

### Expected Performance
- **Query time**: < 1ms for most queries
- **Insert time**: < 1ms per question
- **Database size**: ~1MB per 1000 questions
- **Concurrent users**: Handles multiple readers

---

## 🐛 Troubleshooting

### "Database file not found"

**Solution**: Run migration
```powershell
npm run migrate
```

### "Table already exists"

**Normal**: Database already initialized. No action needed.

### "Foreign key constraint failed"

**Cause**: Trying to insert data with invalid references
**Solution**: Ensure parent records exist (grade → subject → topic → question)

### Database locked

**Cause**: Multiple processes accessing database
**Solution**: Close other connections, restart dev server

### Reset everything

```powershell
Remove-Item -Force data\ontario-math.db
npm run migrate
```

---

## 🔄 Migration from Static to Database

### What Happens

1. **Old way** (curriculum-data.ts):
   - Static TypeScript file
   - Hardcoded questions
   - No persistence

2. **New way** (SQLite):
   - Dynamic database
   - Persistent storage
   - AI questions saved automatically

### Backward Compatibility

The old `curriculum-data.ts` file is still used for:
- ✅ Initial migration
- ✅ Backup/reference
- ✅ Type definitions

You can still use it, but database is now the source of truth.

---

## 📚 API Endpoints

### Get Curriculum Data

```
GET /api/curriculum
GET /api/curriculum?grade=6
```

### Get Statistics

```
POST /api/curriculum
Body: { "action": "statistics" }
```

### Generate & Save Questions

```
POST /api/generate-questions
Body: {
  "grade": 6,
  "subject": "Number Sense",
  "subjectId": "number-sense",
  "topicId": "integers",
  "topic": "Introduction to Integers",
  "difficulty": "medium",
  "count": 5,
  "provider": "openai",
  "saveToDb": true  // ← Saves to database
}
```

---

## ✅ Setup Checklist

- [ ] Dependencies installed (`better-sqlite3`)
- [ ] Migration script run (`npm run migrate`)
- [ ] Database file created (`data/ontario-math.db`)
- [ ] Data imported successfully
- [ ] Dev server restarted
- [ ] App loads from database
- [ ] AI questions save to database
- [ ] Statistics accessible

---

## 🎉 You're All Set!

Your Ontario Math Academy now has:
- ✅ SQLite database for all content
- ✅ Automatic saving of AI questions
- ✅ Statistics and analytics
- ✅ Scalable architecture
- ✅ Easy content management

**Next Steps:**
1. Run `npm run migrate` to set up database
2. Generate AI questions (they'll be saved automatically)
3. View statistics in admin panel
4. Build more content!

---

**Database-powered education! 🚀📊**

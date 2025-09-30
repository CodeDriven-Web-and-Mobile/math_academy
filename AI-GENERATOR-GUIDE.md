# 🤖 AI Question Generator - Complete Guide

## 🎯 How It Works

The AI Question Generator now **automatically knows** which grade, subject, and topic you're generating questions for, and **saves them directly to the database**!

---

## 📊 The Flow

```
1. Select Grade (e.g., Grade 6)
        ↓
2. Select Subject (e.g., Number Sense)
        ↓
3. Select Topic (e.g., Introduction to Integers)
        ↓
4. AI Generator appears with context
        ↓
5. Choose AI provider, difficulty, count
        ↓
6. Click "Generate"
        ↓
7. AI creates questions
        ↓
8. Questions automatically saved to database
        ↓
9. Questions immediately available in quizzes!
```

---

## 🚀 Step-by-Step Usage

### Step 1: Access the Generator

Go to: http://localhost:3000/admin/ai-generator

### Step 2: Select Context

You'll see 3 selection cards:

**Card 1: Select Grade**
- Choose from Grade 6-12
- Shows all grades from database

**Card 2: Select Subject**
- Appears after selecting grade
- Shows subjects for that grade (Number Sense, Algebra, etc.)

**Card 3: Select Topic**
- Appears after selecting subject
- Shows topics with current question count
- Example: "Introduction to Integers (6 questions)"

### Step 3: Generate Questions

Once you select a topic, the AI Generator appears with:

**Pre-filled Context:**
- ✅ Grade: Automatically set
- ✅ Subject: Automatically set
- ✅ Topic: Automatically set

**Your Choices:**
- AI Provider (OpenAI/Claude/DeepSeek)
- Difficulty Level (Easy/Medium/Hard/Advanced)
- Question Count (1-10)

### Step 4: Click Generate

The system will:
1. Send request to AI with full context
2. AI generates curriculum-aligned questions
3. **Automatically save to database** with:
   - Grade number
   - Subject ID
   - Topic ID
   - AI provider tag
   - Difficulty level
   - Timestamp

### Step 5: Verify

You'll see:
- ✅ Generated questions displayed
- ✅ Green "Saved to Database" badge
- ✅ Console log confirmation

---

## 💾 Database Storage

### What Gets Saved

```sql
INSERT INTO questions (
  topic_id,           -- Linked to selected topic
  question_id,        -- Auto-generated unique ID
  question,           -- Question text
  option_a, b, c, d,  -- Four options
  correct_answer,     -- Index (0-3)
  explanation,        -- Detailed explanation
  difficulty,         -- easy/medium/hard/advanced
  ai_generated,       -- TRUE
  ai_provider,        -- openai/claude/deepseek
  created_at          -- Timestamp
)
```

### Example Database Entry

```
Grade: 6
Subject: number-sense
Topic: integers
Question: "What is the opposite of -7?"
Options: ["7", "-7", "0", "14"]
Correct Answer: 0
Explanation: "The opposite of -7 is 7..."
Difficulty: easy
AI Generated: true
AI Provider: openai
Created At: 2025-09-29 23:45:00
```

---

## ✅ Verification

### Check Questions Were Saved

**Option 1: Take a Quiz**
1. Go to the topic page
2. Click "Take Quiz"
3. Select difficulty level
4. You'll see the new AI-generated questions!

**Option 2: View Database**
```powershell
# Using DB Browser for SQLite
# Open: data/ontario-math.db
# Query: SELECT * FROM questions WHERE ai_generated = 1
```

**Option 3: Check Console**
Look for: `✅ 3 questions saved to database for Grade 6 - Number Sense - Introduction to Integers`

---

## 🎯 Key Features

### 1. Context-Aware
- ✅ Knows which grade you're working on
- ✅ Knows which subject
- ✅ Knows which topic
- ✅ No manual entry needed

### 2. Automatic Saving
- ✅ Questions saved to database automatically
- ✅ Properly linked to grade/subject/topic
- ✅ Tagged with AI provider
- ✅ Timestamped

### 3. Immediate Availability
- ✅ Questions appear in quizzes instantly
- ✅ No restart needed
- ✅ No code changes needed
- ✅ Students see them right away

### 4. Tracking
- ✅ Know which questions are AI-generated
- ✅ Know which AI provider created them
- ✅ Track when they were created
- ✅ Filter by difficulty

---

## 📈 Example Workflow

### Scenario: Add Questions to Grade 6 Integers

1. **Navigate**: Admin → AI Question Generator

2. **Select**:
   - Grade: 6
   - Subject: Number Sense
   - Topic: Introduction to Integers

3. **Configure**:
   - Provider: OpenAI
   - Difficulty: Medium
   - Count: 5

4. **Generate**: Click "Generate 5 Questions"

5. **Result**:
   - 5 questions created by AI
   - Saved to database automatically
   - Badge shows "Saved to Database"
   - Questions preview displayed

6. **Verify**:
   - Go to Grade 6 → Number Sense → Integers → Take Quiz
   - Select "Medium" difficulty
   - See the 5 new questions!

---

## 🔍 Behind the Scenes

### API Request

```json
{
  "topic": "Introduction to Integers",
  "grade": 6,
  "subject": "Number Sense",
  "subjectId": "number-sense",
  "topicId": "integers",
  "difficulty": "medium",
  "count": 5,
  "provider": "openai",
  "saveToDb": true,  // ← Triggers database save
  "context": "Ontario curriculum Grade 6 mathematics"
}
```

### API Response

```json
{
  "success": true,
  "provider": "openai",
  "questions": [...],
  "count": 5,
  "savedToDb": true,  // ← Confirms saved
  "savedIds": [101, 102, 103, 104, 105]
}
```

### Database Operations

```typescript
// Automatically called when saveToDb is true
insertAIGeneratedQuestions(
  6,                    // grade
  'number-sense',       // subject ID
  'integers',           // topic ID
  questions,            // generated questions
  'openai'             // AI provider
);
```

---

## 💡 Best Practices

### 1. Start Small
- Generate 2-3 questions first
- Review quality
- Adjust if needed

### 2. Mix Difficulties
- Generate questions at all levels
- Easy: 2-3 questions
- Medium: 3-4 questions
- Hard: 2-3 questions
- Advanced: 1-2 questions

### 3. Review Before Using
- Check question accuracy
- Verify explanations
- Test in quiz mode
- Get student feedback

### 4. Track Sources
- Database tracks AI vs manual
- Know which provider works best
- Monitor question quality

---

## 🎓 For Teachers

### Adding Content to Existing Topics

1. Select the grade/subject/topic
2. Generate questions
3. They're added to existing questions
4. Students see both manual and AI questions

### Creating New Topics

1. First, add topic to database (or curriculum-data.ts)
2. Run migration if needed
3. Then generate AI questions for it

### Bulk Generation

Generate questions for multiple topics:
1. Select first topic → Generate
2. Select second topic → Generate
3. Repeat as needed
4. All saved automatically

---

## 📊 Statistics

### View AI Question Stats

```typescript
import { getStatistics } from '@/lib/db-operations';

const stats = getStatistics();
console.log(stats.aiGeneratedQuestions);  // Total AI questions
console.log(stats.questionsByProvider);   // By provider
```

### Query AI Questions

```sql
-- All AI-generated questions
SELECT * FROM questions WHERE ai_generated = 1;

-- By provider
SELECT * FROM questions WHERE ai_provider = 'openai';

-- By difficulty
SELECT * FROM questions 
WHERE ai_generated = 1 AND difficulty = 'hard';

-- Recent AI questions
SELECT * FROM questions 
WHERE ai_generated = 1 
ORDER BY created_at DESC 
LIMIT 10;
```

---

## 🐛 Troubleshooting

### "Questions not appearing in quiz"

**Check:**
1. Was "Saved to Database" badge shown?
2. Did you select the correct topic?
3. Did you select the right difficulty in quiz?

**Solution**: Refresh page or restart server

### "Cannot save to database"

**Cause**: Missing subjectId or topicId

**Solution**: Use the selection interface (don't use hardcoded values)

### "Questions saved but can't see them"

**Check**: Database file exists
```powershell
Test-Path data\ontario-math.db  # Should be True
```

**Solution**: Run migration if needed
```powershell
npm run migrate
```

---

## ✅ Summary

### What You Get

- ✅ **Context-aware generator** - Knows grade/subject/topic
- ✅ **Automatic saving** - No manual steps
- ✅ **Immediate availability** - Questions ready instantly
- ✅ **Full tracking** - Know source and provider
- ✅ **Easy workflow** - Select, generate, done!

### The Magic

1. **Select** grade, subject, topic from database
2. **Generate** questions with AI
3. **Save** automatically to database
4. **Use** immediately in quizzes
5. **Track** everything for analytics

---

**Your AI Question Generator is now fully integrated with the database! Generate questions and watch them appear in quizzes automatically! 🚀🤖**

# ✏️ Question Editor - Complete Guide

## 🎯 Overview

The Question Editor allows you to **review, edit, and fix** all questions in the database - both AI-generated and manual. Perfect for correcting AI mistakes, updating explanations, or improving question quality.

---

## ✨ Features

### 1. **View All Questions** 📋
- See all questions from database
- Organized by grade, subject, topic
- Shows AI-generated vs manual
- Displays difficulty level

### 2. **Advanced Filtering** 🔍
- **By Grade**: Filter by specific grade (6-12)
- **By Source**: AI-generated only or manual only
- **Search**: Find questions by text, topic, or subject

### 3. **Edit Questions** ✏️
- Edit question text
- Modify all 4 options
- **Change correct answer** (fix AI mistakes!)
- Update explanation
- Change difficulty level

### 4. **Delete Questions** 🗑️
- Remove incorrect questions
- Delete duplicates
- Clean up database

---

## 🚀 How to Use

### Access the Editor

Go to: http://localhost:3000/admin/question-editor

Or: Admin Panel → Question Editor

### Step 1: Browse Questions

All questions are displayed with:
- Grade, Subject, Topic badges
- Difficulty level badge
- AI-generated indicator (if applicable)
- Question text and options
- Correct answer highlighted (green)
- Explanation

### Step 2: Filter Questions

**Filter by Grade:**
```
Select: Grade 6
Result: Shows only Grade 6 questions
```

**Filter by Source:**
```
Select: AI-Generated Only
Result: Shows only AI-created questions
```

**Search:**
```
Type: "integer"
Result: Shows questions containing "integer"
```

### Step 3: Edit a Question

1. **Click "Edit" button** on any question
2. **Edit Mode opens** with all fields editable
3. **Make changes:**
   - Update question text
   - Fix options A, B, C, D
   - **Change correct answer** (dropdown)
   - Improve explanation
   - Adjust difficulty
4. **Click "Save Changes"**
5. **Success message** appears
6. **Changes saved** to database immediately

### Step 4: Delete a Question

1. **Click "Delete" button**
2. **Confirm deletion**
3. **Question removed** from database
4. **Students won't see it** anymore

---

## 💡 Common Use Cases

### 1. Fix Incorrect AI Answers

**Problem**: AI marked wrong answer as correct

**Solution**:
1. Filter: AI-Generated Only
2. Find the question
3. Click Edit
4. Change "Correct Answer" dropdown
5. Save

**Example:**
```
Question: What is 2 + 2?
Options: A) 3  B) 4  C) 5  D) 6
AI Said: A (Wrong!)
Fix: Change to B
Save ✅
```

### 2. Improve Explanations

**Problem**: Explanation is unclear

**Solution**:
1. Find question
2. Click Edit
3. Rewrite explanation with more detail
4. Save

### 3. Update Question Text

**Problem**: Question has typo or unclear wording

**Solution**:
1. Find question
2. Click Edit
3. Fix question text
4. Save

### 4. Adjust Difficulty

**Problem**: Question marked "Easy" but actually "Hard"

**Solution**:
1. Find question
2. Click Edit
3. Change difficulty dropdown
4. Save

### 5. Remove Duplicates

**Problem**: Same question appears twice

**Solution**:
1. Find duplicate
2. Click Delete
3. Confirm

---

## 🔍 Filtering Examples

### Find All AI Questions for Grade 6

```
Grade: Grade 6
Source: AI-Generated Only
Result: All AI questions for Grade 6
```

### Find Hard Questions

```
Search: "hard"
Or manually review difficulty badges
```

### Find Questions About Integers

```
Search: "integer"
Result: All questions mentioning integers
```

### Review Recent AI Generations

```
Source: AI-Generated Only
Result: All AI questions (newest at bottom)
```

---

## ✏️ Editing Interface

### View Mode (Default)

```
┌─────────────────────────────────────────┐
│ [Grade 6] [Number Sense] [Integers]    │
│ [Medium] [AI (openai)]                  │
│                                         │
│ Question: What is -5 + 3?               │
│                                         │
│ ✓ A. -2  (Correct - highlighted green) │
│   B. 2                                  │
│   C. -8                                 │
│   D. 8                                  │
│                                         │
│ Explanation: Add the numbers...         │
│                                         │
│ [Edit] [Delete]                         │
└─────────────────────────────────────────┘
```

### Edit Mode

```
┌─────────────────────────────────────────┐
│ Question:                               │
│ [Text area with question]               │
│                                         │
│ Option A: [Correct ✓]                  │
│ [Input field]                           │
│                                         │
│ Option B:                               │
│ [Input field]                           │
│                                         │
│ Option C:                               │
│ [Input field]                           │
│                                         │
│ Option D:                               │
│ [Input field]                           │
│                                         │
│ Correct Answer:                         │
│ [Dropdown: A, B, C, D]                  │
│                                         │
│ Explanation:                            │
│ [Text area]                             │
│                                         │
│ Difficulty:                             │
│ [Dropdown: Easy, Medium, Hard, Advanced]│
│                                         │
│ [Save Changes] [Cancel]                 │
└─────────────────────────────────────────┘
```

---

## 📊 Statistics

### View Question Counts

At the top of filters:
```
Showing X of Y questions
```

### Filter Results

After applying filters:
```
Showing 15 of 85 questions
(15 match your filters)
```

---

## 🎓 Best Practices

### 1. Review AI Questions Regularly

```
Weekly: Check AI-generated questions
Filter: AI-Generated Only
Review: Correctness and quality
Fix: Any errors found
```

### 2. Test Questions

```
Before fixing: Take the quiz yourself
Verify: Correct answer is actually correct
Then: Edit if needed
```

### 3. Improve Explanations

```
Read: Student feedback
Update: Unclear explanations
Add: More detail where needed
```

### 4. Maintain Quality

```
Delete: Duplicate questions
Fix: Incorrect answers
Update: Outdated content
Improve: Unclear wording
```

### 5. Track Changes

```
Note: What you changed
Why: Document reason
Test: Verify fix works
```

---

## 🐛 Troubleshooting

### "Changes not saving"

**Check:**
1. All fields filled?
2. Correct answer selected (0-3)?
3. Internet connection?

**Solution**: Try again or refresh page

### "Can't find a question"

**Try:**
1. Clear all filters
2. Search by topic name
3. Check different grade

### "Deleted by accident"

**Note**: Deletions are permanent
**Prevention**: Always confirm before deleting
**Backup**: Regular database backups recommended

---

## 🔒 Safety Features

### Confirmation Dialogs

**Delete**: "Are you sure?" confirmation
**Edit**: Can cancel before saving
**Filters**: Easy to clear and start over

### Validation

- Correct answer must be 0-3
- All fields required
- Difficulty must be valid

### Immediate Feedback

- Success messages (green)
- Error messages (red)
- Loading states

---

## 📈 Workflow Example

### Daily Review Process

**Morning: Check New AI Questions**
```
1. Go to Question Editor
2. Filter: AI-Generated Only
3. Review newest questions
4. Fix any errors
5. Improve explanations
```

**Weekly: Quality Check**
```
1. Filter by each grade
2. Review question quality
3. Update as needed
4. Delete duplicates
```

**Monthly: Comprehensive Review**
```
1. Review all questions
2. Update outdated content
3. Improve explanations
4. Adjust difficulty levels
```

---

## 🎯 Quick Actions

### Fix Wrong Answer

```
1. Find question
2. Edit
3. Change "Correct Answer" dropdown
4. Save
Done in 30 seconds!
```

### Improve Explanation

```
1. Find question
2. Edit
3. Rewrite explanation
4. Save
Done in 1 minute!
```

### Remove Duplicate

```
1. Find duplicate
2. Delete
3. Confirm
Done in 10 seconds!
```

---

## ✅ Summary

### What You Can Do

✅ **View** all questions in database
✅ **Filter** by grade, source, search term
✅ **Edit** any field of any question
✅ **Fix** incorrect answers
✅ **Update** explanations
✅ **Delete** unwanted questions
✅ **Improve** question quality

### Key Features

✅ **Easy filtering** - Find questions fast
✅ **Inline editing** - Edit right on the page
✅ **Immediate save** - Changes apply instantly
✅ **Safety features** - Confirmations and validation
✅ **Visual feedback** - Success/error messages

### Best For

✅ Fixing AI mistakes
✅ Improving question quality
✅ Updating explanations
✅ Removing duplicates
✅ Maintaining database quality

---

**Keep your question database accurate and high-quality with the Question Editor! ✏️✅**

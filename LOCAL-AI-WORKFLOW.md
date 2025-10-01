# Local AI Workflow Guide

## 🎯 Overview

This guide explains how to use AI features locally to generate content, then deploy the static content to Netlify.

---

## 🚀 Workflow

### **Step 1: Generate Content Locally**

1. **Start Local Development Server:**
   ```bash
   npm run dev
   ```

2. **Access AI Generators:**
   - AI Question Generator: http://localhost:3000/admin/ai-generator
   - AI Content Generator: http://localhost:3000/admin/content-generator

3. **Generate Content:**
   - Select grade, subject, and topic
   - Choose AI provider (OpenAI, Claude, DeepSeek)
   - Generate questions or lesson content
   - **Copy the generated content** (it won't persist on Netlify)

---

### **Step 2: Add Content to curriculum-data.ts**

#### **For Questions:**

1. Open `lib/curriculum-data.ts`
2. Find the topic you generated questions for
3. Add the questions to the `questions` array:

```typescript
{
  id: 'new-question-1',
  question: 'What is 2 + 2?',
  options: ['3', '4', '5', '6'],
  correctAnswer: 1,
  explanation: 'The sum of 2 and 2 is 4.',
  difficulty: 'easy'
}
```

#### **For Lesson Content:**

1. Open `lib/curriculum-data.ts`
2. Find the topic
3. Update the `content` field:

```typescript
{
  id: 'integers',
  title: 'Understanding Integers',
  description: 'Learn about positive and negative numbers',
  content: `
# Understanding Integers

## What are Integers?

Integers are whole numbers that can be positive, negative, or zero...

[Paste your AI-generated content here]
  `,
  questions: [...]
}
```

---

### **Step 3: Test Locally**

```bash
npm run dev
```

Visit the topic page and verify:
- ✅ New content displays correctly
- ✅ LaTeX formulas render properly
- ✅ Mermaid diagrams work
- ✅ New questions appear in quizzes

---

### **Step 4: Deploy to Netlify**

```bash
git add .
git commit -m "Add: New AI-generated content for [topic name]"
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Build your site
3. Deploy with the new content

---

## 📋 Quick Reference

### **Local Development Commands:**

```bash
# Start dev server
npm run dev

# Run database migration (local only)
npm run migrate

# Build for production (test before deploy)
npm run build
```

### **AI Generator URLs (Local):**

- Questions: http://localhost:3000/admin/ai-generator
- Content: http://localhost:3000/admin/content-generator
- Question Editor: http://localhost:3000/admin/question-editor

---

## 💡 Tips

### **Best Practices:**

1. **Generate in Batches:**
   - Generate 5-10 questions at once
   - Generate full lesson content for a topic
   - Copy and save immediately

2. **Test Before Deploying:**
   - Always test locally first
   - Check LaTeX rendering
   - Verify quiz functionality

3. **Commit Often:**
   - Commit after adding each topic's content
   - Use descriptive commit messages
   - Push regularly to avoid losing work

### **Content Organization:**

```typescript
// Organize by difficulty
questions: [
  // Easy questions first
  { difficulty: 'easy', ... },
  { difficulty: 'easy', ... },
  
  // Then medium
  { difficulty: 'medium', ... },
  
  // Then hard
  { difficulty: 'hard', ... },
  
  // Finally advanced
  { difficulty: 'advanced', ... },
]
```

---

## 🔧 Environment Setup

### **Local .env.local:**

```bash
# AI API Keys (for local development)
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here
DEEPSEEK_API_KEY=sk-your-key-here

# Configuration
DEFAULT_AI_PROVIDER=openai
ENABLE_AI_QUESTIONS=true
```

### **Netlify Environment Variables:**

Only add these if you want AI features on production:
- `OPENAI_API_KEY` (optional)
- `ENABLE_AI_QUESTIONS=true` (optional)

**Note:** AI-generated content won't persist on Netlify anyway, so these are optional.

---

## 📝 Example Workflow

### **Adding a New Topic with AI:**

1. **Generate Content Locally:**
   ```
   - Visit http://localhost:3000/admin/content-generator
   - Select: Grade 8, Algebra, "Solving Equations"
   - Click "Generate Full Lesson"
   - Copy the generated content
   ```

2. **Add to curriculum-data.ts:**
   ```typescript
   {
     id: 'solving-equations',
     title: 'Solving Linear Equations',
     description: 'Learn to solve equations step by step',
     content: `[Paste AI content here]`,
     questions: []
   }
   ```

3. **Generate Questions:**
   ```
   - Visit http://localhost:3000/admin/ai-generator
   - Generate 10 questions (mix of difficulties)
   - Copy each question
   ```

4. **Add Questions:**
   ```typescript
   questions: [
     { id: 'eq-1', question: '...', ... },
     { id: 'eq-2', question: '...', ... },
     // ... 8 more
   ]
   ```

5. **Test & Deploy:**
   ```bash
   npm run dev  # Test locally
   git add .
   git commit -m "Add: Solving Equations topic with 10 questions"
   git push origin main
   ```

---

## ✅ Advantages of This Approach

- ✅ **No Database Needed:** Works perfectly on Netlify
- ✅ **Fast Performance:** Static content loads instantly
- ✅ **Version Control:** All content in Git
- ✅ **No Data Loss:** Content persists in code
- ✅ **Easy Backup:** Just push to GitHub
- ✅ **AI Assistance:** Use AI to generate high-quality content
- ✅ **Full Control:** Review and edit before deploying

---

## 🎓 Summary

**Local Development:**
- Use AI generators freely
- Test everything
- Copy generated content

**Production (Netlify):**
- Serves static JSON data
- Fast and reliable
- No database issues

**Your workflow:**
1. Generate locally with AI
2. Copy to curriculum-data.ts
3. Test locally
4. Push to GitHub
5. Netlify deploys automatically

**Perfect for educational content that doesn't change frequently!** 🎉

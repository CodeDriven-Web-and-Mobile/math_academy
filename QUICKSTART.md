# 🚀 Quick Start Guide - Ontario Math Academy

## Running the Application

### Option 1: Using npm (Recommended)
```powershell
cd "c:\Users\nalla\Downloads\Dell\Programming\NEXTJSProjects\ontario-math-academy"
npm run dev
```

Then open your browser to: **http://localhost:3000**

### Option 2: Using VS Code
1. Open the `ontario-math-academy` folder in VS Code
2. Open the integrated terminal (Ctrl + `)
3. Run: `npm run dev`
4. Click the localhost link that appears

## 📱 Application Flow

### 1. Home Page (/)
- See all grade cards from 6-12
- Click any grade card to explore

### 2. Grade Page (/grade/6)
- View all subjects for that grade
- Each subject shows number of topics
- Click a subject to see topics

### 3. Subject Page (/grade/6/subject/number-sense)
- See all topics in the subject
- View question counts and difficulty levels
- Choose "View Explanation" or "Take Quiz"

### 4. Topic Explanation (/grade/6/subject/number-sense/topic/integers)
- Read detailed lesson content
- See examples and key concepts
- Click "Take Quiz" when ready

### 5. Quiz Page (/grade/6/subject/number-sense/topic/integers/quiz)
- **Step 1**: Select difficulty level (Easy, Medium, Hard, Advanced, or All)
- **Step 2**: Answer questions one by one
- **Step 3**: Get immediate feedback with explanations
- **Step 4**: See final score and performance summary

## 🎯 Testing the App

### Try These Paths:

1. **Grade 6 - Integers (Easy)**
   - Home → Grade 6 → Number Sense → Integers → Take Quiz → Easy
   - 2 easy questions about basic integer concepts

2. **Grade 8 - Exponents (All Levels)**
   - Home → Grade 8 → Number Sense → Laws of Exponents → Take Quiz → All Levels
   - 5 questions from easy to advanced

3. **Grade 10 - Factoring (Hard)**
   - Home → Grade 10 → Quadratic Relations → Factoring Quadratics → Take Quiz → Hard
   - Challenging factoring problems

4. **Grade 12 - Calculus (Advanced)**
   - Home → Grade 12 → Calculus → Introduction to Limits → Take Quiz → Advanced
   - Advanced calculus concepts

## 🎨 Features to Explore

### Visual Features
- ✅ Gradient color schemes for each grade
- ✅ Hover effects on all cards
- ✅ Smooth transitions and animations
- ✅ Progress bars during quizzes
- ✅ Color-coded difficulty badges

### Interactive Features
- ✅ Click answer options to select
- ✅ Submit button activates after selection
- ✅ Immediate feedback (green for correct, red for incorrect)
- ✅ Detailed explanations after each answer
- ✅ Score tracking throughout quiz
- ✅ Performance summary at the end

### Navigation Features
- ✅ Breadcrumb-style back buttons
- ✅ Quick links between explanation and quiz
- ✅ Exit quiz option
- ✅ Try again functionality

## 📊 Current Content Summary

| Grade | Subjects | Topics | Total Questions |
|-------|----------|--------|-----------------|
| 6     | 3        | 5      | 18              |
| 7     | 2        | 2      | 11              |
| 8     | 2        | 2      | 9               |
| 9     | 2        | 2      | 7               |
| 10    | 2        | 2      | 7               |
| 11    | 2        | 2      | 8               |
| 12    | 2        | 3      | 12              |

**Total: 23 Topics, 72+ Questions**

## 🔧 Customization Guide

### Adding New Questions

Edit `lib/curriculum-data.ts` and add to the questions array:

```typescript
{
  id: 'unique-id',
  question: 'What is 2 + 2?',
  options: ['3', '4', '5', '6'],
  correctAnswer: 1, // Index of correct answer (0-based)
  explanation: '2 + 2 = 4 because...',
  difficulty: 'easy' // 'easy' | 'medium' | 'hard' | 'advanced'
}
```

### Adding New Topics

```typescript
{
  id: 'new-topic',
  title: 'Topic Name',
  description: 'Brief description',
  content: `
# Main Heading
Content here...

## Subheading
More content...
  `,
  questions: [/* array of questions */]
}
```

### Adding New Subjects

```typescript
{
  id: 'new-subject',
  name: 'Subject Name',
  icon: '📐', // Any emoji
  description: 'What this subject covers',
  topics: [/* array of topics */]
}
```

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy:
```powershell
npm run dev -- -p 3001
```

### Dependencies Issues
```powershell
rm -rf node_modules
npm install
```

### Build Errors
```powershell
npm run build
```

### Clear Next.js Cache
```powershell
rm -rf .next
npm run dev
```

## 📝 Next Steps

1. **Add More Content**: Expand topics and questions in `curriculum-data.ts`
2. **Customize Styling**: Modify colors in `tailwind.config.ts`
3. **Add Features**: 
   - User authentication
   - Progress saving to database
   - Timed quizzes
   - Printable worksheets
   - Video explanations
4. **Deploy**: Use Vercel, Netlify, or any hosting platform

## 🎓 Educational Value

This app provides:
- **Self-paced learning** for students
- **Multiple difficulty levels** for differentiation
- **Immediate feedback** for better retention
- **Detailed explanations** for understanding
- **Progress tracking** for motivation
- **Ontario curriculum alignment** for relevance

---

**Ready to start? Run `npm run dev` and open http://localhost:3000** 🚀

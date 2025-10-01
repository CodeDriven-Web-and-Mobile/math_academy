# Ontario Math Academy 🎓

A comprehensive math education platform for Ontario students in grades 6-12, aligned with the Canadian curriculum.

## ✨ Features

- **Grade-based Navigation**: Interactive cards for grades 6-12
- **Subject Organization**: Each grade contains relevant math subjects (Number Sense, Algebra, Geometry, Trigonometry, Calculus, Vectors, etc.)
- **Multi-level Quizzes**: Questions at Easy, Medium, Hard, and Advanced difficulty levels
- **Curriculum Aligned**: Content follows Ontario's mathematics curriculum
- **Interactive Learning**: Detailed explanations with examples for each topic
- **Progress Tracking**: Real-time quiz scoring and performance feedback
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **AI Content Generation**: Generate questions and lesson content locally using OpenAI, Claude, or DeepSeek
- **LaTeX Math Rendering**: Beautiful mathematical formulas using KaTeX
- **Mermaid Diagrams**: Visual diagrams and flowcharts in lessons

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd ontario-math-academy
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional, for AI features):
```bash
cp .env.local.example .env.local
# Edit .env.local and add your API keys
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🤖 AI Content Generation (Local Only)

The platform includes AI-powered content generation for local development:

### Setup:
1. Add your API keys to `.env.local`:
   ```bash
   OPENAI_API_KEY=sk-your-key-here
   ENABLE_AI_QUESTIONS=true
   DEFAULT_AI_PROVIDER=openai
   ```

2. Access AI generators:
   - **Questions**: http://localhost:3000/admin/ai-generator
   - **Content**: http://localhost:3000/admin/content-generator

### Workflow:
1. Generate content locally using AI
2. Copy the generated content
3. Add to `lib/curriculum-data.ts`
4. Test locally
5. Push to GitHub for deployment

**📖 See [LOCAL-AI-WORKFLOW.md](./LOCAL-AI-WORKFLOW.md) for detailed instructions.**

## 📚 Application Structure

### Main Pages

1. **Home Page** (`/`)
   - Displays grade cards for grades 6-12
   - Each card shows the number of subjects available

2. **Grade Page** (`/grade/[grade]`)
   - Shows all subjects available for the selected grade
   - Displays topic count for each subject

3. **Subject Page** (`/grade/[grade]/subject/[subject]`)
   - Lists all topics within a subject
   - Shows question count and difficulty distribution
   - Options to view explanations or take quizzes

4. **Topic Explanation** (`/grade/[grade]/subject/[subject]/topic/[topic]`)
   - Detailed lesson content with examples
   - Formatted explanations with headings and lists
   - Quick link to start the quiz

5. **Quiz Page** (`/grade/[grade]/subject/[subject]/topic/[topic]/quiz`)
   - Difficulty level selection (Easy, Medium, Hard, Advanced, or All)
   - Interactive quiz interface with immediate feedback
   - Progress tracking and final score display
   - Detailed explanations for each answer

## 🎯 Curriculum Coverage

### Grade 6
- Number Sense (Integers, Fractions)
- Algebra (Variables)
- Geometry (Angles)

### Grade 7
- Number Sense (Integer Operations, Decimals)
- Algebra (Expressions)

### Grade 8
- Number Sense (Exponents)
- Algebra (Linear Equations)

### Grade 9
- Algebra (Linear Relations)
- Quadratic Relations (Introduction)

### Grade 10
- Quadratic Relations (Factoring)
- Trigonometry (Trig Ratios)

### Grade 11
- Functions (Function Notation)
- Trigonometry (Identities)

### Grade 12
- Calculus (Limits, Derivatives)
- Vectors (Vector Operations)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)

## 📁 Project Structure

```
ontario-math-academy/
├── app/
│   ├── grade/
│   │   └── [grade]/
│   │       ├── page.tsx                    # Grade detail page
│   │       └── subject/
│   │           └── [subject]/
│   │               ├── page.tsx            # Subject topics page
│   │               └── topic/
│   │                   └── [topic]/
│   │                       ├── page.tsx    # Topic explanation
│   │                       └── quiz/
│   │                           └── page.tsx # Quiz interface
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                            # Home page
├── components/
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   ├── curriculum-data.ts                  # All curriculum content
│   └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Features in Detail

### Quiz System
- **Difficulty Filtering**: Choose specific difficulty levels or practice all questions
- **Immediate Feedback**: See if your answer is correct right away
- **Explanations**: Learn from detailed explanations for every question
- **Progress Tracking**: Visual progress bar and score counter
- **Performance Summary**: Final score with percentage and encouraging feedback

### Content Management
All curriculum content is stored in `lib/curriculum-data.ts` with a structured format:
- Grades (6-12)
- Subjects (with icons and descriptions)
- Topics (with detailed content)
- Questions (with multiple difficulty levels)

## 🔧 Customization

### Adding New Content

To add new topics or questions, edit `lib/curriculum-data.ts`:

```typescript
{
  id: 'topic-id',
  title: 'Topic Title',
  description: 'Brief description',
  content: `# Markdown-style content...`,
  questions: [
    {
      id: 'q1',
      question: 'Question text?',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 0,
      explanation: 'Why this is correct...',
      difficulty: 'easy'
    }
  ]
}
```

## 📝 Future Enhancements

- User authentication and progress saving
- More subjects and topics for each grade
- Interactive visualizations and graphs
- Practice mode with unlimited retries
- Timed quiz mode
- Leaderboards and achievements
- Print-friendly study guides
- Parent/teacher dashboard

## 🤝 Contributing

This is an educational platform designed for Ontario students. Content additions and improvements are welcome!

## 📄 License

This project is created for educational purposes.

---

**Built with ❤️ for Ontario students**

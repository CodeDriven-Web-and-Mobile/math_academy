# 🏗️ Application Structure - Ontario Math Academy

## 📁 File Structure

```
ontario-math-academy/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── tailwind.config.ts        # TailwindCSS configuration
│   ├── postcss.config.mjs        # PostCSS configuration
│   ├── next.config.js            # Next.js configuration
│   ├── .eslintrc.json            # ESLint rules
│   └── .gitignore                # Git ignore patterns
│
├── 📚 Documentation
│   ├── README.md                 # Main documentation
│   ├── QUICKSTART.md             # Quick start guide
│   ├── CONTENT-GUIDE.md          # Content creation guide
│   └── APP-STRUCTURE.md          # This file
│
├── 🎨 app/ (Next.js App Router)
│   ├── layout.tsx                # Root layout (wraps all pages)
│   ├── page.tsx                  # Home page - Grade selection
│   ├── globals.css               # Global styles
│   │
│   └── grade/
│       └── [grade]/              # Dynamic route for grades
│           ├── page.tsx          # Grade detail page - Subject selection
│           │
│           └── subject/
│               └── [subject]/    # Dynamic route for subjects
│                   ├── page.tsx  # Subject page - Topic listing
│                   │
│                   └── topic/
│                       └── [topic]/  # Dynamic route for topics
│                           ├── page.tsx      # Topic explanation page
│                           │
│                           └── quiz/
│                               └── page.tsx  # Quiz page
│
├── 🧩 components/
│   └── ui/                       # Reusable UI components
│       ├── card.tsx              # Card component
│       ├── button.tsx            # Button component
│       └── badge.tsx             # Badge component
│
├── 📚 lib/
│   ├── curriculum-data.ts        # All curriculum content
│   └── utils.ts                  # Utility functions
│
└── 🔧 Generated/Build Files
    ├── .next/                    # Next.js build output
    ├── node_modules/             # Dependencies
    └── next-env.d.ts             # Next.js TypeScript definitions
```

## 🔄 Application Flow

```
┌─────────────────────────────────────────────────────────────┐
│                         HOME PAGE                            │
│                      (app/page.tsx)                          │
│                                                              │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐         │
│  │ 6  │ │ 7  │ │ 8  │ │ 9  │ │ 10 │ │ 11 │ │ 12 │         │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘         │
│   Grade Cards - Click to explore                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      GRADE PAGE                              │
│              (app/grade/[grade]/page.tsx)                    │
│                                                              │
│  Grade 6 Mathematics                                         │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 🔢 Number    │  │ 📐 Algebra   │  │ 📏 Geometry  │      │
│  │    Sense     │  │              │  │              │      │
│  │  3 topics    │  │  1 topic     │  │  1 topic     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│   Subject Cards - Click to see topics                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                     SUBJECT PAGE                             │
│        (app/grade/[grade]/subject/[subject]/page.tsx)        │
│                                                              │
│  Grade 6 - Number Sense                                      │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ 1. Introduction to Integers                        │     │
│  │    Learn about positive and negative numbers       │     │
│  │    [6 Questions] Easy•Medium•Hard•Advanced         │     │
│  │    [View Explanation]  [Take Quiz]                 │     │
│  └────────────────────────────────────────────────────┘     │
│  ┌────────────────────────────────────────────────────┐     │
│  │ 2. Operations with Fractions                       │     │
│  │    Adding, subtracting, multiplying fractions      │     │
│  │    [4 Questions] Easy•Medium•Hard                  │     │
│  │    [View Explanation]  [Take Quiz]                 │     │
│  └────────────────────────────────────────────────────┘     │
│   Topic Cards - Choose explanation or quiz                  │
└─────────────────────────────────────────────────────────────┘
                     ↓                    ↓
        ┌────────────────────┐  ┌────────────────────┐
        │   EXPLANATION      │  │    QUIZ PAGE       │
        │      PAGE          │  │                    │
        └────────────────────┘  └────────────────────┘
                                         ↓
                              ┌──────────────────┐
                              │ Select Difficulty│
                              │  🌱 Easy         │
                              │  📚 Medium       │
                              │  🔥 Hard         │
                              │  🚀 Advanced     │
                              │  🎯 All Levels   │
                              └──────────────────┘
                                         ↓
                              ┌──────────────────┐
                              │ Answer Questions │
                              │ • Select answer  │
                              │ • Submit         │
                              │ • See feedback   │
                              │ • Next question  │
                              └──────────────────┘
                                         ↓
                              ┌──────────────────┐
                              │  Final Score     │
                              │  Performance %   │
                              │  [Try Again]     │
                              └──────────────────┘
```

## 🎯 Component Hierarchy

```
RootLayout (app/layout.tsx)
│
├── HomePage (app/page.tsx)
│   └── GradeCard × 7
│       └── Card, CardHeader, CardTitle, CardContent
│
├── GradePage (app/grade/[grade]/page.tsx)
│   ├── Button (Back navigation)
│   └── SubjectCard × N
│       └── Card, CardHeader, CardTitle, CardContent
│
├── SubjectPage (app/grade/[grade]/subject/[subject]/page.tsx)
│   ├── Button (Back navigation)
│   └── TopicCard × N
│       ├── Card, CardHeader, CardTitle, CardContent
│       ├── Badge (Difficulty indicators)
│       └── Button (View/Quiz actions)
│
├── TopicPage (app/grade/[grade]/subject/[subject]/topic/[topic]/page.tsx)
│   ├── Button (Back navigation)
│   ├── Card (Content display)
│   └── Button (Start quiz)
│
└── QuizPage (app/grade/[grade]/subject/[subject]/topic/[topic]/quiz/page.tsx)
    ├── DifficultySelection Screen
    │   └── Card × 5 (Difficulty options)
    ├── QuizQuestion Screen
    │   ├── Progress Bar
    │   ├── Card (Question)
    │   ├── Badge (Difficulty, Score)
    │   └── Button (Submit/Next)
    └── QuizComplete Screen
        ├── Trophy Icon
        ├── Score Display
        └── Button (Try Again/Review)
```

## 🗄️ Data Structure

```typescript
// lib/curriculum-data.ts

Grade {
  grade: number
  subjects: Subject[]
}
    ↓
Subject {
  id: string
  name: string
  icon: string
  description: string
  topics: Topic[]
}
    ↓
Topic {
  id: string
  title: string
  description: string
  content: string (markdown)
  questions: Question[]
}
    ↓
Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced'
}
```

## 🎨 Styling System

### Color Scheme
- **Primary**: Blue (#3B82F6) to Purple (#9333EA) gradients
- **Success**: Green (#10B981)
- **Warning**: Yellow/Amber (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale

### Grade-Specific Colors
- Grade 6: Blue → Cyan
- Grade 7: Purple → Pink
- Grade 8: Green → Emerald
- Grade 9: Orange → Red
- Grade 10: Indigo → Purple
- Grade 11: Pink → Rose
- Grade 12: Teal → Cyan

### Difficulty Colors
- Easy: Green (#10B981)
- Medium: Yellow (#F59E0B)
- Hard: Orange (#F97316)
- Advanced: Red (#EF4444)

## 🔌 Key Functions

### Data Access Functions
```typescript
// lib/curriculum-data.ts

getGradeData(grade: number): Grade | undefined
// Returns all data for a specific grade

getSubjectData(grade: number, subjectId: string): Subject | undefined
// Returns a specific subject within a grade

getTopicData(grade: number, subjectId: string, topicId: string): Topic | undefined
// Returns a specific topic within a subject
```

### Utility Functions
```typescript
// lib/utils.ts

cn(...inputs: ClassValue[]): string
// Merges Tailwind classes intelligently
```

## 🚦 Routing System

Next.js App Router uses file-system based routing:

| URL Pattern | File Location | Description |
|-------------|---------------|-------------|
| `/` | `app/page.tsx` | Home page |
| `/grade/6` | `app/grade/[grade]/page.tsx` | Grade 6 page |
| `/grade/6/subject/algebra` | `app/grade/[grade]/subject/[subject]/page.tsx` | Algebra subject |
| `/grade/6/subject/algebra/topic/variables` | `app/grade/[grade]/subject/[subject]/topic/[topic]/page.tsx` | Variables topic |
| `/grade/6/subject/algebra/topic/variables/quiz` | `app/grade/[grade]/subject/[subject]/topic/[topic]/quiz/page.tsx` | Variables quiz |

### Dynamic Parameters
- `[grade]` - Captures grade number (6-12)
- `[subject]` - Captures subject ID (e.g., 'number-sense')
- `[topic]` - Captures topic ID (e.g., 'integers')

## 🎭 State Management

### Quiz Page State
```typescript
- selectedDifficulty: 'easy' | 'medium' | 'hard' | 'advanced' | 'all'
- quizStarted: boolean
- currentQuestionIndex: number
- selectedAnswer: number | null
- showExplanation: boolean
- score: number
- answeredQuestions: boolean[]
- quizCompleted: boolean
- filteredQuestions: Question[]
```

## 📱 Responsive Design

- **Mobile**: Single column layout, stacked cards
- **Tablet**: 2-column grid for cards
- **Desktop**: 3-4 column grid for cards
- All components adapt to screen size using Tailwind breakpoints

## 🔐 Type Safety

TypeScript interfaces ensure:
- Correct data structure
- Type checking at compile time
- IntelliSense support in IDE
- Reduced runtime errors

## 🚀 Performance Features

- **Static Generation**: Pages pre-rendered at build time
- **Code Splitting**: Each route loads only needed code
- **Image Optimization**: Automatic image optimization (if images added)
- **CSS Purging**: Unused CSS removed in production

---

**This structure provides a solid foundation for scaling the application! 🏗️**

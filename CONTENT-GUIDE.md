# 📚 Content Expansion Guide - Ontario Math Academy

This guide will help you add more curriculum content to the application.

## 🎯 Ontario Curriculum Standards Reference

### Grade 6 - Additional Topics to Add

**Number Sense & Numeration:**
- [ ] Whole numbers to 1,000,000
- [ ] Decimal numbers to thousandths
- [ ] Percent (introduction)
- [ ] Ratio and rate
- [ ] Order of operations

**Measurement:**
- [ ] Perimeter and area of rectangles
- [ ] Volume and capacity
- [ ] Time intervals

**Geometry & Spatial Sense:**
- [ ] Properties of 2D shapes
- [ ] Properties of 3D figures
- [ ] Transformations (translations, reflections, rotations)

**Patterning & Algebra:**
- [ ] Pattern rules
- [ ] Simple equations

**Data Management & Probability:**
- [ ] Data collection and organization
- [ ] Mean, median, mode
- [ ] Probability experiments

### Grade 7 - Additional Topics to Add

**Number Sense & Numeration:**
- [ ] Percent (calculations)
- [ ] Proportional reasoning
- [ ] Square roots

**Measurement:**
- [ ] Circumference and area of circles
- [ ] Surface area of prisms and pyramids

**Geometry & Spatial Sense:**
- [ ] Angle relationships
- [ ] Cartesian coordinate system

**Patterning & Algebra:**
- [ ] Linear relationships
- [ ] Solving equations with multiple terms

### Grade 8 - Additional Topics to Add

**Number Sense & Numeration:**
- [ ] Rational numbers
- [ ] Irrational numbers
- [ ] Scientific notation

**Measurement:**
- [ ] Volume of cylinders
- [ ] Pythagorean theorem

**Geometry & Spatial Sense:**
- [ ] Similar triangles
- [ ] Transformations on coordinate plane

**Patterning & Algebra:**
- [ ] Linear relations
- [ ] Graphing linear equations

### Grade 9 - Additional Topics to Add

**Number Sense & Algebra:**
- [ ] Polynomials (operations)
- [ ] Solving linear equations (complex)
- [ ] Systems of linear equations

**Linear Relations:**
- [ ] Slope-intercept form
- [ ] Standard form
- [ ] Parallel and perpendicular lines

**Analytic Geometry:**
- [ ] Length and midpoint
- [ ] Equation of a line

**Measurement & Geometry:**
- [ ] Optimization problems
- [ ] Circle properties

### Grade 10 - Additional Topics to Add

**Quadratic Relations:**
- [ ] Completing the square
- [ ] Quadratic formula
- [ ] Word problems with quadratics

**Analytic Geometry:**
- [ ] Equation of a circle
- [ ] Systems with quadratics

**Trigonometry:**
- [ ] Sine law
- [ ] Cosine law
- [ ] Applications in real-world problems

### Grade 11 - Additional Topics to Add

**Functions:**
- [ ] Transformations of functions
- [ ] Inverse functions
- [ ] Exponential functions
- [ ] Logarithmic functions

**Trigonometry:**
- [ ] Radian measure
- [ ] Trigonometric equations
- [ ] Compound angle formulas

**Sequences & Series:**
- [ ] Arithmetic sequences
- [ ] Geometric sequences

### Grade 12 - Additional Topics to Add

**Advanced Functions:**
- [ ] Polynomial functions
- [ ] Rational functions
- [ ] Exponential and logarithmic functions

**Calculus & Vectors:**
- [ ] Derivative rules (product, quotient, chain)
- [ ] Applications of derivatives
- [ ] Integration (introduction)
- [ ] Dot product and cross product
- [ ] Vector equations of lines and planes

**Data Management:**
- [ ] Probability distributions
- [ ] Normal distribution
- [ ] Statistical analysis

## 📝 Content Template

### Complete Topic Template

```typescript
{
  id: 'unique-topic-id',
  title: 'Topic Title',
  description: 'One-sentence description of what students will learn',
  content: `# Topic Title

Brief introduction to the topic and why it's important.

## Key Concepts:
- **Concept 1**: Explanation
- **Concept 2**: Explanation
- **Concept 3**: Explanation

## Important Formulas:
- Formula 1: explanation
- Formula 2: explanation

## Step-by-Step Process:
1. Step one
2. Step two
3. Step three

## Examples:

### Example 1:
Problem statement
Solution steps
Final answer

### Example 2:
Problem statement
Solution steps
Final answer

## Common Mistakes to Avoid:
- Mistake 1 and how to avoid it
- Mistake 2 and how to avoid it

## Real-World Applications:
- Application 1
- Application 2
`,
  questions: [
    // Easy questions (2-3)
    {
      id: 'topic-easy-1',
      question: 'Basic recall or simple application question?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 0,
      explanation: 'Clear explanation of why this is correct and how to solve it.',
      difficulty: 'easy'
    },
    // Medium questions (2-3)
    {
      id: 'topic-medium-1',
      question: 'Multi-step problem or application question?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 1,
      explanation: 'Step-by-step explanation showing the solution process.',
      difficulty: 'medium'
    },
    // Hard questions (2-3)
    {
      id: 'topic-hard-1',
      question: 'Complex problem requiring multiple concepts?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 2,
      explanation: 'Detailed explanation connecting multiple concepts.',
      difficulty: 'hard'
    },
    // Advanced questions (1-2)
    {
      id: 'topic-advanced-1',
      question: 'Challenge problem or extension question?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 3,
      explanation: 'Comprehensive explanation with advanced insights.',
      difficulty: 'advanced'
    }
  ]
}
```

## 💡 Question Writing Best Practices

### Easy Questions
- Test basic recall and understanding
- Single-step problems
- Direct application of one concept
- Clear, straightforward wording

**Example:**
```typescript
{
  question: 'What is the value of 3²?',
  options: ['6', '9', '12', '3'],
  correctAnswer: 1,
  explanation: '3² means 3 × 3 = 9',
  difficulty: 'easy'
}
```

### Medium Questions
- Require 2-3 steps
- Combine related concepts
- Include word problems
- May require formula application

**Example:**
```typescript
{
  question: 'If the area of a square is 64 cm², what is its perimeter?',
  options: ['16 cm', '32 cm', '64 cm', '256 cm'],
  correctAnswer: 1,
  explanation: 'Side length = √64 = 8 cm. Perimeter = 4 × 8 = 32 cm',
  difficulty: 'medium'
}
```

### Hard Questions
- Multi-step problem solving
- Combine multiple concepts
- Require critical thinking
- May include complex scenarios

**Example:**
```typescript
{
  question: 'A rectangle has a perimeter of 30 cm and an area of 50 cm². What is its length if length > width?',
  options: ['5 cm', '10 cm', '15 cm', '20 cm'],
  correctAnswer: 1,
  explanation: 'Let l and w be length and width. 2(l+w)=30, so l+w=15. Also lw=50. Solving: l=10, w=5',
  difficulty: 'hard'
}
```

### Advanced Questions
- Extension beyond curriculum
- Complex problem-solving
- Multiple concepts integrated
- May require creative thinking

**Example:**
```typescript
{
  question: 'If f(x) = x² and g(x) = 2x + 1, what is f(g(2))?',
  options: ['9', '25', '13', '5'],
  correctAnswer: 1,
  explanation: 'First find g(2) = 2(2) + 1 = 5. Then f(5) = 5² = 25',
  difficulty: 'advanced'
}
```

## 🎨 Content Writing Tips

### 1. Use Clear Language
- Write at grade-appropriate reading level
- Define technical terms
- Use examples liberally

### 2. Include Visual Descriptions
- Describe diagrams in words
- Use ASCII art for simple visuals
- Reference number lines, graphs, etc.

### 3. Provide Context
- Explain why the topic matters
- Give real-world applications
- Connect to previous learning

### 4. Structure Content Well
- Use headings and subheadings
- Break into digestible chunks
- Use bullet points and numbered lists

### 5. Write Helpful Explanations
- Show all steps
- Explain the reasoning
- Address common mistakes
- Provide alternative methods

## 📊 Recommended Question Distribution

For each topic, aim for:
- **Easy**: 2-3 questions (30-40%)
- **Medium**: 2-3 questions (30-40%)
- **Hard**: 2-3 questions (20-30%)
- **Advanced**: 1-2 questions (10-20%)

**Total per topic**: 6-10 questions

## 🔄 Content Review Checklist

Before adding new content, verify:
- [ ] Aligned with Ontario curriculum expectations
- [ ] Age-appropriate language and complexity
- [ ] All questions have 4 options
- [ ] Correct answer index is accurate (0-based)
- [ ] Explanations are clear and complete
- [ ] Content is properly formatted (markdown)
- [ ] No spelling or grammar errors
- [ ] Examples are worked out correctly
- [ ] Difficulty levels are appropriate

## 🚀 Quick Add Process

1. Open `lib/curriculum-data.ts`
2. Find the appropriate grade
3. Find or add the subject
4. Add your topic using the template
5. Save the file
6. Refresh the browser - changes appear immediately!

## 📈 Priority Topics to Add Next

Based on Ontario curriculum importance:

**High Priority:**
1. Grade 6: Fractions and decimals operations
2. Grade 7: Percent calculations
3. Grade 8: Pythagorean theorem
4. Grade 9: Polynomials
5. Grade 10: Quadratic formula
6. Grade 11: Exponential functions
7. Grade 12: Derivative applications

**Medium Priority:**
1. All grades: Word problems
2. All grades: Real-world applications
3. Geometry topics across all grades
4. Data management and probability

## 💾 Backup Reminder

Before making major content changes:
1. Copy `curriculum-data.ts` to `curriculum-data.backup.ts`
2. Or use version control (Git)
3. Test changes incrementally

---

**Happy content creating! Every topic you add helps Ontario students succeed! 🎓**

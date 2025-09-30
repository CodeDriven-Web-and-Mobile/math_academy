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
  content: string;
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

export const curriculumData: Grade[] = [
  {
    grade: 6,
    subjects: [
      {
        id: 'number-sense',
        name: 'Number Sense',
        icon: '🔢',
        description: 'Understanding numbers, operations, and relationships',
        topics: [
          {
            id: 'integers',
            title: 'Introduction to Integers',
            description: 'Learn about positive and negative numbers',
            content: `# Introduction to Integers

Integers are whole numbers that can be positive, negative, or zero.

## Key Concepts:
- **Positive integers**: Numbers greater than zero (1, 2, 3, ...)
- **Negative integers**: Numbers less than zero (-1, -2, -3, ...)
- **Zero**: Neither positive nor negative

## Number Line:
Integers can be represented on a number line:
... -3, -2, -1, 0, 1, 2, 3 ...

## Real-World Examples:
- Temperature: -5°C (below freezing)
- Elevation: -100m (below sea level)
- Bank account: -$50 (debt)`,
            questions: [
              {
                id: 'int-q1',
                question: 'Which of the following is NOT an integer?',
                options: ['-5', '0', '3.5', '42'],
                correctAnswer: 2,
                explanation: '3.5 is not an integer because integers are whole numbers without decimal parts.',
                difficulty: 'easy'
              },
              {
                id: 'int-q2',
                question: 'What is the opposite of -7?',
                options: ['7', '-7', '0', '14'],
                correctAnswer: 0,
                explanation: 'The opposite of -7 is 7. Opposites are the same distance from zero but on opposite sides of the number line.',
                difficulty: 'easy'
              },
              {
                id: 'int-q3',
                question: 'If the temperature is -3°C and it rises by 8°C, what is the new temperature?',
                options: ['5°C', '11°C', '-11°C', '8°C'],
                correctAnswer: 0,
                explanation: '-3 + 8 = 5. Start at -3 and move 8 units to the right on the number line.',
                difficulty: 'medium'
              },
              {
                id: 'int-q4',
                question: 'Which statement is true?',
                options: [
                  'All negative numbers are less than zero',
                  'Zero is a positive number',
                  '-10 is greater than -5',
                  'All integers are positive'
                ],
                correctAnswer: 0,
                explanation: 'By definition, negative numbers are all less than zero. -10 is actually less than -5.',
                difficulty: 'medium'
              },
              {
                id: 'int-q5',
                question: 'A submarine is at -250m depth. It ascends 180m, then descends 95m. What is its final depth?',
                options: ['-165m', '-345m', '-70m', '-525m'],
                correctAnswer: 0,
                explanation: 'Start: -250m, Ascend 180m: -250 + 180 = -70m, Descend 95m: -70 - 95 = -165m',
                difficulty: 'hard'
              },
              {
                id: 'int-q6',
                question: 'What is the sum of all integers from -3 to 3?',
                options: ['0', '6', '3', '9'],
                correctAnswer: 0,
                explanation: '(-3) + (-2) + (-1) + 0 + 1 + 2 + 3 = 0. The negative and positive numbers cancel out.',
                difficulty: 'advanced'
              }
            ]
          },
          {
            id: 'fractions',
            title: 'Operations with Fractions',
            description: 'Adding, subtracting, multiplying, and dividing fractions',
            content: `# Operations with Fractions

Learn how to perform operations with fractions.

## Adding and Subtracting Fractions:
- Find a common denominator
- Add or subtract the numerators
- Keep the denominator the same
- Simplify if possible

Example: 1/4 + 2/4 = 3/4

## Multiplying Fractions:
- Multiply the numerators
- Multiply the denominators
- Simplify

Example: 2/3 × 3/4 = 6/12 = 1/2

## Dividing Fractions:
- Flip the second fraction (reciprocal)
- Multiply
- Simplify

Example: 1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2`,
            questions: [
              {
                id: 'frac-q1',
                question: 'What is 1/3 + 1/3?',
                options: ['2/6', '2/3', '1/3', '3/3'],
                correctAnswer: 1,
                explanation: 'When denominators are the same, add the numerators: 1/3 + 1/3 = 2/3',
                difficulty: 'easy'
              },
              {
                id: 'frac-q2',
                question: 'What is 1/2 + 1/4?',
                options: ['2/6', '3/4', '2/4', '1/6'],
                correctAnswer: 1,
                explanation: 'Convert to common denominator: 2/4 + 1/4 = 3/4',
                difficulty: 'medium'
              },
              {
                id: 'frac-q3',
                question: 'What is 2/3 × 3/4?',
                options: ['6/12 = 1/2', '5/7', '6/7', '2/4'],
                correctAnswer: 0,
                explanation: 'Multiply numerators and denominators: (2×3)/(3×4) = 6/12 = 1/2',
                difficulty: 'medium'
              },
              {
                id: 'frac-q4',
                question: 'What is 1/2 ÷ 1/4?',
                options: ['1/8', '2', '4', '1/2'],
                correctAnswer: 1,
                explanation: 'Flip and multiply: 1/2 × 4/1 = 4/2 = 2',
                difficulty: 'hard'
              }
            ]
          }
        ]
      },
      {
        id: 'algebra',
        name: 'Algebra',
        icon: '📐',
        description: 'Introduction to variables and simple equations',
        topics: [
          {
            id: 'variables',
            title: 'Introduction to Variables',
            description: 'Understanding variables and expressions',
            content: `# Introduction to Variables

A variable is a letter or symbol that represents an unknown number.

## Key Concepts:
- Variables are often represented by letters like x, y, or n
- They can represent any number
- We use variables to write general rules and solve problems

## Examples:
- If x = 5, then x + 3 = 8
- If n represents the number of apples, then 2n represents twice as many apples

## Expressions vs Equations:
- **Expression**: x + 5 (no equal sign)
- **Equation**: x + 5 = 10 (has an equal sign)`,
            questions: [
              {
                id: 'var-q1',
                question: 'If x = 4, what is x + 6?',
                options: ['10', '24', '2', '46'],
                correctAnswer: 0,
                explanation: 'Substitute x with 4: 4 + 6 = 10',
                difficulty: 'easy'
              },
              {
                id: 'var-q2',
                question: 'If y = 3, what is 2y?',
                options: ['5', '6', '23', '32'],
                correctAnswer: 1,
                explanation: '2y means 2 × y. So 2 × 3 = 6',
                difficulty: 'easy'
              },
              {
                id: 'var-q3',
                question: 'Solve for x: x + 7 = 15',
                options: ['8', '22', '7', '15'],
                correctAnswer: 0,
                explanation: 'Subtract 7 from both sides: x = 15 - 7 = 8',
                difficulty: 'medium'
              },
              {
                id: 'var-q4',
                question: 'If a = 5 and b = 3, what is 2a + b?',
                options: ['11', '13', '16', '8'],
                correctAnswer: 1,
                explanation: '2a + b = 2(5) + 3 = 10 + 3 = 13',
                difficulty: 'hard'
              }
            ]
          }
        ]
      },
      {
        id: 'geometry',
        name: 'Geometry',
        icon: '📏',
        description: 'Shapes, angles, and spatial relationships',
        topics: [
          {
            id: 'angles',
            title: 'Understanding Angles',
            description: 'Types of angles and angle relationships',
            content: `# Understanding Angles

An angle is formed when two rays meet at a common point called the vertex.

## Types of Angles:
- **Acute angle**: Less than 90°
- **Right angle**: Exactly 90°
- **Obtuse angle**: Between 90° and 180°
- **Straight angle**: Exactly 180°

## Measuring Angles:
Angles are measured in degrees (°) using a protractor.

## Complementary and Supplementary:
- **Complementary angles**: Two angles that add up to 90°
- **Supplementary angles**: Two angles that add up to 180°`,
            questions: [
              {
                id: 'ang-q1',
                question: 'What type of angle is 45°?',
                options: ['Acute', 'Right', 'Obtuse', 'Straight'],
                correctAnswer: 0,
                explanation: '45° is less than 90°, so it is an acute angle.',
                difficulty: 'easy'
              },
              {
                id: 'ang-q2',
                question: 'Two complementary angles are 30° and x°. What is x?',
                options: ['60°', '150°', '30°', '90°'],
                correctAnswer: 0,
                explanation: 'Complementary angles add to 90°. So 30° + x = 90°, therefore x = 60°',
                difficulty: 'medium'
              },
              {
                id: 'ang-q3',
                question: 'If two supplementary angles are equal, what is each angle?',
                options: ['45°', '90°', '60°', '180°'],
                correctAnswer: 1,
                explanation: 'Supplementary angles add to 180°. If equal: x + x = 180°, so 2x = 180°, x = 90°',
                difficulty: 'hard'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: 7,
    subjects: [
      {
        id: 'number-sense',
        name: 'Number Sense',
        icon: '🔢',
        description: 'Rational numbers and operations',
        topics: [
          {
            id: 'integers-operations',
            title: 'Integer Operations',
            description: 'Adding, subtracting, multiplying, and dividing integers',
            content: `# Integer Operations

Master operations with positive and negative integers.

## Addition Rules:
- Same signs: Add and keep the sign
- Different signs: Subtract and use the sign of the larger number

## Subtraction:
- Subtracting is the same as adding the opposite
- a - b = a + (-b)

## Multiplication and Division:
- Same signs = Positive result
- Different signs = Negative result

Examples:
- (-3) × (-4) = 12
- (-6) ÷ 2 = -3`,
            questions: [
              {
                id: 'int-op-q1',
                question: 'What is (-5) + (-3)?',
                options: ['-8', '8', '-2', '2'],
                correctAnswer: 0,
                explanation: 'Same signs: add the numbers and keep the negative sign. -5 + -3 = -8',
                difficulty: 'easy'
              },
              {
                id: 'int-op-q2',
                question: 'What is (-4) × 6?',
                options: ['-24', '24', '-10', '10'],
                correctAnswer: 0,
                explanation: 'Different signs give a negative result: (-4) × 6 = -24',
                difficulty: 'medium'
              },
              {
                id: 'int-op-q3',
                question: 'What is (-12) ÷ (-3)?',
                options: ['4', '-4', '15', '-15'],
                correctAnswer: 0,
                explanation: 'Same signs give a positive result: (-12) ÷ (-3) = 4',
                difficulty: 'medium'
              },
              {
                id: 'int-op-q4',
                question: 'Simplify: (-2) × 3 + (-4) × (-5)',
                options: ['14', '-14', '26', '-26'],
                correctAnswer: 0,
                explanation: '(-2) × 3 = -6, (-4) × (-5) = 20, then -6 + 20 = 14',
                difficulty: 'hard'
              },
              {
                id: 'int-op-q5',
                question: 'If a = -3 and b = 4, what is a² - 2b?',
                options: ['1', '-1', '17', '-17'],
                correctAnswer: 0,
                explanation: 'a² = (-3)² = 9, 2b = 2(4) = 8, so 9 - 8 = 1',
                difficulty: 'advanced'
              }
            ]
          },
          {
            id: 'decimals',
            title: 'Operations with Decimals',
            description: 'Working with decimal numbers',
            content: `# Operations with Decimals

Learn to work confidently with decimal numbers.

## Adding and Subtracting Decimals:
- Line up the decimal points
- Add or subtract as usual
- Bring down the decimal point

Example: 3.45 + 2.1 = 5.55

## Multiplying Decimals:
- Multiply as if there were no decimals
- Count total decimal places in both numbers
- Place decimal point in answer

Example: 2.5 × 0.4 = 1.0

## Dividing Decimals:
- Move decimal point in divisor to make it whole
- Move decimal point in dividend the same number of places
- Divide as usual`,
            questions: [
              {
                id: 'dec-q1',
                question: 'What is 3.5 + 2.75?',
                options: ['6.25', '5.25', '6.10', '5.80'],
                correctAnswer: 0,
                explanation: 'Line up decimals: 3.50 + 2.75 = 6.25',
                difficulty: 'easy'
              },
              {
                id: 'dec-q2',
                question: 'What is 0.5 × 0.4?',
                options: ['0.2', '0.02', '2.0', '0.9'],
                correctAnswer: 0,
                explanation: '5 × 4 = 20. Two decimal places total, so 0.20 = 0.2',
                difficulty: 'medium'
              },
              {
                id: 'dec-q3',
                question: 'What is 12.6 ÷ 0.3?',
                options: ['42', '4.2', '420', '0.42'],
                correctAnswer: 0,
                explanation: 'Move decimal one place: 126 ÷ 3 = 42',
                difficulty: 'hard'
              }
            ]
          }
        ]
      },
      {
        id: 'algebra',
        name: 'Algebra',
        icon: '📐',
        description: 'Expressions and equations',
        topics: [
          {
            id: 'expressions',
            title: 'Algebraic Expressions',
            description: 'Simplifying and evaluating expressions',
            content: `# Algebraic Expressions

An algebraic expression contains variables, numbers, and operations.

## Key Terms:
- **Term**: A single number or variable, or numbers and variables multiplied together
- **Coefficient**: The number in front of a variable
- **Like terms**: Terms with the same variable and exponent

## Combining Like Terms:
- 3x + 5x = 8x
- 4y - 2y = 2y
- 2x + 3y cannot be combined (different variables)

## Distributive Property:
a(b + c) = ab + ac

Example: 3(x + 4) = 3x + 12`,
            questions: [
              {
                id: 'exp-q1',
                question: 'Simplify: 5x + 3x',
                options: ['8x', '15x', '8x²', '5x + 3x'],
                correctAnswer: 0,
                explanation: 'Combine like terms: 5x + 3x = 8x',
                difficulty: 'easy'
              },
              {
                id: 'exp-q2',
                question: 'Simplify: 4(x + 2)',
                options: ['4x + 2', '4x + 8', 'x + 8', '4x + 6'],
                correctAnswer: 1,
                explanation: 'Use distributive property: 4 × x + 4 × 2 = 4x + 8',
                difficulty: 'medium'
              },
              {
                id: 'exp-q3',
                question: 'Simplify: 3x + 2y - x + 5y',
                options: ['2x + 7y', '4x + 7y', '2x + 3y', '5xy'],
                correctAnswer: 0,
                explanation: 'Combine like terms: (3x - x) + (2y + 5y) = 2x + 7y',
                difficulty: 'hard'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: 8,
    subjects: [
      {
        id: 'number-sense',
        name: 'Number Sense',
        icon: '🔢',
        description: 'Exponents, square roots, and scientific notation',
        topics: [
          {
            id: 'exponents',
            title: 'Laws of Exponents',
            description: 'Understanding and applying exponent rules',
            content: `# Laws of Exponents

Exponents represent repeated multiplication.

## Basic Rules:
1. **Product Rule**: aᵐ × aⁿ = aᵐ⁺ⁿ
2. **Quotient Rule**: aᵐ ÷ aⁿ = aᵐ⁻ⁿ
3. **Power Rule**: (aᵐ)ⁿ = aᵐⁿ
4. **Zero Exponent**: a⁰ = 1 (where a ≠ 0)
5. **Negative Exponent**: a⁻ⁿ = 1/aⁿ

## Examples:
- 2³ × 2² = 2⁵ = 32
- x⁴ ÷ x² = x² 
- (3²)³ = 3⁶ = 729
- 5⁰ = 1
- 2⁻³ = 1/2³ = 1/8`,
            questions: [
              {
                id: 'exp-q1',
                question: 'What is 2³?',
                options: ['6', '8', '9', '5'],
                correctAnswer: 1,
                explanation: '2³ = 2 × 2 × 2 = 8',
                difficulty: 'easy'
              },
              {
                id: 'exp-q2',
                question: 'Simplify: x⁵ × x³',
                options: ['x⁸', 'x¹⁵', 'x²', '2x⁸'],
                correctAnswer: 0,
                explanation: 'Product rule: add exponents. x⁵ × x³ = x⁵⁺³ = x⁸',
                difficulty: 'medium'
              },
              {
                id: 'exp-q3',
                question: 'What is 5⁰?',
                options: ['0', '1', '5', 'undefined'],
                correctAnswer: 1,
                explanation: 'Any non-zero number to the power of 0 equals 1',
                difficulty: 'medium'
              },
              {
                id: 'exp-q4',
                question: 'Simplify: (2³)²',
                options: ['2⁵', '2⁶', '4⁶', '2⁹'],
                correctAnswer: 1,
                explanation: 'Power rule: multiply exponents. (2³)² = 2³ˣ² = 2⁶ = 64',
                difficulty: 'hard'
              },
              {
                id: 'exp-q5',
                question: 'What is 2⁻³?',
                options: ['-8', '-6', '1/8', '1/6'],
                correctAnswer: 2,
                explanation: 'Negative exponent: 2⁻³ = 1/2³ = 1/8',
                difficulty: 'advanced'
              }
            ]
          }
        ]
      },
      {
        id: 'algebra',
        name: 'Algebra',
        icon: '📐',
        description: 'Linear equations and relationships',
        topics: [
          {
            id: 'linear-equations',
            title: 'Solving Linear Equations',
            description: 'One and two-step equations',
            content: `# Solving Linear Equations

A linear equation is an equation where the variable has an exponent of 1.

## Steps to Solve:
1. Simplify both sides if needed
2. Use inverse operations to isolate the variable
3. Check your answer

## One-Step Equations:
- x + 5 = 12 → x = 7
- 3x = 15 → x = 5

## Two-Step Equations:
- 2x + 3 = 11
- Subtract 3: 2x = 8
- Divide by 2: x = 4

## Balance Method:
Whatever you do to one side, do to the other!`,
            questions: [
              {
                id: 'lin-q1',
                question: 'Solve: x + 8 = 15',
                options: ['7', '23', '8', '15'],
                correctAnswer: 0,
                explanation: 'Subtract 8 from both sides: x = 15 - 8 = 7',
                difficulty: 'easy'
              },
              {
                id: 'lin-q2',
                question: 'Solve: 4x = 20',
                options: ['5', '16', '24', '80'],
                correctAnswer: 0,
                explanation: 'Divide both sides by 4: x = 20 ÷ 4 = 5',
                difficulty: 'easy'
              },
              {
                id: 'lin-q3',
                question: 'Solve: 3x + 5 = 20',
                options: ['5', '15', '25', '8.33'],
                correctAnswer: 0,
                explanation: 'Subtract 5: 3x = 15, then divide by 3: x = 5',
                difficulty: 'medium'
              },
              {
                id: 'lin-q4',
                question: 'Solve: 2(x - 3) = 10',
                options: ['8', '5', '6.5', '2'],
                correctAnswer: 0,
                explanation: 'Distribute: 2x - 6 = 10, add 6: 2x = 16, divide by 2: x = 8',
                difficulty: 'hard'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: 9,
    subjects: [
      {
        id: 'algebra',
        name: 'Algebra',
        icon: '📐',
        description: 'Linear relations and equations',
        topics: [
          {
            id: 'linear-relations',
            title: 'Linear Relations',
            description: 'Understanding slope and y-intercept',
            content: `# Linear Relations

A linear relation can be represented by the equation y = mx + b

## Components:
- **m**: slope (rate of change)
- **b**: y-intercept (where line crosses y-axis)
- **x**: independent variable
- **y**: dependent variable

## Slope Formula:
m = (y₂ - y₁) / (x₂ - x₁)

## Types of Slope:
- Positive: line rises left to right
- Negative: line falls left to right
- Zero: horizontal line
- Undefined: vertical line

## Example:
y = 2x + 3
- Slope: 2 (rises 2 units for every 1 unit right)
- Y-intercept: 3`,
            questions: [
              {
                id: 'lin-rel-q1',
                question: 'In y = 3x + 5, what is the slope?',
                options: ['3', '5', '8', 'x'],
                correctAnswer: 0,
                explanation: 'In y = mx + b form, m is the slope. Here m = 3',
                difficulty: 'easy'
              },
              {
                id: 'lin-rel-q2',
                question: 'What is the y-intercept of y = -2x + 7?',
                options: ['-2', '7', '5', '0'],
                correctAnswer: 1,
                explanation: 'In y = mx + b form, b is the y-intercept. Here b = 7',
                difficulty: 'easy'
              },
              {
                id: 'lin-rel-q3',
                question: 'Find the slope between points (2, 3) and (4, 7)',
                options: ['2', '1/2', '4', '-2'],
                correctAnswer: 0,
                explanation: 'm = (7-3)/(4-2) = 4/2 = 2',
                difficulty: 'medium'
              },
              {
                id: 'lin-rel-q4',
                question: 'Which equation represents a line with slope -3 and y-intercept 4?',
                options: ['y = 4x - 3', 'y = -3x + 4', 'y = 3x + 4', 'y = -3x - 4'],
                correctAnswer: 1,
                explanation: 'Use y = mx + b with m = -3 and b = 4: y = -3x + 4',
                difficulty: 'hard'
              }
            ]
          }
        ]
      },
      {
        id: 'quadratics',
        name: 'Quadratic Relations',
        icon: '📊',
        description: 'Introduction to parabolas and quadratic equations',
        topics: [
          {
            id: 'intro-quadratics',
            title: 'Introduction to Quadratics',
            description: 'Understanding parabolas and quadratic form',
            content: `# Introduction to Quadratics

A quadratic relation has the form y = ax² + bx + c

## Key Features:
- **Parabola**: U-shaped curve
- **Vertex**: Highest or lowest point
- **Axis of symmetry**: Vertical line through vertex
- **Direction**: Opens up if a > 0, down if a < 0

## Standard Form:
y = ax² + bx + c

## Vertex Form:
y = a(x - h)² + k
where (h, k) is the vertex

## Example:
y = x² - 4x + 3
- Opens upward (a = 1 > 0)
- Has a minimum point`,
            questions: [
              {
                id: 'quad-q1',
                question: 'What shape is the graph of y = x²?',
                options: ['Line', 'Parabola', 'Circle', 'Hyperbola'],
                correctAnswer: 1,
                explanation: 'Quadratic equations graph as parabolas (U-shaped curves)',
                difficulty: 'easy'
              },
              {
                id: 'quad-q2',
                question: 'Does y = -2x² + 5 open upward or downward?',
                options: ['Upward', 'Downward', 'Sideways', 'Neither'],
                correctAnswer: 1,
                explanation: 'When a is negative (a = -2), the parabola opens downward',
                difficulty: 'medium'
              },
              {
                id: 'quad-q3',
                question: 'What is the vertex of y = (x - 3)² + 2?',
                options: ['(3, 2)', '(-3, 2)', '(3, -2)', '(2, 3)'],
                correctAnswer: 0,
                explanation: 'In vertex form y = a(x - h)² + k, the vertex is (h, k) = (3, 2)',
                difficulty: 'hard'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: 10,
    subjects: [
      {
        id: 'quadratics',
        name: 'Quadratic Relations',
        icon: '📊',
        description: 'Factoring and solving quadratic equations',
        topics: [
          {
            id: 'factoring',
            title: 'Factoring Quadratics',
            description: 'Factoring and solving by factoring',
            content: `# Factoring Quadratics

Factoring is the process of breaking down a quadratic into simpler expressions.

## Common Factoring Patterns:

### 1. Common Factor:
2x² + 4x = 2x(x + 2)

### 2. Difference of Squares:
x² - 9 = (x + 3)(x - 3)

### 3. Simple Trinomials:
x² + 5x + 6 = (x + 2)(x + 3)

### 4. Complex Trinomials:
2x² + 7x + 3 = (2x + 1)(x + 3)

## Solving by Factoring:
1. Set equation equal to zero
2. Factor completely
3. Set each factor equal to zero
4. Solve for x

Example: x² + 5x + 6 = 0
- Factor: (x + 2)(x + 3) = 0
- Solutions: x = -2 or x = -3`,
            questions: [
              {
                id: 'fact-q1',
                question: 'Factor: x² - 16',
                options: ['(x - 4)(x - 4)', '(x + 4)(x - 4)', '(x + 8)(x - 2)', 'Cannot be factored'],
                correctAnswer: 1,
                explanation: 'Difference of squares: x² - 16 = (x + 4)(x - 4)',
                difficulty: 'easy'
              },
              {
                id: 'fact-q2',
                question: 'Factor: x² + 7x + 12',
                options: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x - 3)(x - 4)'],
                correctAnswer: 0,
                explanation: 'Find two numbers that multiply to 12 and add to 7: 3 and 4',
                difficulty: 'medium'
              },
              {
                id: 'fact-q3',
                question: 'Solve: x² - 5x + 6 = 0',
                options: ['x = 2 or x = 3', 'x = -2 or x = -3', 'x = 1 or x = 6', 'x = -1 or x = -6'],
                correctAnswer: 0,
                explanation: 'Factor: (x - 2)(x - 3) = 0, so x = 2 or x = 3',
                difficulty: 'hard'
              },
              {
                id: 'fact-q4',
                question: 'Factor: 2x² + 5x + 3',
                options: ['(2x + 3)(x + 1)', '(2x + 1)(x + 3)', '(x + 3)(x + 1)', 'Cannot be factored'],
                correctAnswer: 0,
                explanation: 'Find factors of 2×3=6 that add to 5: 2 and 3. Result: (2x + 3)(x + 1)',
                difficulty: 'advanced'
              }
            ]
          }
        ]
      },
      {
        id: 'trigonometry',
        name: 'Trigonometry',
        icon: '📐',
        description: 'Right triangle trigonometry',
        topics: [
          {
            id: 'trig-ratios',
            title: 'Trigonometric Ratios',
            description: 'Sine, cosine, and tangent',
            content: `# Trigonometric Ratios

Trigonometry deals with relationships between angles and sides in right triangles.

## The Three Primary Ratios:

### SOH-CAH-TOA:
- **sin θ = Opposite / Hypotenuse**
- **cos θ = Adjacent / Hypotenuse**
- **tan θ = Opposite / Adjacent**

## Finding Sides:
If you know an angle and one side, you can find other sides.

## Finding Angles:
Use inverse functions: sin⁻¹, cos⁻¹, tan⁻¹

## Example:
In a right triangle with angle 30° and hypotenuse 10:
- Opposite = 10 × sin(30°) = 5
- Adjacent = 10 × cos(30°) ≈ 8.66`,
            questions: [
              {
                id: 'trig-q1',
                question: 'In SOH-CAH-TOA, what does SOH stand for?',
                options: [
                  'Sine = Opposite / Hypotenuse',
                  'Sine = Opposite / Height',
                  'Side = Opposite / Hypotenuse',
                  'Slope = Opposite / Hypotenuse'
                ],
                correctAnswer: 0,
                explanation: 'SOH means Sine = Opposite / Hypotenuse',
                difficulty: 'easy'
              },
              {
                id: 'trig-q2',
                question: 'If sin θ = 0.5, what is θ?',
                options: ['30°', '45°', '60°', '90°'],
                correctAnswer: 0,
                explanation: 'sin(30°) = 0.5 or 1/2',
                difficulty: 'medium'
              },
              {
                id: 'trig-q3',
                question: 'In a right triangle, if the opposite side is 3 and hypotenuse is 5, what is sin θ?',
                options: ['0.6', '0.8', '1.67', '0.75'],
                correctAnswer: 0,
                explanation: 'sin θ = opposite/hypotenuse = 3/5 = 0.6',
                difficulty: 'hard'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: 11,
    subjects: [
      {
        id: 'functions',
        name: 'Functions',
        icon: '📈',
        description: 'Understanding and working with functions',
        topics: [
          {
            id: 'function-notation',
            title: 'Function Notation',
            description: 'Understanding f(x) notation and function evaluation',
            content: `# Function Notation

A function is a relation where each input has exactly one output.

## Function Notation:
f(x) is read as "f of x"
- f is the function name
- x is the input variable
- f(x) is the output value

## Example:
If f(x) = 2x + 3
- f(2) = 2(2) + 3 = 7
- f(-1) = 2(-1) + 3 = 1

## Domain and Range:
- **Domain**: Set of all possible input values (x)
- **Range**: Set of all possible output values (f(x))

## Vertical Line Test:
A graph represents a function if any vertical line intersects it at most once.`,
            questions: [
              {
                id: 'func-q1',
                question: 'If f(x) = x + 5, what is f(3)?',
                options: ['8', '15', '2', '53'],
                correctAnswer: 0,
                explanation: 'Substitute x = 3: f(3) = 3 + 5 = 8',
                difficulty: 'easy'
              },
              {
                id: 'func-q2',
                question: 'If g(x) = x² - 4, what is g(-2)?',
                options: ['0', '-8', '8', '4'],
                correctAnswer: 0,
                explanation: 'g(-2) = (-2)² - 4 = 4 - 4 = 0',
                difficulty: 'medium'
              },
              {
                id: 'func-q3',
                question: 'If h(x) = 2x + 1, what is h(a + 1)?',
                options: ['2a + 3', '2a + 2', '2a + 1', 'a + 3'],
                correctAnswer: 0,
                explanation: 'h(a + 1) = 2(a + 1) + 1 = 2a + 2 + 1 = 2a + 3',
                difficulty: 'hard'
              },
              {
                id: 'func-q4',
                question: 'If f(x) = x² and g(x) = x + 2, what is f(g(1))?',
                options: ['9', '3', '5', '1'],
                correctAnswer: 0,
                explanation: 'First g(1) = 1 + 2 = 3, then f(3) = 3² = 9',
                difficulty: 'advanced'
              }
            ]
          }
        ]
      },
      {
        id: 'trigonometry',
        name: 'Trigonometry',
        icon: '📐',
        description: 'Advanced trigonometry and identities',
        topics: [
          {
            id: 'trig-identities',
            title: 'Trigonometric Identities',
            description: 'Fundamental trigonometric identities',
            content: `# Trigonometric Identities

Identities are equations that are always true.

## Pythagorean Identity:
sin²θ + cos²θ = 1

## Quotient Identity:
tan θ = sin θ / cos θ

## Reciprocal Identities:
- csc θ = 1 / sin θ
- sec θ = 1 / cos θ
- cot θ = 1 / tan θ

## Co-function Identities:
- sin(90° - θ) = cos θ
- cos(90° - θ) = sin θ

## Example:
If sin θ = 3/5, find cos θ
Using sin²θ + cos²θ = 1:
(3/5)² + cos²θ = 1
9/25 + cos²θ = 1
cos²θ = 16/25
cos θ = 4/5`,
            questions: [
              {
                id: 'trig-id-q1',
                question: 'What is sin²θ + cos²θ equal to?',
                options: ['1', '0', 'tan θ', 'sin θ'],
                correctAnswer: 0,
                explanation: 'This is the Pythagorean identity: sin²θ + cos²θ = 1',
                difficulty: 'easy'
              },
              {
                id: 'trig-id-q2',
                question: 'If sin θ = 0.6 and cos θ = 0.8, what is tan θ?',
                options: ['0.75', '1.33', '0.48', '1.4'],
                correctAnswer: 0,
                explanation: 'tan θ = sin θ / cos θ = 0.6 / 0.8 = 0.75',
                difficulty: 'medium'
              },
              {
                id: 'trig-id-q3',
                question: 'If sin θ = 5/13, what is cos θ? (θ is acute)',
                options: ['12/13', '13/12', '5/12', '8/13'],
                correctAnswer: 0,
                explanation: 'Using sin²θ + cos²θ = 1: (5/13)² + cos²θ = 1, cos²θ = 144/169, cos θ = 12/13',
                difficulty: 'hard'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: 12,
    subjects: [
      {
        id: 'calculus',
        name: 'Calculus',
        icon: '∞',
        description: 'Introduction to limits and derivatives',
        topics: [
          {
            id: 'limits',
            title: 'Introduction to Limits',
            description: 'Understanding limits and continuity',
            content: `# Introduction to Limits

A limit describes the value a function approaches as x approaches a certain value.

## Notation:
lim(x→a) f(x) = L

This reads: "The limit of f(x) as x approaches a equals L"

## Types of Limits:

### 1. Direct Substitution:
If f(x) is continuous at x = a:
lim(x→a) f(x) = f(a)

### 2. One-Sided Limits:
- Left-hand limit: lim(x→a⁻) f(x)
- Right-hand limit: lim(x→a⁺) f(x)

### 3. Limits at Infinity:
lim(x→∞) f(x)

## Example:
lim(x→2) (x² + 1) = 2² + 1 = 5`,
            questions: [
              {
                id: 'lim-q1',
                question: 'What is lim(x→3) (x + 2)?',
                options: ['5', '3', '2', '6'],
                correctAnswer: 0,
                explanation: 'Direct substitution: 3 + 2 = 5',
                difficulty: 'easy'
              },
              {
                id: 'lim-q2',
                question: 'What is lim(x→0) (x² + 3x)?',
                options: ['0', '3', 'undefined', '∞'],
                correctAnswer: 0,
                explanation: 'Substitute x = 0: 0² + 3(0) = 0',
                difficulty: 'medium'
              },
              {
                id: 'lim-q3',
                question: 'What is lim(x→2) (x² - 4)/(x - 2)?',
                options: ['4', '0', '2', 'undefined'],
                correctAnswer: 0,
                explanation: 'Factor: (x-2)(x+2)/(x-2) = x+2. Then substitute: 2+2 = 4',
                difficulty: 'hard'
              },
              {
                id: 'lim-q4',
                question: 'What is lim(x→∞) (3x² + 2)/(x² - 1)?',
                options: ['3', '0', '∞', '2'],
                correctAnswer: 0,
                explanation: 'Divide by highest power: lim(x→∞) (3 + 2/x²)/(1 - 1/x²) = 3/1 = 3',
                difficulty: 'advanced'
              }
            ]
          },
          {
            id: 'derivatives',
            title: 'Introduction to Derivatives',
            description: 'Understanding rates of change',
            content: `# Introduction to Derivatives

The derivative measures the rate of change of a function.

## Definition:
f'(x) = lim(h→0) [f(x+h) - f(x)] / h

## Notation:
- f'(x) - "f prime of x"
- dy/dx - Leibniz notation
- df/dx

## Power Rule:
If f(x) = xⁿ, then f'(x) = nxⁿ⁻¹

## Examples:
- f(x) = x³ → f'(x) = 3x²
- f(x) = x² → f'(x) = 2x
- f(x) = x → f'(x) = 1
- f(x) = c (constant) → f'(x) = 0

## Interpretation:
- Slope of tangent line
- Instantaneous rate of change
- Velocity (if position function)`,
            questions: [
              {
                id: 'deriv-q1',
                question: 'What is the derivative of f(x) = x²?',
                options: ['2x', 'x', '2', 'x²'],
                correctAnswer: 0,
                explanation: 'Using power rule: d/dx(x²) = 2x²⁻¹ = 2x',
                difficulty: 'easy'
              },
              {
                id: 'deriv-q2',
                question: 'What is the derivative of f(x) = 5?',
                options: ['0', '5', '5x', '1'],
                correctAnswer: 0,
                explanation: 'The derivative of any constant is 0',
                difficulty: 'easy'
              },
              {
                id: 'deriv-q3',
                question: 'What is the derivative of f(x) = x⁴?',
                options: ['4x³', 'x³', '4x⁴', 'x⁵'],
                correctAnswer: 0,
                explanation: 'Using power rule: d/dx(x⁴) = 4x³',
                difficulty: 'medium'
              },
              {
                id: 'deriv-q4',
                question: 'If f(x) = 3x² + 2x, what is f\'(x)?',
                options: ['6x + 2', '3x + 2', '6x', '3x²'],
                correctAnswer: 0,
                explanation: 'Derivative of 3x² is 6x, derivative of 2x is 2. Sum: 6x + 2',
                difficulty: 'hard'
              }
            ]
          }
        ]
      },
      {
        id: 'vectors',
        name: 'Vectors',
        icon: '➡️',
        description: 'Vector operations and applications',
        topics: [
          {
            id: 'vector-basics',
            title: 'Introduction to Vectors',
            description: 'Vector notation and basic operations',
            content: `# Introduction to Vectors

A vector is a quantity with both magnitude and direction.

## Notation:
- Component form: v = (x, y) or v = ⟨x, y⟩
- Column form: v = [x]
                    [y]
- Unit vector form: v = xi + yj

## Magnitude:
|v| = √(x² + y²)

## Vector Addition:
(a, b) + (c, d) = (a+c, b+d)

## Scalar Multiplication:
k(a, b) = (ka, kb)

## Example:
If v = (3, 4):
- Magnitude: |v| = √(3² + 4²) = √25 = 5
- 2v = (6, 8)`,
            questions: [
              {
                id: 'vec-q1',
                question: 'What is the magnitude of v = (3, 4)?',
                options: ['5', '7', '12', '25'],
                correctAnswer: 0,
                explanation: '|v| = √(3² + 4²) = √(9 + 16) = √25 = 5',
                difficulty: 'easy'
              },
              {
                id: 'vec-q2',
                question: 'If v = (2, 3), what is 3v?',
                options: ['(6, 9)', '(5, 6)', '(2, 9)', '(6, 3)'],
                correctAnswer: 0,
                explanation: 'Multiply each component by 3: 3(2, 3) = (6, 9)',
                difficulty: 'medium'
              },
              {
                id: 'vec-q3',
                question: 'What is (1, 2) + (3, 4)?',
                options: ['(4, 6)', '(3, 8)', '(4, 8)', '(2, 6)'],
                correctAnswer: 0,
                explanation: 'Add corresponding components: (1+3, 2+4) = (4, 6)',
                difficulty: 'medium'
              },
              {
                id: 'vec-q4',
                question: 'What is the magnitude of v = (5, 12)?',
                options: ['13', '17', '7', '60'],
                correctAnswer: 0,
                explanation: '|v| = √(5² + 12²) = √(25 + 144) = √169 = 13',
                difficulty: 'hard'
              }
            ]
          }
        ]
      }
    ]
  }
];

export function getGradeData(grade: number): Grade | undefined {
  return curriculumData.find(g => g.grade === grade);
}

export function getSubjectData(grade: number, subjectId: string): Subject | undefined {
  const gradeData = getGradeData(grade);
  return gradeData?.subjects.find(s => s.id === subjectId);
}

export function getTopicData(grade: number, subjectId: string, topicId: string): Topic | undefined {
  const subject = getSubjectData(grade, subjectId);
  return subject?.topics.find(t => t.id === topicId);
}

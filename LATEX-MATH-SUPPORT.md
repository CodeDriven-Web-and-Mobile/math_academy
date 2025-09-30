# 📐 LaTeX Math Support - Complete Guide

## 🎯 Overview

Your Ontario Math Academy now supports **LaTeX mathematical notation** for beautiful, professional formula rendering! All mathematical expressions are rendered using KaTeX for fast, high-quality display.

---

## ✨ What's Been Added

### **1. KaTeX Integration**
- Fast math typesetting library
- Beautiful formula rendering
- Support for complex mathematical notation
- Works in all browsers

### **2. MathContent Component**
- Automatically renders LaTeX in content
- Supports inline and display math
- Processes markdown formatting
- Handles all mathematical symbols

### **3. AI Prompts Updated**
- AI now generates content with LaTeX
- All formulas properly formatted
- Consistent mathematical notation
- Professional appearance

---

## 📝 LaTeX Syntax

### **Inline Math** (within text)

**Syntax:**
```
\( formula \)  or  $ formula $
```

**Examples:**
```
The formula \( E = mc^2 \) shows energy-mass equivalence.
Calculate \( \frac{1}{2} + \frac{1}{3} \) to get the answer.
The quadratic formula is $ x = \frac{-b \pm \sqrt{b^2-4ac}}{2a} $.
```

**Renders as:**
- The formula E = mc² shows energy-mass equivalence.
- Calculate ½ + ⅓ to get the answer.
- The quadratic formula is x = (-b ± √(b²-4ac))/2a.

### **Display Math** (centered, on own line)

**Syntax:**
```
\[ formula \]  or  $$ formula $$
```

**Examples:**
```
\[ E = mc^2 \]

$$ \int_0^1 x^2 dx = \frac{1}{3} $$
```

**Renders as:**
- Centered, larger formula on its own line

---

## 🔢 Common Math Symbols

### **Fractions**
```
\( \frac{numerator}{denominator} \)
\( \frac{a}{b} \)
\( \frac{1}{2} + \frac{1}{3} = \frac{5}{6} \)
```

### **Exponents & Subscripts**
```
\( x^2 \)          → x²
\( x^{10} \)       → x¹⁰
\( x_1 \)          → x₁
\( x_{max} \)      → xₘₐₓ
\( x^2_1 \)        → x₁²
```

### **Square Roots**
```
\( \sqrt{x} \)           → √x
\( \sqrt{25} = 5 \)      → √25 = 5
\( \sqrt[3]{8} \)        → ∛8
```

### **Greek Letters**
```
\( \alpha, \beta, \gamma \)     → α, β, γ
\( \Delta, \Sigma, \Pi \)       → Δ, Σ, Π
\( \theta, \phi, \omega \)      → θ, φ, ω
```

### **Operators**
```
\( \times \)       → ×
\( \div \)         → ÷
\( \pm \)          → ±
\( \neq \)         → ≠
\( \leq \)         → ≤
\( \geq \)         → ≥
\( \approx \)      → ≈
```

### **Sums & Products**
```
\( \sum_{i=1}^{n} i \)           → Σᵢ₌₁ⁿ i
\( \prod_{i=1}^{n} i \)          → Πᵢ₌₁ⁿ i
```

### **Integrals**
```
\( \int_a^b f(x) dx \)           → ∫ₐᵇ f(x) dx
\( \int_0^1 x^2 dx \)            → ∫₀¹ x² dx
```

### **Limits**
```
\( \lim_{x \to 0} f(x) \)        → lim_{x→0} f(x)
\( \lim_{n \to \infty} \frac{1}{n} \)
```

---

## 📚 Examples for Different Topics

### **Fractions**
```markdown
## Important Formulas:
1. **Addition**: \( \frac{a}{c} + \frac{b}{c} = \frac{a + b}{c} \)
2. **Multiplication**: \( \frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \)
3. **Division**: \( \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c} \)

### Example:
**Problem**: Calculate \( \frac{1}{4} + \frac{2}{4} \)
**Solution**: 
Since the denominators are the same, add numerators:
\( \frac{1+2}{4} = \frac{3}{4} \)
**Answer**: \( \frac{3}{4} \)
```

### **Algebra**
```markdown
## Quadratic Formula:
\[ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \]

### Example:
Solve \( x^2 + 5x + 6 = 0 \)
Using \( a=1, b=5, c=6 \):
\[ x = \frac{-5 \pm \sqrt{25-24}}{2} = \frac{-5 \pm 1}{2} \]
Solutions: \( x = -2 \) or \( x = -3 \)
```

### **Geometry**
```markdown
## Area Formulas:
- **Circle**: \( A = \pi r^2 \)
- **Triangle**: \( A = \frac{1}{2}bh \)
- **Rectangle**: \( A = lw \)

### Pythagorean Theorem:
\[ a^2 + b^2 = c^2 \]
```

### **Calculus**
```markdown
## Derivative Rules:
1. **Power Rule**: \( \frac{d}{dx}(x^n) = nx^{n-1} \)
2. **Product Rule**: \( \frac{d}{dx}(uv) = u'v + uv' \)
3. **Chain Rule**: \( \frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x) \)

### Example:
Find \( \frac{d}{dx}(x^3) \)
Using power rule: \( 3x^2 \)
```

---

## 🎨 Formatting Tips

### **Combine with Markdown**
```markdown
## Key Formula

The area of a circle with radius \( r \) is:
\[ A = \pi r^2 \]

Where:
- \( A \) = area
- \( r \) = radius
- \( \pi \approx 3.14159 \)
```

### **Multiple Lines**
```markdown
### Step-by-Step:
1. Start with \( x^2 + 4x + 4 = 0 \)
2. Factor: \( (x+2)(x+2) = 0 \)
3. Solution: \( x = -2 \)
```

### **Aligned Equations**
```markdown
\[
\begin{aligned}
2x + 3 &= 7 \\
2x &= 4 \\
x &= 2
\end{aligned}
\]
```

---

## 🤖 AI Content Generation

### **AI Now Generates LaTeX**

When you use the AI Content Generator, it automatically:
- Uses LaTeX for all formulas
- Formats fractions properly
- Includes mathematical symbols
- Creates professional-looking content

### **Example AI Output**
```markdown
# Operations with Fractions

## Important Formulas:
1. **Addition**: \( \frac{a}{c} + \frac{b}{c} = \frac{a+b}{c} \)
2. **Subtraction**: \( \frac{a}{c} - \frac{b}{c} = \frac{a-b}{c} \)

### Example 1:
**Problem**: \( \frac{1}{4} + \frac{2}{4} \)
**Solution**: Add numerators: \( 1 + 2 = 3 \)
**Answer**: \( \frac{3}{4} \)
```

---

## 📊 How It Works

### **Content Flow**
```
1. AI generates content with LaTeX
   ↓
2. Content saved to database
   ↓
3. MathContent component renders it
   ↓
4. KaTeX processes LaTeX
   ↓
5. Beautiful formulas displayed!
```

### **Rendering Process**
```typescript
// Content in database:
"The formula \\( E = mc^2 \\) shows..."

// MathContent component:
- Detects \\( ... \\) patterns
- Passes to KaTeX
- Renders as beautiful math

// Student sees:
"The formula E = mc² shows..."
```

---

## 🎓 For Teachers

### **Creating Content with LaTeX**

**Option 1: AI Generator (Recommended)**
```
1. Go to AI Content Generator
2. Select topic
3. Generate content
4. AI automatically uses LaTeX
5. Content saved with proper formatting
```

**Option 2: Manual Entry**
```
1. Write content in markdown
2. Use \( ... \) for inline math
3. Use \[ ... \] for display math
4. Save to database
5. Renders automatically
```

### **Testing LaTeX**

Before saving, test your LaTeX:
- Use online LaTeX editor
- Check syntax is correct
- Verify formulas render properly

---

## 🐛 Troubleshooting

### **Formula Not Rendering**

**Problem**: LaTeX shows as text
```
\( x^2 \)  ← Shows as text
```

**Solution**: Check syntax
```
Correct: \( x^2 \)
Wrong: \(x^2\)  ← Missing space
Wrong: ( x^2 )  ← Missing backslash
```

### **Special Characters**

**Problem**: Need to show backslash or dollar sign

**Solution**: Escape with backslash
```
Show \$: Use \\$
Show \\: Use \\\\
```

### **Complex Formulas**

**Problem**: Formula too complex

**Solution**: Break into parts
```
Instead of: \( \frac{\frac{a}{b}}{\frac{c}{d}} \)
Use: \( \frac{a/b}{c/d} \) or simplify
```

---

## ✅ Best Practices

### **1. Use LaTeX for All Math**
```
✅ Good: The formula \( x^2 + 1 \) is...
❌ Bad: The formula x^2 + 1 is...
```

### **2. Inline vs Display**
```
✅ Inline: Use \( ... \) for text flow
✅ Display: Use \[ ... \] for emphasis
```

### **3. Keep It Simple**
```
✅ Good: \( \frac{1}{2} \)
❌ Overly complex: \( \frac{\frac{1}{2}}{\frac{3}{4}} \)
```

### **4. Test Before Saving**
```
1. Write LaTeX
2. Preview if possible
3. Verify rendering
4. Then save
```

---

## 📚 Resources

### **LaTeX References**
- KaTeX Documentation: https://katex.org/docs/supported.html
- LaTeX Math Symbols: https://www.cmor-faculty.rice.edu/~heinken/latex/symbols.pdf
- Online LaTeX Editor: https://www.codecogs.com/latex/eqneditor.php

### **Common Formulas**
See examples above for:
- Fractions
- Exponents
- Square roots
- Greek letters
- Operators

---

## 🎉 Summary

### **What You Get**
✅ **Beautiful math rendering** with KaTeX
✅ **LaTeX support** in all content
✅ **AI generates LaTeX** automatically
✅ **Professional appearance**
✅ **Fast rendering**
✅ **Works everywhere**

### **How to Use**
1. **AI Content**: Generates LaTeX automatically
2. **Manual Content**: Use `\( ... \)` for math
3. **Display**: Renders beautifully on topic pages
4. **Students**: See professional formulas

### **LaTeX Basics**
- **Inline**: `\( formula \)`
- **Display**: `\[ formula \]`
- **Fractions**: `\frac{a}{b}`
- **Powers**: `x^2`
- **Roots**: `\sqrt{x}`

---

**Your math content now looks professional with LaTeX! 📐✨**

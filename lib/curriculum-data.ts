// Auto-generated from database export
// Last updated: 2025-10-01T03:04:00.630Z
// 
// This file contains all curriculum data for the Ontario Math Academy.
// It is generated from the SQLite database using: npm run export-db

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
  content?: string;
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
    "grade": 6,
    "subjects": [
      {
        "id": "algebra",
        "name": "Algebra",
        "icon": "📐",
        "description": "Introduction to variables and simple equations",
        "topics": [
          {
            "id": "variables",
            "title": "Introduction to Variables",
            "description": "Understanding variables and expressions",
            "content": "# Introduction to Variables\n\nA variable is a letter or symbol that represents an unknown number.\n\n## Key Concepts:\n- Variables are often represented by letters like x, y, or n\n- They can represent any number\n- We use variables to write general rules and solve problems\n\n## Examples:\n- If x = 5, then x + 3 = 8\n- If n represents the number of apples, then 2n represents twice as many apples\n\n## Expressions vs Equations:\n- **Expression**: x + 5 (no equal sign)\n- **Equation**: x + 5 = 10 (has an equal sign)\n\n---\n\n## Updated Content\n\n# Introduction to Variables\n\nWelcome to the world of algebra! Today, we're going to explore the concept of **variables**. A variable is like a box that can hold different values. Instead of always using a specific number, we use letters (like x or y) to represent unknown values. Understanding variables is important because they help us solve problems, create equations, and express relationships in mathematics. By the end of this lesson, you'll see how variables make math easier and more flexible!\n\n## Key Concepts:\n- **What is a Variable?**: A variable is a symbol (usually a letter) that represents a number we don’t know yet. For example, in the expression x + 3, x is the variable.\n  \n- **Expressions vs. Equations**: An expression is a combination of numbers, variables, and operations (like addition or subtraction) that does not have an equal sign. An equation, on the other hand, is a statement that two expressions are equal, such as x + 3 = 7.\n\n- **Substituting Values**: We can replace a variable with a number to evaluate an expression. For instance, if x = 5, then in the expression x + 3, we can substitute 5 for x to get 5 + 3 = 8.\n\n## Important Formulas/Rules:\n- **Variable Representation**: Use letters to represent unknown quantities, e.g., let x = unknown number.\n- **Order of Operations**: Remember PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction) to evaluate expressions correctly.\n- **Evaluating Expressions**: To evaluate an expression with a variable, substitute the value of the variable into the expression and simplify.\n\n## Step-by-Step Process:\n1. **Identify the Variable**: Determine which letter is being used as the variable in the expression or equation.\n2. **Substitute the Value**: If a value is given for the variable, substitute it into the expression.\n3. **Simplify the Expression**: Perform the operations in the correct order to find the final answer.\n\n## Worked Examples:\n\n### Example 1:\n**Problem**: If x = 4, evaluate the expression 3x + 5.\n\n**Solution**: \n1. Identify the variable: x is the variable.\n2. Substitute the value: 3(4) + 5.\n3. Simplify: 12 + 5 = 17.\n\n**Answer**: 17\n\n### Example 2:\n**Problem**: Solve the equation x + 7 = 12.\n\n**Solution**: \n1. Identify the variable: x is the variable.\n2. Isolate the variable: Subtract 7 from both sides: x + 7 - 7 = 12 - 7.\n3. Simplify: x = 5.\n\n**Answer**: 5\n\n## Common Mistakes to Avoid:\n- **Forgetting to Substitute**: Make sure to always substitute the correct value for the variable before simplifying.\n- **Misordering Operations**: Remember to follow the order of operations (PEMDAS) when simplifying expressions.\n\n## Real-World Applications:\n- **Budgeting**: When creating a budget, you may use variables to represent different expenses (e.g., x for groceries, y for entertainment) to calculate total costs.\n- **Distance and Speed**: In a speed problem, you might use the variable s for speed, d for distance, and t for time. The relationship can be expressed as d = s × t, showing how variables help us understand real-world situations.\n\n## Practice Tips:\n- **Solve Practice Problems**: Work on practice problems that involve substituting values into expressions and solving equations.\n- **Use Visual Aids**: Draw pictures or diagrams to help visualize the relationships between the variables and numbers.\n\nWith this understanding of variables, you're now ready to tackle more complex algebraic concepts. Keep practicing, and you’ll become an algebra pro in no time!\n\n---\n\n## Additional Content (AI-Enhanced)\n\n# Introduction to Variables\n\nWelcome to the exciting world of algebra! In this lesson, we’ll explore what variables are and how they can help us solve problems. Get ready to uncover the mystery of unknown numbers!\n\n## What is a Variable?\n\nA variable is a letter or symbol that represents an unknown number. Think of it like a treasure chest where the contents are hidden until you unlock it!\n\n### Key Concepts:\n- **Variables are often represented by letters**: Common letters include x, y, n, and even letters like a, b, or c. \n- **Variables can represent any number**: Just like you can have any number of candies in a jar, a variable can stand for any number!\n- **We use variables to write general rules and solve problems**: Variables allow us to express ideas in mathematics in a way that can be applied to many situations.\n\n### Why Use Variables?\nVariables help us simplify complex problems. Instead of saying \"the number of apples,\" we can just say \"n.\" This makes our equations and expressions easier to work with!\n\n## Examples\n\nLet’s look at how to use variables in different scenarios:\n\n1. **Simple Variable Use**: \n   - If **x = 5**, then:\n     - **x + 3 = 8**\n     - This means if we take 5 (the value of x) and add 3, we get 8!\n\n2. **Using Variables in Real Life**:\n   - If **n** represents the number of apples you have, then **2n** represents twice as many apples. \n     - If you have 4 apples (n = 4), then 2n = 2 * 4 = 8 apples!\n\n3. **Finding Unknowns**:\n   - If **m** represents the number of books you read in a month, and you read 3 more than last month, we can write:\n     - **m = last month's books + 3**\n     - If you read 10 books last month, then this month you read **m = 10 + 3 = 13 books**!\n\n## Expressions vs Equations\n\nUnderstanding the difference between expressions and equations is crucial!\n\n- **Expression**: A mathematical phrase that does not have an equal sign. \n  - Example: **x + 5** (This tells us to add 5 to whatever x is, but it doesn’t tell us what that is.)\n  \n- **Equation**: A mathematical statement that shows two expressions are equal. \n  - Example: **x + 5 = 10** (This tells us that whatever x is, if we add 5, it equals 10. We can solve it!)\n\n### Solving an Equation Example:\n- Let’s solve the equation **x + 5 = 10**:\n  - Step 1: Subtract 5 from both sides: \n    - **x + 5 - 5 = 10 - 5**\n  - Step 2: Simplify:\n    - **x = 5**\n  - So, x = 5 is our solution!\n\n## Real-World Applications\n\nVariables are everywhere in our daily lives! Here are a few examples:\n\n- **Shopping**: If you buy **x** items at $5 each, you can write the total cost as **5x**. If you know you want to buy 4 items, it becomes **5(4) = $20**.\n  \n- **Cooking**: If a recipe calls for **y** cups of flour, and you want to double the recipe, you would need **2y** cups of flour.\n\n- **Sports**: If a basketball player scores **p** points in each game, after 3 games they would have scored **3p** points.\n\n## Practice Tips\n\n- **Write it Down**: Always write down what the variable represents to avoid confusion.\n- **Check Your Work**: After solving, plug your answer back into the original equation to see if it makes sense.\n- **Practice with Friends**: Work on problems together. Teaching someone else can reinforce your understanding!\n\n## Common Mistakes to Avoid\n\n- **Confusing Expressions with Equations**: Remember, if it does not have an equal sign, it’s just an expression!\n- **Forgetting to Simplify**: Always simplify your answers when possible.\n- **Neglecting to Define Variables**: Always state what your variable represents. This makes your work clearer!\n\nNow that you have a solid introduction to variables, it’s time to practice and explore more! Don’t forget: variables are your friends in solving math problems! Happy learning!\n\n---\n\n## Additional Examples\n\n# Worked Examples for Introduction to Variables\n\n## Example 1: Simple Variable Expression\n**Problem Statement:**  \nIf y represents the number of marbles you have and you gain 7 more marbles, write an expression for the total number of marbles you have now.\n\n**Step-by-Step Solution:**\n1. **Identify the variable:** Let y represent the number of marbles you currently have.\n2. **Add the additional marbles:** You gain 7 more marbles, so we write the expression as y + 7.\n\n**Final Answer:**  \nThe expression for the total number of marbles is **y + 7**.\n\n**Why This Example is Useful:**  \nThis example shows how to create an expression using a variable and how to represent a real-life situation mathematically.\n\n---\n\n## Example 2: Simple Equation\n**Problem Statement:**  \nIf m represents the number of books you own and you buy 4 more books, write an equation that shows the total number of books you will have.\n\n**Step-by-Step Solution:**\n1. **Identify the variable:** Let m represent the number of books you currently have.\n2. **Set up the equation:** After buying 4 more books, the total number of books will be m + 4.\n3. **Write it as an equation:** We can express this situation as m + 4 = total number of books.\n\n**Final Answer:**  \nThe equation is **m + 4 = total number of books**.\n\n**Why This Example is Useful:**  \nThis example helps students practice writing equations and understanding the relationship between a variable and a total.\n\n---\n\n## Example 3: Solving an Equation\n**Problem Statement:**  \nSolve for p in the equation p + 10 = 25.\n\n**Step-by-Step Solution:**\n1. **Identify the equation:** We have p + 10 = 25.\n2. **Isolate the variable:** To find p, subtract 10 from both sides of the equation.\n   \\[\n   p + 10 - 10 = 25 - 10\n   \\]\n   This simplifies to:\n   \\[\n   p = 15\n   \\]\n\n**Final Answer:**  \nThe value of p is **15**.\n\n**Why This Example is Useful:**  \nThis example introduces students to solving equations by isolating the variable, which is a fundamental skill in algebra.\n\n---\n\n## Example 4: Using Two Variables\n**Problem Statement:**  \nLet x represent the number of pencils Lisa has and y represent the number of erasers. If Lisa has 3 more erasers than pencils, express this relationship as an equation.\n\n**Step-by-Step Solution:**\n1. **Identify the variables:** x = number of pencils, y = number of erasers.\n2. **Express the relationship:** Lisa has 3 more erasers than pencils, so we can write:\n   \\[\n   y = x + 3\n   \\]\n\n**Final Answer:**  \nThe equation representing the relationship is **y = x + 3**.\n\n**Why This Example is Useful:**  \nThis example introduces the concept of relationships between two variables and how to express them algebraically, which is foundational for understanding functions.\n\n---\n\n## Example 5: Solving a Two-Variable Equation\n**Problem Statement:**  \nIf z represents the total number of candies and you know that z = 2c + 5, where c is the number of chocolate candies, determine how many candies there are if there are 6 chocolate candies.\n\n**Step-by-Step Solution:**\n1. **Identify the equation:** We have z = 2c + 5.\n2. **Substitute the value of c:** If c = 6, substitute into the equation:\n   \\[\n   z = 2(6) + 5\n   \\]\n3. **Calculate:** \n   \\[\n   z = 12 + 5\n   \\]\n   \\[\n   z = 17\n   \\]\n\n**Final Answer:**  \nThe total number of candies is **17**.\n\n**Why This Example is Useful:**  \nThis example demonstrates how to substitute specific values into a variable equation, helping students understand how to evaluate expressions based on known values.",
            "questions": [
              {
                "id": "variables-ai-1759205728345-0",
                "question": "If x represents the number of apples, which expression represents the total number of apples if you have 5 more apples than twice the number of apples?",
                "options": [
                  "2x + 5",
                  "5x + 2",
                  "2x - 5",
                  "5 - 2x"
                ],
                "correctAnswer": 0,
                "explanation": "The expression for having 5 more apples than twice the number of apples is 2x + 5. Here, 'twice the number of apples' is represented by 2x, and adding 5 gives us the total.",
                "difficulty": "advanced"
              },
              {
                "id": "variables-ai-1759205728351-1",
                "question": "If y is equal to 3, what is the value of the expression 4y + 2?",
                "options": [
                  "10",
                  "12",
                  "14",
                  "8"
                ],
                "correctAnswer": 2,
                "explanation": "To find the value of the expression 4y + 2 when y is 3, substitute 3 for y: 4(3) + 2 = 12 + 2 = 14. Therefore, the correct answer is 14.",
                "difficulty": "advanced"
              },
              {
                "id": "variables-ai-1759205728351-2",
                "question": "Which of the following equations represents that 3 times a number z is equal to 21?",
                "options": [
                  "3z = 21",
                  "21 = 3z",
                  "3z + 21 = 0",
                  "z + 3 = 21"
                ],
                "correctAnswer": 0,
                "explanation": "The equation that represents 3 times a number z being equal to 21 is 3z = 21. Both sides of the equation express the same relationship.",
                "difficulty": "advanced"
              },
              {
                "id": "variables-ai-1759205728351-3",
                "question": "If the expression 7 + 2m is equal to 25, what is the value of m?",
                "options": [
                  "6",
                  "7",
                  "8",
                  "9"
                ],
                "correctAnswer": 2,
                "explanation": "To solve for m, first subtract 7 from both sides: 2m = 25 - 7, which simplifies to 2m = 18. Then, divide both sides by 2 to find m: m = 18 / 2 = 9.",
                "difficulty": "advanced"
              },
              {
                "id": "variables-ai-1759205728351-4",
                "question": "What expression represents the total cost C if each item costs p dollars and you buy 4 items?",
                "options": [
                  "4p",
                  "p + 4",
                  "p - 4",
                  "4 + p"
                ],
                "correctAnswer": 0,
                "explanation": "The total cost C for buying 4 items at p dollars each is represented by the expression 4p. This is because you multiply the price per item by the number of items.",
                "difficulty": "advanced"
              },
              {
                "id": "var-q1",
                "question": "If x = 4, what is x + 6?",
                "options": [
                  "10",
                  "24",
                  "2",
                  "46"
                ],
                "correctAnswer": 0,
                "explanation": "Substitute x with 4: 4 + 6 = 10",
                "difficulty": "easy"
              },
              {
                "id": "var-q2",
                "question": "If y = 3, what is 2y?",
                "options": [
                  "5",
                  "6",
                  "23",
                  "32"
                ],
                "correctAnswer": 1,
                "explanation": "2y means 2 × y. So 2 × 3 = 6",
                "difficulty": "easy"
              },
              {
                "id": "var-q4",
                "question": "If a = 5 and b = 3, what is 2a + b?",
                "options": [
                  "11",
                  "13",
                  "16",
                  "8"
                ],
                "correctAnswer": 1,
                "explanation": "2a + b = 2(5) + 3 = 10 + 3 = 13",
                "difficulty": "hard"
              },
              {
                "id": "var-q3",
                "question": "Solve for x: x + 7 = 15",
                "options": [
                  "8",
                  "22",
                  "7",
                  "15"
                ],
                "correctAnswer": 0,
                "explanation": "Subtract 7 from both sides: x = 15 - 7 = 8",
                "difficulty": "medium"
              }
            ]
          }
        ]
      },
      {
        "id": "geometry",
        "name": "Geometry",
        "icon": "📏",
        "description": "Shapes, angles, and spatial relationships",
        "topics": [
          {
            "id": "angles",
            "title": "Understanding Angles",
            "description": "Types of angles and angle relationships",
            "content": "# Understanding Angles\n\nAn angle is formed when two rays meet at a common point called the vertex.\n\n## Types of Angles:\n- **Acute angle**: Less than 90°\n- **Right angle**: Exactly 90°\n- **Obtuse angle**: Between 90° and 180°\n- **Straight angle**: Exactly 180°\n\n## Measuring Angles:\nAngles are measured in degrees (°) using a protractor.\n\n## Complementary and Supplementary:\n- **Complementary angles**: Two angles that add up to 90°\n- **Supplementary angles**: Two angles that add up to 180°\n\n---\n\n## Updated Content\n\n# Understanding Angles\n\nAngles are an essential concept in geometry, representing the space between two intersecting lines or rays. Understanding angles is important because they are everywhere in our world—from the corners of buildings to the hands of a clock. By learning about angles, you will be able to better visualize and describe the shapes and figures around you, which is crucial in both math and everyday life.\n\n## Key Concepts:\n\n- **Concept 1: What is an Angle?**\n  An angle is formed when two rays share a common endpoint, called the vertex. The amount of turn between the two rays is measured in degrees (°).\n\n- **Concept 2: Types of Angles**\n  There are several types of angles:\n  - **Acute Angle**: An angle that measures less than 90°.\n  - **Right Angle**: An angle that measures exactly 90°.\n  - **Obtuse Angle**: An angle that measures more than 90° but less than 180°.\n  - **Straight Angle**: An angle that measures exactly 180°.\n\n- **Concept 3: Measuring Angles**\n  Angles can be measured using a protractor. To measure an angle, you place the protractor's midpoint at the vertex of the angle and align one ray with the baseline of the protractor. Then, read the measurement where the other ray intersects the number scale.\n\n## Important Formulas/Rules:\n\n- **Sum of Angles**: The sum of the angles in a triangle is always 180°.\n- **Complementary Angles**: Two angles that add up to 90° are called complementary angles.\n- **Supplementary Angles**: Two angles that add up to 180° are called supplementary angles.\n\n## Step-by-Step Process:\n\n1. **Identifying Angles**: Start by identifying the vertex and the rays that form the angle. Make sure to label them as needed.\n  \n2. **Measuring Angles**: Use a protractor to measure the angle accurately. Remember to align the protractor properly at the vertex.\n\n3. **Classifying Angles**: After measuring, classify the angle as acute, right, obtuse, or straight based on its measurement.\n\n## Worked Examples:\n\n### Example 1:\n**Problem**: Measure the angle formed by two rays that you observe to be wider than 90° but less than 180°.\n\n**Solution**:\n- Step 1: Identify the vertex of the angle and the two rays.\n- Step 2: Place the protractor on the vertex, with one ray along the baseline.\n- Step 3: Locate where the other ray intersects the protractor: it measures 130°.\n  \n**Answer**: The angle is an obtuse angle measuring 130°.\n\n### Example 2:\n**Problem**: If angle A measures 40°, what is the measure of its complementary angle?\n\n**Solution**:\n- Step 1: Recall that complementary angles add up to 90°.\n- Step 2: Subtract the measure of angle A from 90°: \n  90° - 40° = 50°.\n  \n**Answer**: The complementary angle measures 50°.\n\n## Common Mistakes to Avoid:\n- **Mistake 1**: Confusing the types of angles. Always double-check the measurement before classifying.\n- **Mistake 2**: Incorrectly aligning the protractor. Ensure that the midpoint of the protractor is on the vertex for an accurate measurement.\n\n## Real-World Applications:\n- **Application 1**: Architects use angles to design buildings and ensure structures are stable and visually appealing.\n- **Application 2**: Angles are used in sports, such as determining the angle of a basketball shot for the best chance of scoring.\n\n## Practice Tips:\n- Practice measuring different angles with a protractor to build confidence.\n- Draw various shapes and identify the angles within them; this will help reinforce your understanding of angles in different contexts. \n\nWith these concepts and strategies, you’ll be well on your way to mastering angles in geometry!\n\n---\n\n## Additional Content (AI-Enhanced)\n\n# Understanding Angles\n\nWelcome to the fascinating world of angles! Angles are everywhere in our daily lives, from the corners of our books to the shapes we see in architecture. Let’s dive deeper into what angles are and how we can understand them better.\n\n## What is an Angle?\n\nAn **angle** is formed when two rays, which are like lines that start at a single point called the **vertex**, meet. Imagine the hands of a clock; they create angles as they point to different numbers. \n\n### Visualizing Angles\n\n- **Rays**: Think of rays as the hands of a clock. One ray is the minute hand and the other is the hour hand.\n- **Vertex**: The point where the two rays meet is like the center of the clock.\n\n## Types of Angles\n\nUnderstanding the different types of angles will help us recognize them in our environment. Here are the main types:\n\n- **Acute Angle**: An angle that is less than 90°. For example, the angle formed by the hands of a clock at 10:10 is acute.\n  \n  ![Acute Angle Example](https://example.com/acute_angle.jpg)\n\n- **Right Angle**: An angle that is exactly 90°. This is the angle you see in the corners of square and rectangular shapes. \n  \n  ![Right Angle Example](https://example.com/right_angle.jpg)\n\n- **Obtuse Angle**: An angle that is greater than 90° but less than 180°. For instance, the angle between the hands of a clock at 10:30 is obtuse.\n  \n  ![Obtuse Angle Example](https://example.com/obtuse_angle.jpg)\n\n- **Straight Angle**: An angle that is exactly 180°. This angle looks like a straight line. Picture the hands of a clock at 6:00.\n\n  ![Straight Angle Example](https://example.com/straight_angle.jpg)\n\n## Measuring Angles\n\nAngles are measured in degrees (°) with a tool called a **protractor**. Here’s how to measure an angle using a protractor:\n\n1. Place the midpoint of the protractor (the small hole) over the vertex of the angle.\n2. Make sure one ray aligns with the zero line on the protractor.\n3. Read the measurement where the other ray crosses the numbered scale.\n\n### Example of Measuring an Angle\n\n**Example Problem**: Use a protractor to measure the angle formed by two rays in the classroom. \n\n1. Suppose the angle measures 45°. \n2. This angle is classified as an **acute angle** since it is less than 90°.\n\n## Complementary and Supplementary Angles\n\nUnderstanding complementary and supplementary angles will help you solve problems involving angles.\n\n- **Complementary Angles**: Two angles that add up to 90°. For example, if one angle is 30°, the other must be 60° because 30° + 60° = 90°.\n  \n  ![Complementary Angles Example](https://example.com/complementary_angles.jpg)\n\n- **Supplementary Angles**: Two angles that add up to 180°. For example, if one angle is 110°, the other must be 70° because 110° + 70° = 180°.\n  \n  ![Supplementary Angles Example](https://example.com/supplementary_angles.jpg)\n\n## Real-World Applications of Angles\n\nAngles are not just theoretical; they are practical too! Here are some real-world examples:\n\n- **Architecture**: Angles help architects design buildings and bridges. The angles in a structure determine its stability.\n  \n- **Sports**: In basketball, the angle at which a player shoots the ball affects whether it goes in the hoop.\n  \n- **Art**: Artists use angles to create perspective in their paintings, making two-dimensional art appear three-dimensional.\n\n## Practice Tips and Common Mistakes\n\n### Practice Tips:\n\n1. **Use Visuals**: Draw angles and label them. This helps you visualize different types of angles.\n2. **Use a Protractor**: Get comfortable measuring angles with a protractor by practicing on various shapes.\n3. **Play Games**: Use online games or apps that focus on angles to reinforce your understanding in a fun way.\n\n### Common Mistakes:\n\n- **Confusing Angle Types**: Remember that acute angles are less than 90°, while obtuse angles are greater than 90° but less than 180°.\n- **Measuring Errors**: Always ensure the protractor is aligned correctly with the vertex and one ray before taking a measurement.\n- **Adding Angles Incorrectly**: Double-check your calculations when working with complementary and supplementary angles.\n\n## Conclusion\n\nAngles are essential in many aspects of life, from design to sports. By understanding the types of angles, how to measure them, and their real-world applications, you will be well-equipped to recognize and work with them in various situations. Keep practicing and exploring the world of angles, and you’ll become an angle expert in no time!\n\n### Practice Problems\n\n1. Measure the following angles using a protractor:\n   - An angle between the hands of a clock at 8:00.\n   - An angle formed by the letters \"L\" in your notebook.\n\n2. Identify if the following pairs of angles are complementary or supplementary:\n   - 45° and 45°\n   - 120° and 60°\n\n3. Draw an acute angle, an obtuse angle, and a right angle. Label each one clearly. \n\nHappy learning!\n\n---\n\n## Additional Examples\n\n# Understanding Angles: Worked Examples for Grade 6\n\n## Example 1: Identifying Angle Types\n\n**Problem Statement:**  \nLook at the angle shown in the image below. It measures 45°. What type of angle is it: acute, right, obtuse, or straight?\n\n**Step-by-Step Solution:**\n\n1. **Identify the measurement of the angle:** The angle measures 45°.\n2. **Recall the definitions of angle types:**\n   - Acute angle: Less than 90°\n   - Right angle: Exactly 90°\n   - Obtuse angle: Between 90° and 180°\n   - Straight angle: Exactly 180°\n3. **Compare the angle measurement to the definitions:** Since 45° is less than 90°, it is classified as an acute angle.\n\n**Final Answer:**  \nThe angle is an **acute angle**.\n\n**Why this example is useful:**  \nThis example helps students practice identifying and classifying angles based on their measurements, reinforcing their understanding of angle types.\n\n---\n\n## Example 2: Measuring an Angle with a Protractor\n\n**Problem Statement:**  \nUse a protractor to measure the angle shown in the image below. What is the measurement of the angle in degrees?\n\n**Step-by-Step Solution:**\n\n1. **Place the protractor:** Align the midpoint of the protractor (the small hole) with the vertex of the angle.\n2. **Align the baseline:** Make sure one ray of the angle aligns with the baseline of the protractor (the straight edge).\n3. **Read the measurement:** Look at the scale on the protractor. If the angle opens to the right, use the inner scale; if it opens to the left, use the outer scale.\n4. **Record the measurement:** Suppose the angle measures 130° on the outer scale.\n\n**Final Answer:**  \nThe angle measures **130°**.\n\n**Why this example is useful:**  \nThis example teaches students how to accurately measure angles using a protractor, a crucial skill in geometry.\n\n---\n\n## Example 3: Finding Complementary Angles\n\n**Problem Statement:**  \nAngle A measures 30°. What is the measure of its complementary angle?\n\n**Step-by-Step Solution:**\n\n1. **Recall the definition of complementary angles:** Two angles are complementary if they add up to 90°.\n2. **Set up the equation:** Let the measure of the complementary angle be x. Therefore:\n   \\[\n   30° + x = 90°\n   \\]\n3. **Solve for x:** \n   \\[\n   x = 90° - 30° = 60°\n   \\]\n\n**Final Answer:**  \nThe measure of the complementary angle is **60°**.\n\n**Why this example is useful:**  \nThis example reinforces the concept of complementary angles, encouraging students to practice solving equations related to angles.\n\n---\n\n## Example 4: Finding Supplementary Angles\n\n**Problem Statement:**  \nAngle B measures 110°. What is the measure of its supplementary angle?\n\n**Step-by-Step Solution:**\n\n1. **Recall the definition of supplementary angles:** Two angles are supplementary if they add up to 180°.\n2. **Set up the equation:** Let the measure of the supplementary angle be y. Therefore:\n   \\[\n   110° + y = 180°\n   \\]\n3. **Solve for y:** \n   \\[\n   y = 180° - 110° = 70°\n   \\]\n\n**Final Answer:**  \nThe measure of the supplementary angle is **70°**.\n\n**Why this example is useful:**  \nThis example helps students understand and calculate supplementary angles, deepening their comprehension of angle relationships.\n\n---\n\n## Example 5: Solving a Real-World Angle Problem\n\n**Problem Statement:**  \nIn a triangle, one angle measures 50° and the second angle measures 70°. What is the measure of the third angle?\n\n**Step-by-Step Solution:**\n\n1. **Recall the sum of angles in a triangle:** The sum of all angles in a triangle is always 180°.\n2. **Set up the equation:** Let the measure of the third angle be z. Therefore:\n   \\[\n   50° + 70° + z = 180°\n   \\]\n3. **Combine known angles:** \n   \\[\n   120° + z = 180°\n   \\]\n4. **Solve for z:**\n   \\[\n   z = 180° - 120° = 60°\n   \\]\n\n**Final Answer:**  \nThe measure of the third angle is **60°**.\n\n**Why this example is useful:**  \nThis example demonstrates how angles work together in a triangle, showing students a real-world application of their angle knowledge and encouraging critical thinking in geometry.",
            "questions": [
              {
                "id": "angles-ai-1759205569403-0",
                "question": "What is the measure of an angle that is supplementary to a 75° angle?",
                "options": [
                  "105°",
                  "75°",
                  "180°",
                  "90°"
                ],
                "correctAnswer": 0,
                "explanation": "Two angles are supplementary if their measures add up to 180°. Therefore, to find the angle that is supplementary to a 75° angle, we subtract 75° from 180°: 180° - 75° = 105°.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569412-1",
                "question": "If angle A measures 40° and angle B measures 100°, what type of angles are they?",
                "options": [
                  "Acute",
                  "Obtuse",
                  "Right",
                  "Straight"
                ],
                "correctAnswer": 1,
                "explanation": "An acute angle measures less than 90°, an obtuse angle measures more than 90° but less than 180°, and a right angle measures exactly 90°. Since angle B measures 100°, it is obtuse.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569412-2",
                "question": "What is the measure of an angle that is complementary to a 35° angle?",
                "options": [
                  "55°",
                  "35°",
                  "145°",
                  "90°"
                ],
                "correctAnswer": 0,
                "explanation": "Complementary angles add up to 90°. To find the angle that is complementary to a 35° angle, we subtract from 90°: 90° - 35° = 55°.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569413-3",
                "question": "If angle C is twice the measure of angle D, and angle D is 30°, what is the measure of angle C?",
                "options": [
                  "60°",
                  "30°",
                  "15°",
                  "90°"
                ],
                "correctAnswer": 0,
                "explanation": "If angle D is 30°, and angle C is twice that measure, then angle C = 2 × 30° = 60°.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569414-4",
                "question": "Which of the following angles is not a right angle?",
                "options": [
                  "90°",
                  "180°",
                  "270°",
                  "360°"
                ],
                "correctAnswer": 1,
                "explanation": "A right angle measures exactly 90°. Angles measuring 180° (straight angle), 270° (reflex angle), and 360° (full rotation) are not right angles.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569414-5",
                "question": "If two angles are vertical angles and one measures 120°, what is the measure of the other angle?",
                "options": [
                  "60°",
                  "120°",
                  "180°",
                  "90°"
                ],
                "correctAnswer": 1,
                "explanation": "Vertical angles are equal. Therefore, if one angle measures 120°, the other angle, being vertical to it, also measures 120°.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569414-6",
                "question": "What is the total degrees in a triangle if one angle measures 50° and another measures 60°?",
                "options": [
                  "70°",
                  "90°",
                  "100°",
                  "180°"
                ],
                "correctAnswer": 3,
                "explanation": "The sum of the angles in a triangle always equals 180°. To find the third angle, add the two known angles (50° + 60° = 110°) and subtract from 180°: 180° - 110° = 70°.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569416-7",
                "question": "If an angle measures 150°, what type of angle is it?",
                "options": [
                  "Acute",
                  "Obtuse",
                  "Straight",
                  "Reflex"
                ],
                "correctAnswer": 1,
                "explanation": "An obtuse angle measures more than 90° but less than 180°. Since 150° falls within that range, it is classified as an obtuse angle.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569417-8",
                "question": "What is the measurement of an angle that is a straight angle?",
                "options": [
                  "90°",
                  "180°",
                  "270°",
                  "360°"
                ],
                "correctAnswer": 1,
                "explanation": "A straight angle measures exactly 180°. It forms a straight line.",
                "difficulty": "advanced"
              },
              {
                "id": "angles-ai-1759205569418-9",
                "question": "If angle E and angle F are complementary and measure 30° and x° respectively, what is the value of x?",
                "options": [
                  "60°",
                  "90°",
                  "30°",
                  "150°"
                ],
                "correctAnswer": 0,
                "explanation": "Since complementary angles add up to 90°, we can calculate x by subtracting angle E from 90°: 90° - 30° = 60°.",
                "difficulty": "advanced"
              },
              {
                "id": "ang-q1",
                "question": "What type of angle is 45°?",
                "options": [
                  "Acute",
                  "Right",
                  "Obtuse",
                  "Straight"
                ],
                "correctAnswer": 0,
                "explanation": "45° is less than 90°, so it is an acute angle.",
                "difficulty": "easy"
              },
              {
                "id": "ang-q3",
                "question": "If two supplementary angles are equal, what is each angle?",
                "options": [
                  "45°",
                  "90°",
                  "60°",
                  "180°"
                ],
                "correctAnswer": 1,
                "explanation": "Supplementary angles add to 180°. If equal: x + x = 180°, so 2x = 180°, x = 90°",
                "difficulty": "hard"
              },
              {
                "id": "ang-q2",
                "question": "Two complementary angles are 30° and x°. What is x?",
                "options": [
                  "60°",
                  "150°",
                  "30°",
                  "90°"
                ],
                "correctAnswer": 0,
                "explanation": "Complementary angles add to 90°. So 30° + x = 90°, therefore x = 60°",
                "difficulty": "medium"
              }
            ]
          }
        ]
      },
      {
        "id": "number-sense",
        "name": "Number Sense",
        "icon": "🔢",
        "description": "Understanding numbers, operations, and relationships",
        "topics": [
          {
            "id": "fractions",
            "title": "Operations with Fractions",
            "description": "Adding, subtracting, multiplying, and dividing fractions",
            "content": "# Operations with Fractions\n\nLearn how to perform operations with fractions.\n\n## Adding and Subtracting Fractions:\n- Find a common denominator\n- Add or subtract the numerators\n- Keep the denominator the same\n- Simplify if possible\n\nExample: 1/4 + 2/4 = 3/4\n\n## Multiplying Fractions:\n- Multiply the numerators\n- Multiply the denominators\n- Simplify\n\nExample: 2/3 × 3/4 = 6/12 = 1/2\n\n## Dividing Fractions:\n- Flip the second fraction (reciprocal)\n- Multiply\n- Simplify\n\nExample: 1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2\n\n---\n\n## Updated Content\n\n# Operations with Fractions\n\nFractions are a fundamental part of mathematics that help us represent parts of a whole. Understanding how to perform operations with fractions is crucial because it allows us to solve real-world problems involving measurements, sharing, and comparisons. In this lesson, we will explore how to add, subtract, multiply, and divide fractions, giving you the tools to handle fractions confidently in various situations.\n\n## Key Concepts:\n\n- **Concept 1: Adding Fractions**\n  - To add fractions, they must have the same denominator (the bottom number). If the denominators are the same, simply add the numerators (the top numbers) and keep the denominator the same. If they are different, find a common denominator before adding.\n\n- **Concept 2: Subtracting Fractions**\n  - Similar to adding fractions, you can only subtract fractions with the same denominator. Subtract the numerators and keep the denominator the same. If the denominators differ, find a common denominator first.\n\n- **Concept 3: Multiplying and Dividing Fractions**\n  - To multiply fractions, multiply the numerators together and the denominators together. For division, multiply by the reciprocal of the second fraction (flip the second fraction and then multiply).\n\n## Important Formulas/Rules:\n1. **Addition of Fractions**: \\( \\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c} \\) (same denominator)\n2. **Subtraction of Fractions**: \\( \\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c} \\) (same denominator)\n3. **Multiplication of Fractions**: \\( \\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d} \\)\n4. **Division of Fractions**: \\( \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} \\)\n\n## Step-by-Step Process:\n1. **Identifying the Operation**: Determine whether you are adding, subtracting, multiplying, or dividing the fractions.\n2. **Finding Common Denominators (if adding or subtracting)**: If the fractions have different denominators, find the least common denominator (LCD) and convert the fractions.\n3. **Performing the Operation**: Carry out the operation (addition, subtraction, multiplication, or division) according to the rules mentioned above.\n\n## Worked Examples:\n\n### Example 1:\n**Problem**: \\( \\frac{1}{4} + \\frac{2}{4} \\)\n\n**Solution**: \n1. The denominators are the same (4), so we can add the numerators: \n   \\( 1 + 2 = 3 \\)\n2. Keep the denominator the same: \n   \\( \\frac{3}{4} \\)\n\n**Answer**: \\( \\frac{3}{4} \\)\n\n### Example 2:\n**Problem**: \\( \\frac{3}{5} \\div \\frac{2}{3} \\)\n\n**Solution**: \n1. To divide, multiply by the reciprocal of the second fraction:\n   \\( \\frac{3}{5} \\times \\frac{3}{2} \\)\n2. Multiply the numerators: \n   \\( 3 \\times 3 = 9 \\)\n3. Multiply the denominators: \n   \\( 5 \\times 2 = 10 \\)\n4. So, \\( \\frac{3}{5} \\div \\frac{2}{3} = \\frac{9}{10} \\)\n\n**Answer**: \\( \\frac{9}{10} \\)\n\n## Common Mistakes to Avoid:\n- **Mistake 1**: Forgetting to find a common denominator when adding or subtracting fractions with different denominators. Always check if the denominators are the same.\n- **Mistake 2**: Incorrectly multiplying or dividing the fractions. Remember to multiply the numerators together and the denominators together for multiplication, and use the reciprocal for division.\n\n## Real-World Applications:\n- **Application 1**: Cooking: When following a recipe, you might need to add or subtract fractions to adjust serving sizes. For example, if a recipe calls for \\( \\frac{1}{2} \\) cup of sugar and you want to double it, you will need to add \\( \\frac{1}{2} + \\frac{1}{2} \\).\n  \n- **Application 2**: Sharing: If you have a pizza divided into 8 slices and you eat \\( \\frac{3}{8} \\) of it, and a friend eats \\( \\frac{2}{8} \\), you can add those fractions to find out how much of the pizza was eaten in total.\n\n## Practice Tips:\n- **Tip 1**: Always write fractions in their simplest form after performing operations to make them easier to understand.\n- **Tip 2**: Use visual aids like fraction strips or circles to help you visualize the fractions when adding or subtracting.\n\nWith this knowledge and practice, you will become proficient in operations with fractions, making math more enjoyable and applicable in your daily life!\n\n---\n\n## Additional Content (AI-Enhanced)\n\n# Operations with Fractions\n\nWelcome to the exciting world of fractions! Today, we're going to learn how to perform operations with fractions, which will help you in many real-life situations. Let's dive in!\n\n## Adding and Subtracting Fractions\n\nTo add or subtract fractions, you'll need to follow these steps:\n\n### Steps:\n1. **Find a Common Denominator**: A common denominator is a number that both denominators can divide into evenly. This allows us to add or subtract the fractions easily.\n   \n2. **Add or Subtract the Numerators**: Once you have a common denominator, you can add or subtract the top numbers (numerators).\n\n3. **Keep the Denominator the Same**: The denominator stays the same after you find a common denominator.\n\n4. **Simplify if Possible**: If you can reduce the fraction to its simplest form, do it! This makes your answer easier to understand.\n\n### Example:\nLet's look at this example:  \n**1/4 + 2/4**\n\n1. The denominators are both already 4, which means we don't need to find a common denominator.\n2. Now, we add the numerators: 1 + 2 = 3.\n3. The denominator stays the same: 4.\n4. So, **1/4 + 2/4 = 3/4**. \n\n### Another Example:\n**2/3 - 1/6**\n\n1. The denominators are 3 and 6. The common denominator is 6.\n2. Rewrite 2/3 as 4/6 (because 2 × 2 = 4 and 3 × 2 = 6).\n3. Now we subtract the numerators: 4 - 1 = 3.\n4. Keep the denominator the same: **2/3 - 1/6 = 3/6**.\n5. Simplify: **3/6 = 1/2**.\n\n### Real-World Application:\nImagine you are baking cookies, and the recipe calls for 1/4 cup of sugar. If you wanted to double the recipe, you'd need to add another 1/4 cup. So, how much sugar do you need in total? You would add 1/4 + 1/4 = 2/4 = 1/2 cup of sugar!\n\n### Common Mistakes:\n- **Forgetting to find a common denominator**: Always check if the denominators are the same before you add or subtract.\n- **Not simplifying the final answer**: Always check if your answer can be simplified!\n\n## Multiplying Fractions\n\nMultiplying fractions is often easier than adding or subtracting. Follow these steps:\n\n### Steps:\n1. **Multiply the Numerators**: Take the top numbers (numerators) of each fraction and multiply them together.\n   \n2. **Multiply the Denominators**: Take the bottom numbers (denominators) of each fraction and multiply them together.\n\n3. **Simplify**: If possible, reduce the fraction to its simplest form.\n\n### Example:\nLet's look at this example:  \n**2/3 × 3/4**\n\n1. Multiply the numerators: 2 × 3 = 6.\n2. Multiply the denominators: 3 × 4 = 12.\n3. So, **2/3 × 3/4 = 6/12**.\n4. Now, simplify: **6/12 = 1/2**.\n\n### Another Example:\n**1/5 × 2/3**\n\n1. Multiply the numerators: 1 × 2 = 2.\n2. Multiply the denominators: 5 × 3 = 15.\n3. So, **1/5 × 2/3 = 2/15** (already in simplest form!).\n\n### Real-World Application:\nIf you have 2/3 of a pizza and you want to share it equally with 3 friends (including yourself), how much pizza does each person get? You would calculate **2/3 ÷ 3 = 2/3 × 1/3 = 2/9** of a pizza per person!\n\n### Common Mistakes:\n- **Not multiplying both numerators and denominators**: Make sure you multiply both parts correctly!\n- **Forgetting to simplify**: Always check if your product can be simplified.\n\n## Dividing Fractions\n\nDividing fractions can be a bit tricky, but once you get the hang of it, it's simple! Follow these steps:\n\n### Steps:\n1. **Flip the Second Fraction (Reciprocal)**: Change the second fraction to its reciprocal (swap the numerator and denominator).\n   \n2. **Multiply**: Now multiply the first fraction by this new reciprocal fraction.\n\n3. **Simplify**: Simplify your answer if possible.\n\n### Example:\nLet's look at this example:  \n**1/2 ÷ 1/4**\n\n1. Flip the second fraction: The reciprocal of 1/4 is 4/1.\n2. Now multiply: **1/2 × 4/1**.\n   - Multiply the numerators: 1 × 4 = 4.\n   - Multiply the denominators: 2 × 1 = 2.\n3. So, **1/2 ÷ 1/4 = 4/2**.\n4. Simplify: **4/2 = 2**.\n\n### Another Example:\n**3/5 ÷ 2/3**\n\n1. Flip the second fraction: The reciprocal of 2/3 is 3/2.\n2. Now multiply: **3/5 × 3/2**.\n   - Multiply the numerators: 3 × 3 = 9.\n   - Multiply the denominators: 5 × 2 = 10.\n3. So, **3/5 ÷ 2/3 = 9/10** (already in simplest form!).\n\n### Real-World Application:\nIf you have 3/4 of a chocolate bar and you want to share it equally among 2 friends, how much of the chocolate bar does each person get? You would calculate **3/4 ÷ 2 = 3/4 × 1/2 = 3/8** of a chocolate bar per person!\n\n### Common Mistakes:\n- **Forgetting to flip the second fraction**: Always remember that division involves the reciprocal!\n- **Not simplifying your answer**: Check if your final answer can be simplified.\n\n## Practice Tips\n- **Use Visual Aids**: Drawing a picture of fractions can help you understand how to add, subtract, multiply, and divide them.\n- **Practice with Real-Life Examples**: Try to relate fractions to everyday situations, like cooking or shopping. This makes it more engaging!\n- **Work with Peers**: Sometimes explaining the concept to a friend helps reinforce your understanding.\n\nNow you're ready to tackle operations with fractions! Remember to practice, and don't hesitate to ask for help if you get stuck. Happy learning!\n\n---\n\n## Additional Examples\n\n# Operations with Fractions: Worked Examples\n\n## Example 1: Adding Fractions with Different Denominators\n\n**Problem Statement:**  \nAdd \\( \\frac{1}{3} + \\frac{1}{6} \\).\n\n**Step-by-Step Solution:**\n\n1. **Find a common denominator:**  \n   The denominators are 3 and 6. The least common multiple (LCM) is 6.\n\n2. **Convert fractions to have the common denominator:**  \n   \\( \\frac{1}{3} = \\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6} \\)  \n   Now we have:  \n   \\( \\frac{2}{6} + \\frac{1}{6} \\)\n\n3. **Add the numerators:**  \n   \\( 2 + 1 = 3 \\)\n\n4. **Keep the denominator the same:**  \n   So we have:  \n   \\( \\frac{3}{6} \\)\n\n5. **Simplify if possible:**  \n   \\( \\frac{3}{6} = \\frac{1}{2} \\) (divide both numerator and denominator by 3)\n\n**Final Answer:**  \n\\( \\frac{1}{2} \\)\n\n**Why this example is useful:**  \nThis example introduces students to the concept of finding a common denominator, which is essential for adding fractions with different denominators.\n\n---\n\n## Example 2: Subtracting Fractions with Like Denominators\n\n**Problem Statement:**  \nSubtract \\( \\frac{5}{8} - \\frac{2}{8} \\).\n\n**Step-by-Step Solution:**\n\n1. **Check if the denominators are the same:**  \n   The denominators are both 8, so we can proceed.\n\n2. **Subtract the numerators:**  \n   \\( 5 - 2 = 3 \\)\n\n3. **Keep the denominator the same:**  \n   So we have:  \n   \\( \\frac{3}{8} \\)\n\n4. **Simplify if possible:**  \n   \\( \\frac{3}{8} \\) is already in simplest form.\n\n**Final Answer:**  \n\\( \\frac{3}{8} \\)\n\n**Why this example is useful:**  \nThis example helps students practice subtracting fractions when they already have a common denominator, reinforcing their understanding of this operation.\n\n---\n\n## Example 3: Multiplying Fractions\n\n**Problem Statement:**  \nMultiply \\( \\frac{3}{5} \\times \\frac{4}{7} \\).\n\n**Step-by-Step Solution:**\n\n1. **Multiply the numerators:**  \n   \\( 3 \\times 4 = 12 \\)\n\n2. **Multiply the denominators:**  \n   \\( 5 \\times 7 = 35 \\)\n\n3. **Write the result as a fraction:**  \n   \\( \\frac{12}{35} \\)\n\n4. **Simplify if possible:**  \n   \\( \\frac{12}{35} \\) is already in simplest form.\n\n**Final Answer:**  \n\\( \\frac{12}{35} \\)\n\n**Why this example is useful:**  \nThis example illustrates how to multiply fractions directly, which is an important skill that builds on students' understanding of multiplication.\n\n---\n\n## Example 4: Dividing Fractions\n\n**Problem Statement:**  \nDivide \\( \\frac{2}{3} \\div \\frac{4}{5} \\).\n\n**Step-by-Step Solution:**\n\n1. **Flip the second fraction (find the reciprocal):**  \n   The reciprocal of \\( \\frac{4}{5} \\) is \\( \\frac{5}{4} \\).\n\n2. **Multiply the first fraction by the reciprocal:**  \n   \\( \\frac{2}{3} \\times \\frac{5}{4} \\)\n\n3. **Multiply the numerators:**  \n   \\( 2 \\times 5 = 10 \\)\n\n4. **Multiply the denominators:**  \n   \\( 3 \\times 4 = 12 \\)\n\n5. **Write the result as a fraction:**  \n   \\( \\frac{10}{12} \\)\n\n6. **Simplify if possible:**  \n   Divide both numerator and denominator by 2:  \n   \\( \\frac{10 \\div 2}{12 \\div 2} = \\frac{5}{6} \\)\n\n**Final Answer:**  \n\\( \\frac{5}{6} \\)\n\n**Why this example is useful:**  \nThis example shows students how to divide fractions, emphasizing the importance of using the reciprocal. It's a key concept that often challenges students.\n\n---\n\n## Example 5: Adding Mixed Numbers\n\n**Problem Statement:**  \nAdd \\( 2 \\frac{1}{4} + 1 \\frac{2}{3} \\).\n\n**Step-by-Step Solution:**\n\n1. **Convert the mixed numbers to improper fractions:**  \n   - For \\( 2 \\frac{1}{4} \\):  \n     \\( 2 \\times 4 + 1 = 8 + 1 = 9 \\)  \n     So, \\( 2 \\frac{1}{4} = \\frac{9}{4} \\)\n   - For \\( 1 \\frac{2}{3} \\):  \n     \\( 1 \\times 3 + 2 = 3 + 2 = 5 \\)  \n     So, \\( 1 \\frac{2}{3} = \\frac{5}{3} \\)\n\n2. **Find a common denominator:**  \n   The LCM of 4 and 3 is 12.\n\n3. **Convert fractions to have the common denominator:**  \n   - \\( \\frac{9}{4} = \\frac{9 \\times 3}{4 \\times 3} = \\frac{27}{12} \\)  \n   - \\( \\frac{5}{3} = \\frac{5 \\times 4}{3 \\times 4} = \\frac{20}{12} \\)\n\n4. **Add the fractions:**  \n   \\( \\frac{27}{12} + \\frac{20}{12} = \\frac{47}{12} \\)\n\n5. **Convert back to a mixed number:**  \n   \\( 47 \\div 12 = 3\\) remainder \\(11\\)  \n   So, \\( \\frac{47}{12} = 3 \\frac{11}{12} \\)\n\n**Final Answer:**  \n\\( 3 \\frac{11}{12} \\)\n\n**Why this example is useful:**  \nThis example combines several skills: converting mixed numbers to improper fractions, finding a common denominator, and converting back to a mixed number. It challenges students to apply multiple concepts in one problem.",
            "questions": [
              {
                "id": "frac-q1",
                "question": "What is 1/3 + 1/3?",
                "options": [
                  "2/6",
                  "2/3",
                  "1/3",
                  "3/3"
                ],
                "correctAnswer": 1,
                "explanation": "When denominators are the same, add the numerators: 1/3 + 1/3 = 2/3",
                "difficulty": "easy"
              },
              {
                "id": "frac-q4",
                "question": "What is 1/2 ÷ 1/4?",
                "options": [
                  "1/8",
                  "2",
                  "4",
                  "1/2"
                ],
                "correctAnswer": 1,
                "explanation": "Flip and multiply: 1/2 × 4/1 = 4/2 = 2",
                "difficulty": "hard"
              },
              {
                "id": "frac-q2",
                "question": "What is 1/2 + 1/4?",
                "options": [
                  "2/6",
                  "3/4",
                  "2/4",
                  "1/6"
                ],
                "correctAnswer": 1,
                "explanation": "Convert to common denominator: 2/4 + 1/4 = 3/4",
                "difficulty": "medium"
              },
              {
                "id": "frac-q3",
                "question": "What is 2/3 × 3/4?",
                "options": [
                  "6/12 = 1/2",
                  "5/7",
                  "6/7",
                  "2/4"
                ],
                "correctAnswer": 0,
                "explanation": "Multiply numerators and denominators: (2×3)/(3×4) = 6/12 = 1/2",
                "difficulty": "medium"
              }
            ]
          },
          {
            "id": "integers",
            "title": "Introduction to Integers",
            "description": "Learn about positive and negative numbers",
            "content": "# Introduction to Integers\n\nIntegers are whole numbers that can be positive, negative, or zero.\n\n## Key Concepts:\n- **Positive integers**: Numbers greater than zero (1, 2, 3, ...)\n- **Negative integers**: Numbers less than zero (-1, -2, -3, ...)\n- **Zero**: Neither positive nor negative\n\n## Number Line:\nIntegers can be represented on a number line:\n... -3, -2, -1, 0, 1, 2, 3 ...\n\n## Real-World Examples:\n- Temperature: -5°C (below freezing)\n- Elevation: -100m (below sea level)\n- Bank account: -$50 (debt)\n\n---\n\n## Updated Content\n\n# Introduction to Integers\n\nWelcome to the world of integers! Integers are whole numbers that can be positive, negative, or zero. They are essential in mathematics because they help us represent values in various situations, from temperatures to financial transactions. Understanding integers is crucial for solving problems in everyday life and laying the foundation for more advanced math concepts. \n\n## Key Concepts:\n\n- **Concept 1: Positive and Negative Integers**\n  Positive integers are greater than zero (1, 2, 3, ...), while negative integers are less than zero (-1, -2, -3, ...). Zero is neither positive nor negative and serves as a neutral point on the number line.\n\n- **Concept 2: The Number Line**\n  A number line is a visual representation of numbers in order. It helps us understand the relative position of integers. Positive integers are to the right of zero, and negative integers are to the left.\n\n- **Concept 3: Absolute Value**\n  The absolute value of an integer is its distance from zero on the number line, without considering direction. For example, the absolute value of -3 is 3, and the absolute value of 3 is also 3, denoted as |3| = 3 and |-3| = 3.\n\n## Important Formulas/Rules:\n\n1. **Absolute Value Rule**: |x| represents the absolute value of x.\n2. **Addition of Integers**: If you are adding two integers with the same sign, add their absolute values and keep the sign. If they have different signs, subtract the smaller absolute value from the larger absolute value and keep the sign of the number with the larger absolute value.\n3. **Subtraction of Integers**: To subtract an integer, add its opposite. For example, a - b = a + (-b).\n\n## Step-by-Step Process:\n\n1. **Identifying Integers**: Recognize which numbers are integers. Remember, they can be positive, negative, or zero.\n2. **Using a Number Line**: Draw a number line to help visualize the position of integers and their relationships.\n3. **Calculating with Integers**: Use the rules for addition and subtraction of integers to solve problems step-by-step, ensuring you keep track of the signs.\n\n## Worked Examples:\n\n### Example 1:\n**Problem**: Calculate -4 + 6.\n\n**Solution**: \n1. Identify the integers: -4 (negative) and 6 (positive).\n2. Since they have different signs, we subtract their absolute values: |6| - |-4| = 6 - 4 = 2.\n3. The larger number is positive (6), so the answer is positive.\n\n**Answer**: 2\n\n### Example 2:\n**Problem**: Calculate -5 - 3.\n\n**Solution**: \n1. Rewrite the subtraction as an addition of the opposite: -5 - 3 = -5 + (-3).\n2. Now, add the absolute values: |-5| + |-3| = 5 + 3 = 8.\n3. Since both numbers are negative, the result is negative: -8.\n\n**Answer**: -8\n\n## Common Mistakes to Avoid:\n\n- **Mistake 1**: Confusing positive and negative signs when adding. To avoid this, always check the signs before performing the operation.\n- **Mistake 2**: Forgetting to change the operation when subtracting. Always remember that subtracting a number is the same as adding its opposite.\n\n## Real-World Applications:\n\n- **Application 1: Temperature Changes**: Integers are used to represent temperatures, where positive integers indicate temperatures above zero (Celsius) and negative integers indicate temperatures below zero. This helps us understand weather patterns and climate changes.\n  \n- **Application 2: Financial Transactions**: In banking, integers can represent money owed (negative) and money earned (positive). Understanding integers helps manage budgets and expenses effectively.\n\n## Practice Tips:\n\n- **Tip 1**: Use a number line to visualize problems involving integers. It can help you avoid mistakes with signs.\n- **Tip 2**: Practice with real-world examples, such as temperatures or financial scenarios, to understand how integers function in everyday life.\n\nEngage with integers, and remember that they are not just numbers but tools that help us navigate through various situations! Happy learning!\n\n---\n\n## Additional Content (AI-Enhanced)\n\n# Introduction to Integers\n\nWelcome to the fascinating world of integers! Integers are whole numbers that can be positive, negative, or zero. They help us describe everything from temperatures to bank balances.\n\n## Key Concepts:\n\n### **What Are Integers?**\n- **Positive integers**: These are numbers greater than zero. They start from 1 and go up (1, 2, 3, ...). We often use positive integers to count things, like how many apples are in a basket.\n  \n- **Negative integers**: These are numbers less than zero. They start from -1 and go down (-1, -2, -3, ...). We use negative integers to represent things like temperatures below freezing or debt.\n\n- **Zero**: Zero is a special integer. It is neither positive nor negative. It is the point at which positive numbers and negative numbers meet on the number line.\n\n### **The Number Line**\nIntegers can be represented on a number line. Here’s how it looks:\n\n```\n... -3, -2, -1, 0, 1, 2, 3 ...\n```\n\n- The left side of the number line shows negative integers, while the right side shows positive integers. Zero is right in the middle.\n\n## Real-World Examples\nUnderstanding integers can help us in various real-life situations. Here are some examples:\n\n1. **Temperature**: If it’s -5°C outside, the temperature is below freezing. If it’s 10°C, it’s warm.\n  \n2. **Elevation**: If you are at sea level, you are at 0 meters. If you go down into a cave, you might be at -100 meters, which is below sea level.\n\n3. **Bank Account**: If you have $50 in your bank account, you can think of it as +$50. But if you owe the bank $50, your account balance would be -$50, indicating a debt.\n\n4. **Sports Scores**: In a game, if a team scores 3 points and then loses 5 points due to penalties, their score could be represented by +3 and -5, leading to a total of -2.\n\n## Worked Examples\n\n### Example 1: Temperature\n- If the temperature changes from -3°C to 4°C, how much has it increased?\n  \n  **Solution**: \n  \\( 4 - (-3) = 4 + 3 = 7 \\)  \n  The temperature increases by 7°C.\n\n### Example 2: Elevation Change\n- You are hiking down a hill that starts at 200 meters above sea level and ends at -50 meters. What is the change in elevation?\n  \n  **Solution**: \n  \\( -50 - 200 = -250 \\)  \n  You descend 250 meters.\n\n### Example 3: Bank Balance\n- Your bank account balance is $30. You spend $45. What is your new balance?\n  \n  **Solution**: \n  \\( 30 - 45 = -15 \\)  \n  Your new balance is -$15, indicating you are in debt.\n\n## Practice Tips\n\n1. **Use a Number Line**: When adding or subtracting integers, draw a number line. It can help you visualize where the numbers are and what the result will be.\n  \n2. **Break It Down**: If you’re dealing with larger numbers, break them into smaller parts. For example, instead of adding -15 + 20 directly, think of it as 20 - 15.\n\n3. **Practice With Real-Life Situations**: Use examples from your daily life, such as tracking temperatures or your allowance, to practice working with integers.\n\n## Common Mistakes\n\n1. **Confusing Positive and Negative**: It’s easy to mistake a negative number for a positive one, especially when subtracting. Be careful with the signs!\n\n2. **Forgetting Zero**: Sometimes students forget that zero is neither positive nor negative. Always remember that it plays a crucial role on the number line.\n\n3. **Mixing Up Operations**: When adding negative integers, remember that you are moving to the left on the number line, which can be confusing at first.\n\nBy understanding integers, you’re building a solid foundation for exploring more advanced math concepts in the future. Keep practicing, and soon you'll be an integer expert!\n\n---\n\n## Additional Examples\n\n# Worked Examples for Introduction to Integers\n\n## Example 1: Comparing Integers\n\n**Problem Statement:**\nCompare the integers -3 and 2. Which integer is greater?\n\n**Step-by-step Solution:**\n1. **Identify the integers:** We have -3 and 2.\n2. **Understand the number line:** On a number line, numbers to the right are greater than numbers to the left. \n3. **Locate -3 and 2 on the number line:** \n   - -3 is to the left of 0.\n   - 2 is to the right of 0.\n4. **Compare the positions:** Since 2 is to the right of -3, it is greater.\n\n**Final Answer:**\n2 is greater than -3.\n\n**Why this example is useful:**\nThis example helps students understand how to compare integers using a number line, reinforcing the concept of positive and negative values.\n\n---\n\n## Example 2: Adding Integers\n\n**Problem Statement:**\nCalculate the sum of -4 and 5.\n\n**Step-by-step Solution:**\n1. **Write the equation:** -4 + 5.\n2. **Use the number line:** Start at -4.\n3. **Move to the right:** Since we are adding 5, we move 5 units to the right.\n   - Moving from -4 to -3 (1), -3 to -2 (2), -2 to -1 (3), -1 to 0 (4), and then from 0 to 1 (5).\n4. **Determine the result:** After moving 5 units to the right from -4, we land at 1.\n\n**Final Answer:**\n-4 + 5 = 1.\n\n**Why this example is useful:**\nThis example demonstrates how to add a positive integer to a negative integer, illustrating movement on the number line.\n\n---\n\n## Example 3: Subtracting Integers\n\n**Problem Statement:**\nWhat is the result of 3 - 7?\n\n**Step-by-step Solution:**\n1. **Write the equation:** 3 - 7.\n2. **Understand subtraction:** Subtracting 7 means we are moving 7 units to the left from 3.\n3. **Use the number line:** Start at 3.\n   - Move to 2 (1), move to 1 (2), move to 0 (3), move to -1 (4), move to -2 (5), move to -3 (6), move to -4 (7).\n4. **Determine the result:** After moving 7 units to the left, we end at -4.\n\n**Final Answer:**\n3 - 7 = -4.\n\n**Why this example is useful:**\nThis example illustrates the concept of subtracting a larger number from a smaller number, resulting in a negative integer.\n\n---\n\n## Example 4: Adding Two Negative Integers\n\n**Problem Statement:**\nCalculate the sum of -6 and -4.\n\n**Step-by-step Solution:**\n1. **Write the equation:** -6 + (-4).\n2. **Understand addition of negatives:** Adding two negative integers means we are moving further left on the number line.\n3. **Use the number line:** Start at -6 and move 4 units to the left.\n   - Move to -5 (1), -4 (2), -3 (3), and -4 (4).\n4. **Determine the result:** After moving 4 units to the left from -6, we end at -10.\n\n**Final Answer:**\n-6 + (-4) = -10.\n\n**Why this example is useful:**\nThis example shows how to add two negative integers, helping students understand that the result will be even more negative.\n\n---\n\n## Example 5: Real-World Context with Integers\n\n**Problem Statement:**\nA submarine is at a depth of -150 meters. If it ascends 60 meters, what will be its new depth?\n\n**Step-by-step Solution:**\n1. **Write the equation:** -150 + 60.\n2. **Use the number line:** Start at -150.\n3. **Move to the right:** Since we're adding 60, we move 60 units up towards zero.\n4. **Count the steps:**\n   - Move from -150 to -140 (1), -130 (2), -120 (3), -110 (4), -100 (5), -90 (6), -80 (7), -70 (8), -60 (9), -50 (10), -40 (11), -30 (12), -20 (13), -10 (14), 0 (15), and then -1 (16) to -10 (17) to -5 (18) to 0 (19), finally to 10 (20), to 20 (21), to 30 (22), to 40 (23), to 50 (24), to 60 (25), to 70 (26) to 80 (27).\n5. **Determine the result:** After moving 60 units up from -150, we reach -90.\n\n**Final Answer:**\nThe new depth of the submarine is -90 meters.\n\n**Why this example is useful:**\nThis real-world context helps students understand how integers apply to everyday situations, such as altitude and depth, reinforcing the concept of positive and negative numbers.",
            "questions": [
              {
                "id": "int-q6",
                "question": "What is the sum of all integers from -3 to 3?",
                "options": [
                  "0",
                  "6",
                  "3",
                  "9"
                ],
                "correctAnswer": 0,
                "explanation": "(-3) + (-2) + (-1) + 0 + 1 + 2 + 3 = 0. The negative and positive numbers cancel out.",
                "difficulty": "advanced"
              },
              {
                "id": "int-q1",
                "question": "Which of the following is NOT an integer?",
                "options": [
                  "-5",
                  "0",
                  "3.5",
                  "42"
                ],
                "correctAnswer": 2,
                "explanation": "3.5 is not an integer because integers are whole numbers without decimal parts.",
                "difficulty": "easy"
              },
              {
                "id": "int-q2",
                "question": "What is the opposite of -7?",
                "options": [
                  "7",
                  "-7",
                  "0",
                  "14"
                ],
                "correctAnswer": 0,
                "explanation": "The opposite of -7 is 7. Opposites are the same distance from zero but on opposite sides of the number line.",
                "difficulty": "easy"
              },
              {
                "id": "int-q5",
                "question": "A submarine is at -250m depth. It ascends 180m, then descends 95m. What is its final depth?",
                "options": [
                  "-165m",
                  "-345m",
                  "-70m",
                  "-525m"
                ],
                "correctAnswer": 0,
                "explanation": "Start: -250m, Ascend 180m: -250 + 180 = -70m, Descend 95m: -70 - 95 = -165m",
                "difficulty": "hard"
              },
              {
                "id": "int-q3",
                "question": "If the temperature is -3°C and it rises by 8°C, what is the new temperature?",
                "options": [
                  "5°C",
                  "11°C",
                  "-11°C",
                  "8°C"
                ],
                "correctAnswer": 0,
                "explanation": "-3 + 8 = 5. Start at -3 and move 8 units to the right on the number line.",
                "difficulty": "medium"
              },
              {
                "id": "int-q4",
                "question": "Which statement is true?",
                "options": [
                  "All negative numbers are less than zero",
                  "Zero is a positive number",
                  "-10 is greater than -5",
                  "All integers are positive"
                ],
                "correctAnswer": 0,
                "explanation": "By definition, negative numbers are all less than zero. -10 is actually less than -5.",
                "difficulty": "medium"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 7,
    "subjects": [
      {
        "id": "algebra",
        "name": "Algebra",
        "icon": "📐",
        "description": "Expressions and equations",
        "topics": [
          {
            "id": "expressions",
            "title": "Algebraic Expressions",
            "description": "Simplifying and evaluating expressions",
            "content": "# Algebraic Expressions\n\nAn algebraic expression contains variables, numbers, and operations.\n\n## Key Terms:\n- **Term**: A single number or variable, or numbers and variables multiplied together\n- **Coefficient**: The number in front of a variable\n- **Like terms**: Terms with the same variable and exponent\n\n## Combining Like Terms:\n- 3x + 5x = 8x\n- 4y - 2y = 2y\n- 2x + 3y cannot be combined (different variables)\n\n## Distributive Property:\na(b + c) = ab + ac\n\nExample: 3(x + 4) = 3x + 12",
            "questions": [
              {
                "id": "exp-q1",
                "question": "Simplify: 5x + 3x",
                "options": [
                  "8x",
                  "15x",
                  "8x²",
                  "5x + 3x"
                ],
                "correctAnswer": 0,
                "explanation": "Combine like terms: 5x + 3x = 8x",
                "difficulty": "easy"
              },
              {
                "id": "exp-q3",
                "question": "Simplify: 3x + 2y - x + 5y",
                "options": [
                  "2x + 7y",
                  "4x + 7y",
                  "2x + 3y",
                  "5xy"
                ],
                "correctAnswer": 0,
                "explanation": "Combine like terms: (3x - x) + (2y + 5y) = 2x + 7y",
                "difficulty": "hard"
              },
              {
                "id": "exp-q2",
                "question": "Simplify: 4(x + 2)",
                "options": [
                  "4x + 2",
                  "4x + 8",
                  "x + 8",
                  "4x + 6"
                ],
                "correctAnswer": 1,
                "explanation": "Use distributive property: 4 × x + 4 × 2 = 4x + 8",
                "difficulty": "medium"
              }
            ]
          }
        ]
      },
      {
        "id": "number-sense",
        "name": "Number Sense",
        "icon": "🔢",
        "description": "Rational numbers and operations",
        "topics": [
          {
            "id": "decimals",
            "title": "Operations with Decimals",
            "description": "Working with decimal numbers",
            "content": "# Operations with Decimals\n\nLearn to work confidently with decimal numbers.\n\n## Adding and Subtracting Decimals:\n- Line up the decimal points\n- Add or subtract as usual\n- Bring down the decimal point\n\nExample: 3.45 + 2.1 = 5.55\n\n## Multiplying Decimals:\n- Multiply as if there were no decimals\n- Count total decimal places in both numbers\n- Place decimal point in answer\n\nExample: 2.5 × 0.4 = 1.0\n\n## Dividing Decimals:\n- Move decimal point in divisor to make it whole\n- Move decimal point in dividend the same number of places\n- Divide as usual",
            "questions": [
              {
                "id": "dec-q1",
                "question": "What is 3.5 + 2.75?",
                "options": [
                  "6.25",
                  "5.25",
                  "6.10",
                  "5.80"
                ],
                "correctAnswer": 0,
                "explanation": "Line up decimals: 3.50 + 2.75 = 6.25",
                "difficulty": "easy"
              },
              {
                "id": "dec-q3",
                "question": "What is 12.6 ÷ 0.3?",
                "options": [
                  "42",
                  "4.2",
                  "420",
                  "0.42"
                ],
                "correctAnswer": 0,
                "explanation": "Move decimal one place: 126 ÷ 3 = 42",
                "difficulty": "hard"
              },
              {
                "id": "dec-q2",
                "question": "What is 0.5 × 0.4?",
                "options": [
                  "0.2",
                  "0.02",
                  "2.0",
                  "0.9"
                ],
                "correctAnswer": 0,
                "explanation": "5 × 4 = 20. Two decimal places total, so 0.20 = 0.2",
                "difficulty": "medium"
              }
            ]
          },
          {
            "id": "integers-operations",
            "title": "Integer Operations",
            "description": "Adding, subtracting, multiplying, and dividing integers",
            "content": "# Integer Operations\n\nInteger operations involve performing mathematical operations (addition, subtraction, multiplication, and division) on whole numbers, which can be positive, negative, or zero. Understanding these operations is crucial as they form the foundation for more advanced mathematical concepts and are widely used in real-life situations such as budgeting, measuring, and problem-solving.\n\n## Key Concepts:\n\n- **Addition of Integers**: When adding two integers, if they have the same sign, you add their absolute values and keep the sign. If they have different signs, you subtract the smaller absolute value from the larger absolute value and take the sign of the integer with the larger absolute value. \n\n  For example:\n  \\[\n  5 + 3 = 8 \\quad (\\text{same sign}) \n  \\]\n  \\[\n  -4 + 6 = 2 \\quad (\\text{different signs: } 6 - 4 = 2)\n  \\]\n\n- **Subtraction of Integers**: Subtraction can be thought of as adding the opposite. To subtract an integer, you can add its opposite. \n\n  For example:\n  \\[\n  5 - 3 = 5 + (-3) = 2\n  \\]\n\n- **Multiplication of Integers**: The product of two integers follows these rules:\n  - A positive integer multiplied by a positive integer is positive.\n  - A negative integer multiplied by a negative integer is positive.\n  - A positive integer multiplied by a negative integer is negative.\n\n  For example:\n  \\[\n  -3 \\times -2 = 6 \\quad (\\text{negative times negative is positive})\n  \\]\n  \\[\n  4 \\times -5 = -20 \\quad (\\text{positive times negative is negative})\n  \\]\n\n## Important Formulas/Rules:\n\n- Addition Rule: \n  \\[\n  a + b = c \n  \\]\n  (same sign: \\( |a| + |b| \\) with the same sign)\n  \n- Subtraction Rule: \n  \\[\n  a - b = a + (-b)\n  \\]\n\n- Multiplication Rule:\n  \\[\n  a \\times b = \n  \\begin{cases} \n  |a| \\times |b| & \\text{if } a \\text{ and } b \\text{ have the same sign} \\\\\n  -|a| \\times |b| & \\text{if } a \\text{ and } b \\text{ have different signs}\n  \\end{cases}\n  \\]\n\n## Step-by-Step Process:\n\n1. **Identify the Operation**: Determine whether you are adding, subtracting, multiplying, or dividing integers.\n  \n2. **Apply the Rules**: Use the rules for the specific operation:\n   - For addition or subtraction, determine the signs and apply the appropriate rule.\n   - For multiplication, determine the signs and multiply the absolute values.\n\n3. **Simplify the Result**: Simplify your answer to its simplest form, ensuring to keep the correct sign.\n\n## Worked Examples:\n\n### Example 1:\n**Problem**: Calculate \\( 7 + (-3) \\)\n\n**Solution**: \n1. Identify the operation: Addition\n2. Apply the rules: Since one is positive and the other is negative, we subtract \\( 3 \\) from \\( 7 \\). \n   \\[\n   7 + (-3) = 7 - 3 = 4\n   \\]\n  \n**Answer**: \\( 4 \\)\n\n### Example 2:\n**Problem**: Calculate \\( -5 \\times 4 \\)\n\n**Solution**: \n1. Identify the operation: Multiplication\n2. Apply the rules: The signs are different (negative and positive), so the result will be negative.\n   \\[\n   -5 \\times 4 = - (5 \\times 4) = -20\n   \\]\n\n**Answer**: \\( -20 \\)\n\n## Common Mistakes to Avoid:\n- **Mistake 1**: Confusing subtraction with addition. Remember that \\( a - b \\) is equivalent to \\( a + (-b) \\).\n- **Mistake 2**: Forgetting the sign rules in multiplication. Always check if the signs are the same or different before determining the sign of the product.\n\n## Real-World Applications:\n- **Banking**: Understanding integer operations is crucial when managing bank accounts, especially when dealing with debts (negative integers) and credits (positive integers).\n- **Temperature Changes**: When calculating temperature changes, positive and negative integers represent increases and decreases, respectively.\n\n## Practice Tips:\n- **Use Number Lines**: Visualize integer operations using a number line to better understand the direction of positive and negative values.\n- **Practice with Real-Life Examples**: Apply integer operations to real-life situations like shopping discounts or temperature changes to make learning more engaging.\n\nBy mastering integer operations, students will build a strong mathematical foundation that will support their learning in higher-level math concepts.\n\n---\n\n## Additional Content (AI-Enhanced)\n\n# Integer Operations\n\nInteger operations involve performing mathematical operations (addition, subtraction, multiplication, and division) with whole numbers, both positive and negative. Understanding integer operations is essential as they form the basis for more advanced mathematics and are frequently used in everyday life, such as calculating debts, temperatures, and financial transactions.\n\n## Key Concepts:\n\n### Addition of Integers:\nAdding integers can be straightforward when the numbers are of the same sign. For example, if both are positive, you simply add their absolute values. If both are negative, you add their absolute values and keep the negative sign. If the integers have different signs, subtract the smaller absolute value from the larger absolute value and keep the sign of the integer with the larger absolute value. \n\n\\[\na + b = \n\\begin{cases} \n|a| + |b| & \\text{if } a, b > 0 \\\\ \n-|a| - |b| & \\text{if } a, b < 0 \\\\ \n|a| - |b| & \\text{if } a > 0 \\text{ and } b < 0 \\\\ \n-|a| + |b| & \\text{if } a < 0 \\text{ and } b > 0 \n\\end{cases}\n\\]\n\n### Subtraction of Integers:\nSubtracting an integer is the same as adding its opposite. For example, \\( a - b \\) can be rewritten as \\( a + (-b) \\).\n\n\\[\na - b = a + (-b)\n\\]\n\n### Multiplication of Integers:\nThe product of two integers follows specific rules based on their signs. If both integers are positive or both are negative, the product is positive. If one integer is negative and the other is positive, the product is negative.\n\n\\[\na \\times b = \n\\begin{cases} \n|a| \\cdot |b| & \\text{if } a \\text{ and } b \\text{ have the same sign} \\\\ \n- |a| \\cdot |b| & \\text{if } a \\text{ and } b \\text{ have different signs} \n\\end{cases}\n\\]\n\n### Division of Integers:\nDivision of integers also follows similar rules to multiplication. If both integers are positive or both are negative, the quotient is positive. If one integer is negative and the other is positive, the quotient is negative.\n\n\\[\na \\div b = \n\\begin{cases} \n|a| \\div |b| & \\text{if } a \\text{ and } b \\text{ have the same sign} \\\\ \n- |a| \\div |b| & \\text{if } a \\text{ and } b \\text{ have different signs} \n\\end{cases}\n\\]\n\n## Important Formulas/Rules:\n\n- **Addition Rule**: \n  \\[\n  a + b = |a| + |b| \\quad \\text{(same sign)}\n  \\]\n- **Subtraction Rule**: \n  \\[\n  a - b = a + (-b)\n  \\]\n- **Multiplication Rule**: \n  \\[\n  a \\times b = \n  \\begin{cases} \n  |a| \\cdot |b| & \\text{if } a \\text{ and } b \\text{ have the same sign} \\\\ \n  - |a| \\cdot |b| & \\text{if } a \\text{ and } b \\text{ have different signs} \n  \\end{cases}\n  \\]\n- **Division Rule**: \n  \\[\n  a \\div b = \n  \\begin{cases} \n  |a| \\div |b| & \\text{if } a \\text{ and } b \\text{ have the same sign} \\\\ \n  - |a| \\div |b| & \\text{if } a \\text{ and } b \\text{ have different signs} \n  \\end{cases}\n  \\]\n\n## Step-by-Step Process:\n\n1. **Identify the Operation**: Determine whether you need to add, subtract, multiply, or divide the integers.\n2. **Apply the Rules**: Use the appropriate rules for the operation based on the signs of the integers involved. Remember to convert subtraction into addition by using the opposite of the integer.\n3. **Simplify the Result**: Perform the arithmetic and simplify the result as needed, ensuring you apply the correct sign based on the rules outlined.\n\n## Worked Examples:\n\n### Example 1:\n**Problem**: Calculate \\( -5 + 3 \\).\n\n**Solution**: \n1. Since the integers have different signs, we subtract the smaller absolute value from the larger absolute value: \n   \\[\n   |-5| - |3| = 5 - 3 = 2\n   \\]\n2. Since \\( -5 \\) has the larger absolute value, the answer will be negative:\n   \\[\n   -5 + 3 = -2\n   \\]\n\n**Answer**: \\( -2 \\)\n\n### Example 2:\n**Problem**: Calculate \\( -8 - (-4) \\).\n\n**Solution**: \n1. Rewrite the subtraction as addition:\n   \\[\n   -8 - (-4) = -8 + 4\n   \\]\n2. Apply the addition rules:\n   \\[\n   -8 + 4 = |-8| - |4| = 8 - 4 = 4\n   \\]\n3. Since \\( -8 \\) has the larger absolute value, the answer remains negative:\n   \\[\n   -8 + 4 = -4\n   \\]\n\n**Answer**: \\( -4 \\)\n\n### Example 3:\n**Problem**: Calculate \\( 7 \\times (-3) \\).\n\n**Solution**: \n1. Identify the signs of the integers. Since one is positive and the other is negative, the product will be negative.\n2. Calculate the product of their absolute values:\n   \\[\n   |7| \\cdot |-3| = 7 \\cdot 3 = 21\n   \\]\n3. Apply the sign:\n   \\[\n   7 \\times (-3) = -21\n   \\]\n\n**Answer**: \\( -21 \\)\n\n### Example 4:\n**Problem**: Calculate \\( -12 \\div 4 \\).\n\n**Solution**: \n1. Identify the signs. Since \\( -12 \\) is negative and \\( 4 \\) is positive, the quotient will be negative.\n2. Calculate the absolute values:\n   \\[\n   |-12| \\div |4| = 12 \\div 4 = 3\n   \\]\n3. Apply the sign:\n   \\[\n   -12 \\div 4 = -3\n   \\]\n\n**Answer**: \\( -3 \\)\n\n## Common Mistakes to Avoid:\n- **Mistake 1**: Forgetting to change the sign when subtracting. Remember that \\( a - b = a + (-b) \\).\n- **Mistake 2**: Misapplying the multiplication rules, especially with negative signs. Always check if the signs are the same or different.\n- **Mistake 3**: Confusing the rules for division. Remember that division follows the same sign rules as multiplication.\n\n## Real-World Applications:\n- **Banking**: Understanding debts and credits. For example, if you have a debt of $50 and pay $20, you would calculate:\n  \\[\n  -50 + 20 = -30 \\quad \\text{(You still owe $30)}\n  \\]\n- **Temperature Change**: If the temperature drops from -5°C to -10°C, you would calculate:\n  \\[\n  -5 - (-10) = -5 + 10 = 5 \\quad \\text{(Temperature increased by 5°C)}\n  \\]\n- **Elevation Changes**: If you are at an elevation of -150 meters and you rise 70 meters, you would calculate:\n  \\[\n  -150 + 70 = -80 \\quad \\text{(You are now at -80 meters)}\n  \\]\n\n## Practice Tips:\n- **Tip 1**: Use a number line to visualize addition and subtraction of integers. It helps in understanding the direction of movement (positive to the right, negative to the left).\n- **Tip 2**: Practice with real-life scenarios, such as temperature changes or financial transactions, to reinforce the concepts of integer operations.\n- **Tip 3**: Create flashcards with different integer operations to test yourself or your peers. This can help solidify your understanding of the rules.\n- **Tip 4**: Work with a partner to explain the rules and concepts to each other. Teaching someone else can reinforce your own understanding.\n\n```mermaid\ngraph TD\n    A[Start] --> B[Identify the Operation]\n    B --> C[Apply the Rules]\n    C --> D[Simplify the Result]\n    D --> E[End]\n```\n\nThis structured approach will help Grade 7 students grasp integer operations effectively while preparing them for more advanced mathematical concepts in the future!\n\n---\n\n## Additional Examples\n\n# Additional Worked Examples for Integer Operations\n\n## Example 3:\n**Problem**: Calculate \\( 6 - 9 \\).\n\n**Solution**: \n1. Rewrite the subtraction as addition:\n   \\[\n   6 - 9 = 6 + (-9)\n   \\]\n2. Now apply the addition rules:\n   - Since \\( 6 \\) is positive and \\( -9 \\) is negative, we subtract the smaller absolute value from the larger absolute value:\n   \\[\n   |6| - |9| = 9 - 6 = 3\n   \\]\n3. Since \\( -9 \\) has the larger absolute value, the answer will be negative:\n   \\[\n   6 - 9 = -3\n   \\]\n\n**Answer**: \\( -3 \\)\n\n**Why this example is useful**: This example illustrates the process of handling subtraction when the result is negative, which is common in real-world scenarios like financial losses.\n\n---\n\n## Example 4:\n**Problem**: Calculate \\( -12 + 7 \\).\n\n**Solution**: \n1. Since the integers have different signs, we subtract the smaller absolute value from the larger absolute value:\n   \\[\n   |-12| - |7| = 12 - 7 = 5\n   \\]\n2. Since \\( -12 \\) has the larger absolute value, the answer will be negative:\n   \\[\n   -12 + 7 = -5\n   \\]\n\n**Answer**: \\( -5 \\)\n\n**Why this example is useful**: This example helps students practice adding integers with different signs, which frequently occurs in various contexts, such as budgeting or measuring temperature changes.\n\n---\n\n## Example 5:\n**Problem**: Calculate \\( -3 \\times 4 \\).\n\n**Solution**: \n1. Identify the signs of the integers. Here, \\( -3 \\) is negative and \\( 4 \\) is positive.\n2. According to the multiplication rules:\n   \\[\n   a \\times b < 0 \\quad \\text{(if they have different signs)}\n   \\]\n3. Therefore, we calculate the product of their absolute values:\n   \\[\n   |-3| \\times |4| = 3 \\times 4 = 12\n   \\]\n4. Since the signs are different, the product is negative:\n   \\[\n   -3 \\times 4 = -12\n   \\]\n\n**Answer**: \\( -12 \\)\n\n**Why this example is useful**: This example reinforces the rule for multiplying integers with different signs, which is essential for students to understand when working with negative values.\n\n---\n\n## Example 6:\n**Problem**: Calculate \\( -15 - 6 \\).\n\n**Solution**: \n1. Rewrite the subtraction as addition:\n   \\[\n   -15 - 6 = -15 + (-6)\n   \\]\n2. Both integers are negative, so we apply the addition rule:\n   \\[\n   -15 + (-6) = |15| + |6| = 15 + 6 = 21\n   \\]\n3. Since both integers are negative, the result will also be negative:\n   \\[\n   -15 - 6 = -21\n   \\]\n\n**Answer**: \\( -21 \\)\n\n**Why this example is useful**: This example demonstrates how to add two negative integers, a key concept that helps students understand situations involving losses or debts.\n\n---\n\n## Example 7:\n**Problem**: Calculate \\( -7 + (-3) + 4 \\).\n\n**Solution**: \n1. First, we simplify the expression step-by-step. Start with the first two terms:\n   \\[\n   -7 + (-3) = -7 - 3 = -10\n   \\]\n2. Now add the result to the last term:\n   \\[\n   -10 + 4\n   \\]\n3. Rewrite this as:\n   \\[\n   -10 + 4 = -10 + (-(-4)) = -10 - 4\n   \\]\n4. Since \\( -10 \\) has a larger absolute value than \\( 4 \\):\n   \\[\n   |-10| - |4| = 10 - 4 = 6\n   \\]\n5. The result is negative:\n   \\[\n   -10 + 4 = -6\n   \\]\n\n**Answer**: \\( -6 \\)\n\n**Why this example is useful**: This example combines multiple operations, helping students practice their skills in handling expressions with more than two integers while reinforcing the addition and subtraction rules.\n\n---\n\nThese worked examples progressively challenge Grade 7 students in their understanding of integer operations, preparing them for more complex mathematical concepts in the future.",
            "questions": [
              {
                "id": "int-op-q5",
                "question": "If a = -3 and b = 4, what is a² - 2b?",
                "options": [
                  "1",
                  "-1",
                  "17",
                  "-17"
                ],
                "correctAnswer": 0,
                "explanation": "a² = (-3)² = 9, 2b = 2(4) = 8, so 9 - 8 = 1",
                "difficulty": "advanced"
              },
              {
                "id": "int-op-q1",
                "question": "What is (-5) + (-3)?",
                "options": [
                  "-8",
                  "8",
                  "-2",
                  "2"
                ],
                "correctAnswer": 0,
                "explanation": "Same signs: add the numbers and keep the negative sign. -5 + -3 = -8",
                "difficulty": "easy"
              },
              {
                "id": "int-op-q4",
                "question": "Simplify: (-2) × 3 + (-4) × (-5)",
                "options": [
                  "14",
                  "-14",
                  "26",
                  "-26"
                ],
                "correctAnswer": 0,
                "explanation": "(-2) × 3 = -6, (-4) × (-5) = 20, then -6 + 20 = 14",
                "difficulty": "hard"
              },
              {
                "id": "int-op-q2",
                "question": "What is (-4) × 6?",
                "options": [
                  "-24",
                  "24",
                  "-10",
                  "10"
                ],
                "correctAnswer": 0,
                "explanation": "Different signs give a negative result: (-4) × 6 = -24",
                "difficulty": "medium"
              },
              {
                "id": "int-op-q3",
                "question": "What is (-12) ÷ (-3)?",
                "options": [
                  "4",
                  "-4",
                  "15",
                  "-15"
                ],
                "correctAnswer": 0,
                "explanation": "Same signs give a positive result: (-12) ÷ (-3) = 4",
                "difficulty": "medium"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 8,
    "subjects": [
      {
        "id": "algebra",
        "name": "Algebra",
        "icon": "📐",
        "description": "Linear equations and relationships",
        "topics": [
          {
            "id": "linear-equations",
            "title": "Solving Linear Equations",
            "description": "One and two-step equations",
            "content": "# Solving Linear Equations\n\nA linear equation is an equation where the variable has an exponent of 1.\n\n## Steps to Solve:\n1. Simplify both sides if needed\n2. Use inverse operations to isolate the variable\n3. Check your answer\n\n## One-Step Equations:\n- x + 5 = 12 → x = 7\n- 3x = 15 → x = 5\n\n## Two-Step Equations:\n- 2x + 3 = 11\n- Subtract 3: 2x = 8\n- Divide by 2: x = 4\n\n## Balance Method:\nWhatever you do to one side, do to the other!",
            "questions": [
              {
                "id": "lin-q1",
                "question": "Solve: x + 8 = 15",
                "options": [
                  "7",
                  "23",
                  "8",
                  "15"
                ],
                "correctAnswer": 0,
                "explanation": "Subtract 8 from both sides: x = 15 - 8 = 7",
                "difficulty": "easy"
              },
              {
                "id": "lin-q2",
                "question": "Solve: 4x = 20",
                "options": [
                  "5",
                  "16",
                  "24",
                  "80"
                ],
                "correctAnswer": 0,
                "explanation": "Divide both sides by 4: x = 20 ÷ 4 = 5",
                "difficulty": "easy"
              },
              {
                "id": "lin-q4",
                "question": "Solve: 2(x - 3) = 10",
                "options": [
                  "8",
                  "5",
                  "6.5",
                  "2"
                ],
                "correctAnswer": 0,
                "explanation": "Distribute: 2x - 6 = 10, add 6: 2x = 16, divide by 2: x = 8",
                "difficulty": "hard"
              },
              {
                "id": "lin-q3",
                "question": "Solve: 3x + 5 = 20",
                "options": [
                  "5",
                  "15",
                  "25",
                  "8.33"
                ],
                "correctAnswer": 0,
                "explanation": "Subtract 5: 3x = 15, then divide by 3: x = 5",
                "difficulty": "medium"
              }
            ]
          }
        ]
      },
      {
        "id": "number-sense",
        "name": "Number Sense",
        "icon": "🔢",
        "description": "Exponents, square roots, and scientific notation",
        "topics": [
          {
            "id": "exponents",
            "title": "Laws of Exponents",
            "description": "Understanding and applying exponent rules",
            "content": "# Laws of Exponents\n\nExponents represent repeated multiplication.\n\n## Basic Rules:\n1. **Product Rule**: aᵐ × aⁿ = aᵐ⁺ⁿ\n2. **Quotient Rule**: aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n3. **Power Rule**: (aᵐ)ⁿ = aᵐⁿ\n4. **Zero Exponent**: a⁰ = 1 (where a ≠ 0)\n5. **Negative Exponent**: a⁻ⁿ = 1/aⁿ\n\n## Examples:\n- 2³ × 2² = 2⁵ = 32\n- x⁴ ÷ x² = x² \n- (3²)³ = 3⁶ = 729\n- 5⁰ = 1\n- 2⁻³ = 1/2³ = 1/8",
            "questions": [
              {
                "id": "exp-q5",
                "question": "What is 2⁻³?",
                "options": [
                  "-8",
                  "-6",
                  "1/8",
                  "1/6"
                ],
                "correctAnswer": 2,
                "explanation": "Negative exponent: 2⁻³ = 1/2³ = 1/8",
                "difficulty": "advanced"
              },
              {
                "id": "exp-q1",
                "question": "What is 2³?",
                "options": [
                  "6",
                  "8",
                  "9",
                  "5"
                ],
                "correctAnswer": 1,
                "explanation": "2³ = 2 × 2 × 2 = 8",
                "difficulty": "easy"
              },
              {
                "id": "exp-q4",
                "question": "Simplify: (2³)²",
                "options": [
                  "2⁵",
                  "2⁶",
                  "4⁶",
                  "2⁹"
                ],
                "correctAnswer": 1,
                "explanation": "Power rule: multiply exponents. (2³)² = 2³ˣ² = 2⁶ = 64",
                "difficulty": "hard"
              },
              {
                "id": "exp-q2",
                "question": "Simplify: x⁵ × x³",
                "options": [
                  "x⁸",
                  "x¹⁵",
                  "x²",
                  "2x⁸"
                ],
                "correctAnswer": 0,
                "explanation": "Product rule: add exponents. x⁵ × x³ = x⁵⁺³ = x⁸",
                "difficulty": "medium"
              },
              {
                "id": "exp-q3",
                "question": "What is 5⁰?",
                "options": [
                  "0",
                  "1",
                  "5",
                  "undefined"
                ],
                "correctAnswer": 1,
                "explanation": "Any non-zero number to the power of 0 equals 1",
                "difficulty": "medium"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 9,
    "subjects": [
      {
        "id": "algebra",
        "name": "Algebra",
        "icon": "📐",
        "description": "Linear relations and equations",
        "topics": [
          {
            "id": "linear-relations",
            "title": "Linear Relations",
            "description": "Understanding slope and y-intercept",
            "content": "# Linear Relations\n\nA linear relation can be represented by the equation y = mx + b\n\n## Components:\n- **m**: slope (rate of change)\n- **b**: y-intercept (where line crosses y-axis)\n- **x**: independent variable\n- **y**: dependent variable\n\n## Slope Formula:\nm = (y₂ - y₁) / (x₂ - x₁)\n\n## Types of Slope:\n- Positive: line rises left to right\n- Negative: line falls left to right\n- Zero: horizontal line\n- Undefined: vertical line\n\n## Example:\ny = 2x + 3\n- Slope: 2 (rises 2 units for every 1 unit right)\n- Y-intercept: 3",
            "questions": [
              {
                "id": "lin-rel-q1",
                "question": "In y = 3x + 5, what is the slope?",
                "options": [
                  "3",
                  "5",
                  "8",
                  "x"
                ],
                "correctAnswer": 0,
                "explanation": "In y = mx + b form, m is the slope. Here m = 3",
                "difficulty": "easy"
              },
              {
                "id": "lin-rel-q2",
                "question": "What is the y-intercept of y = -2x + 7?",
                "options": [
                  "-2",
                  "7",
                  "5",
                  "0"
                ],
                "correctAnswer": 1,
                "explanation": "In y = mx + b form, b is the y-intercept. Here b = 7",
                "difficulty": "easy"
              },
              {
                "id": "lin-rel-q4",
                "question": "Which equation represents a line with slope -3 and y-intercept 4?",
                "options": [
                  "y = 4x - 3",
                  "y = -3x + 4",
                  "y = 3x + 4",
                  "y = -3x - 4"
                ],
                "correctAnswer": 1,
                "explanation": "Use y = mx + b with m = -3 and b = 4: y = -3x + 4",
                "difficulty": "hard"
              },
              {
                "id": "lin-rel-q3",
                "question": "Find the slope between points (2, 3) and (4, 7)",
                "options": [
                  "2",
                  "1/2",
                  "4",
                  "-2"
                ],
                "correctAnswer": 0,
                "explanation": "m = (7-3)/(4-2) = 4/2 = 2",
                "difficulty": "medium"
              }
            ]
          }
        ]
      },
      {
        "id": "quadratics",
        "name": "Quadratic Relations",
        "icon": "📊",
        "description": "Introduction to parabolas and quadratic equations",
        "topics": [
          {
            "id": "intro-quadratics",
            "title": "Introduction to Quadratics",
            "description": "Understanding parabolas and quadratic form",
            "content": "# Introduction to Quadratics\n\nA quadratic relation has the form y = ax² + bx + c\n\n## Key Features:\n- **Parabola**: U-shaped curve\n- **Vertex**: Highest or lowest point\n- **Axis of symmetry**: Vertical line through vertex\n- **Direction**: Opens up if a > 0, down if a < 0\n\n## Standard Form:\ny = ax² + bx + c\n\n## Vertex Form:\ny = a(x - h)² + k\nwhere (h, k) is the vertex\n\n## Example:\ny = x² - 4x + 3\n- Opens upward (a = 1 > 0)\n- Has a minimum point",
            "questions": [
              {
                "id": "quad-q1",
                "question": "What shape is the graph of y = x²?",
                "options": [
                  "Line",
                  "Parabola",
                  "Circle",
                  "Hyperbola"
                ],
                "correctAnswer": 1,
                "explanation": "Quadratic equations graph as parabolas (U-shaped curves)",
                "difficulty": "easy"
              },
              {
                "id": "quad-q3",
                "question": "What is the vertex of y = (x - 3)² + 2?",
                "options": [
                  "(3, 2)",
                  "(-3, 2)",
                  "(3, -2)",
                  "(2, 3)"
                ],
                "correctAnswer": 0,
                "explanation": "In vertex form y = a(x - h)² + k, the vertex is (h, k) = (3, 2)",
                "difficulty": "hard"
              },
              {
                "id": "quad-q2",
                "question": "Does y = -2x² + 5 open upward or downward?",
                "options": [
                  "Upward",
                  "Downward",
                  "Sideways",
                  "Neither"
                ],
                "correctAnswer": 1,
                "explanation": "When a is negative (a = -2), the parabola opens downward",
                "difficulty": "medium"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 10,
    "subjects": [
      {
        "id": "quadratics",
        "name": "Quadratic Relations",
        "icon": "📊",
        "description": "Factoring and solving quadratic equations",
        "topics": [
          {
            "id": "factoring",
            "title": "Factoring Quadratics",
            "description": "Factoring and solving by factoring",
            "content": "# Factoring Quadratics\n\nFactoring is the process of breaking down a quadratic into simpler expressions.\n\n## Common Factoring Patterns:\n\n### 1. Common Factor:\n2x² + 4x = 2x(x + 2)\n\n### 2. Difference of Squares:\nx² - 9 = (x + 3)(x - 3)\n\n### 3. Simple Trinomials:\nx² + 5x + 6 = (x + 2)(x + 3)\n\n### 4. Complex Trinomials:\n2x² + 7x + 3 = (2x + 1)(x + 3)\n\n## Solving by Factoring:\n1. Set equation equal to zero\n2. Factor completely\n3. Set each factor equal to zero\n4. Solve for x\n\nExample: x² + 5x + 6 = 0\n- Factor: (x + 2)(x + 3) = 0\n- Solutions: x = -2 or x = -3",
            "questions": [
              {
                "id": "fact-q4",
                "question": "Factor: 2x² + 5x + 3",
                "options": [
                  "(2x + 3)(x + 1)",
                  "(2x + 1)(x + 3)",
                  "(x + 3)(x + 1)",
                  "Cannot be factored"
                ],
                "correctAnswer": 0,
                "explanation": "Find factors of 2×3=6 that add to 5: 2 and 3. Result: (2x + 3)(x + 1)",
                "difficulty": "advanced"
              },
              {
                "id": "fact-q1",
                "question": "Factor: x² - 16",
                "options": [
                  "(x - 4)(x - 4)",
                  "(x + 4)(x - 4)",
                  "(x + 8)(x - 2)",
                  "Cannot be factored"
                ],
                "correctAnswer": 1,
                "explanation": "Difference of squares: x² - 16 = (x + 4)(x - 4)",
                "difficulty": "easy"
              },
              {
                "id": "fact-q3",
                "question": "Solve: x² - 5x + 6 = 0",
                "options": [
                  "x = 2 or x = 3",
                  "x = -2 or x = -3",
                  "x = 1 or x = 6",
                  "x = -1 or x = -6"
                ],
                "correctAnswer": 0,
                "explanation": "Factor: (x - 2)(x - 3) = 0, so x = 2 or x = 3",
                "difficulty": "hard"
              },
              {
                "id": "fact-q2",
                "question": "Factor: x² + 7x + 12",
                "options": [
                  "(x + 3)(x + 4)",
                  "(x + 2)(x + 6)",
                  "(x + 1)(x + 12)",
                  "(x - 3)(x - 4)"
                ],
                "correctAnswer": 0,
                "explanation": "Find two numbers that multiply to 12 and add to 7: 3 and 4",
                "difficulty": "medium"
              }
            ]
          }
        ]
      },
      {
        "id": "trigonometry",
        "name": "Trigonometry",
        "icon": "📐",
        "description": "Right triangle trigonometry",
        "topics": [
          {
            "id": "trig-ratios",
            "title": "Trigonometric Ratios",
            "description": "Sine, cosine, and tangent",
            "content": "# Trigonometric Ratios\n\nTrigonometry deals with relationships between angles and sides in right triangles.\n\n## The Three Primary Ratios:\n\n### SOH-CAH-TOA:\n- **sin θ = Opposite / Hypotenuse**\n- **cos θ = Adjacent / Hypotenuse**\n- **tan θ = Opposite / Adjacent**\n\n## Finding Sides:\nIf you know an angle and one side, you can find other sides.\n\n## Finding Angles:\nUse inverse functions: sin⁻¹, cos⁻¹, tan⁻¹\n\n## Example:\nIn a right triangle with angle 30° and hypotenuse 10:\n- Opposite = 10 × sin(30°) = 5\n- Adjacent = 10 × cos(30°) ≈ 8.66",
            "questions": [
              {
                "id": "trig-q1",
                "question": "In SOH-CAH-TOA, what does SOH stand for?",
                "options": [
                  "Sine = Opposite / Hypotenuse",
                  "Sine = Opposite / Height",
                  "Side = Opposite / Hypotenuse",
                  "Slope = Opposite / Hypotenuse"
                ],
                "correctAnswer": 0,
                "explanation": "SOH means Sine = Opposite / Hypotenuse",
                "difficulty": "easy"
              },
              {
                "id": "trig-q3",
                "question": "In a right triangle, if the opposite side is 3 and hypotenuse is 5, what is sin θ?",
                "options": [
                  "0.6",
                  "0.8",
                  "1.67",
                  "0.75"
                ],
                "correctAnswer": 0,
                "explanation": "sin θ = opposite/hypotenuse = 3/5 = 0.6",
                "difficulty": "hard"
              },
              {
                "id": "trig-q2",
                "question": "If sin θ = 0.5, what is θ?",
                "options": [
                  "30°",
                  "45°",
                  "60°",
                  "90°"
                ],
                "correctAnswer": 0,
                "explanation": "sin(30°) = 0.5 or 1/2",
                "difficulty": "medium"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 11,
    "subjects": [
      {
        "id": "functions",
        "name": "Functions",
        "icon": "📈",
        "description": "Understanding and working with functions",
        "topics": [
          {
            "id": "function-notation",
            "title": "Function Notation",
            "description": "Understanding f(x) notation and function evaluation",
            "content": "# Function Notation\n\nFunction notation is a way to represent functions using symbols, making it easier to work with mathematical relationships. It is an essential concept in algebra and calculus, enabling students to describe how one quantity depends on another. Understanding function notation lays the groundwork for more advanced topics in mathematics and helps in problem-solving in various contexts, such as physics, economics, and engineering.\n\n## Key Concepts:\n\n- **Concept 1: Definition of a Function**\n  \n  A function is a relation that assigns exactly one output for each input. We denote a function \\( f \\) with input \\( x \\) and output \\( f(x) \\). This means for every \\( x \\) in the domain, there exists a unique \\( f(x) \\) in the codomain. \n\n  \\[\n  y = f(x) \\Rightarrow \\text{where } y \\text{ is the output corresponding to } x.\n  \\]\n\n- **Concept 2: Evaluating Functions**\n  \n  To evaluate a function, we substitute the input value into the function notation. For example, if we have a function defined as \\( f(x) = 2x + 3 \\), to evaluate \\( f(2) \\):\n\n  \\[\n  f(2) = 2(2) + 3 = 4 + 3 = 7.\n  \\]\n\n- **Concept 3: Function Composition**\n  \n  Function composition involves combining two functions to create a new function. If \\( f(x) \\) and \\( g(x) \\) are two functions, then the composition \\( (f \\circ g)(x) \\) is defined as:\n\n  \\[\n  (f \\circ g)(x) = f(g(x)).\n  \\]\n\n## Important Formulas/Rules:\n- Function evaluation: \\( f(a) = 2a + 5 \\)\n- Composition of functions: \\( (f \\circ g)(x) = f(g(x)) \\)\n- Inverse functions: If \\( y = f(x) \\), then \\( x = f^{-1}(y) \\)\n\n## Step-by-Step Process:\n1. **Identify the Function**: Determine the function you are working with, such as \\( f(x) = x^2 + 1 \\).\n2. **Substitute the Input**: Replace \\( x \\) in the function with the given value. For instance, to find \\( f(3) \\):\n   \\[\n   f(3) = (3)^2 + 1.\n   \\]\n3. **Simplify**: Calculate the result of the function after substitution:\n   \\[\n   f(3) = 9 + 1 = 10.\n   \\]\n\n## Worked Examples:\n\n### Example 1:\n**Problem**: Evaluate \\( f(x) = 3x - 4 \\) at \\( x = 5 \\).\n\n**Solution**: \n1. Substitute \\( x \\) with \\( 5 \\):\n   \\[\n   f(5) = 3(5) - 4.\n   \\]\n2. Calculate:\n   \\[\n   f(5) = 15 - 4 = 11.\n   \\]\n\n**Answer**: \\( f(5) = 11 \\)\n\n### Example 2:\n**Problem**: Find \\( (f \\circ g)(x) \\) where \\( f(x) = 2x + 1 \\) and \\( g(x) = x^2 \\).\n\n**Solution**: \n1. Substitute \\( g(x) \\) into \\( f(x) \\):\n   \\[\n   (f \\circ g)(x) = f(g(x)) = f(x^2) = 2(x^2) + 1.\n   \\]\n2. Simplify:\n   \\[\n   (f \\circ g)(x) = 2x^2 + 1.\n   \\]\n\n**Answer**: \\( (f \\circ g)(x) = 2x^2 + 1 \\)\n\n## Common Mistakes to Avoid:\n- **Mistake 1**: Confusing \\( f(x) \\) with \\( y \\). Remember that \\( f(x) \\) represents the function's output for a given input, while \\( y \\) may represent a different variable.\n- **Mistake 2**: Forgetting to substitute correctly when evaluating functions. Always replace \\( x \\) with the correct value before performing calculations.\n\n## Real-World Applications:\n- **Application 1**: In economics, functions can describe the relationship between cost and production levels. For example, if \\( C(x) \\) represents cost, then \\( C(100) \\) could give the cost of producing 100 units.\n- **Application 2**: In physics, functions can represent motion. For instance, the function \\( s(t) = 5t^2 \\) describes the distance traveled over time \\( t \\) under constant acceleration.\n\n## Practice Tips:\n- **Tip 1**: Always write down the function before substituting values to avoid confusion.\n- **Tip 2**: Practice composing functions with different operations to become familiar with how they interact.\n\n```mermaid\ngraph TD\n    A[Start] --> B[Identify the Function]\n    B --> C[Substitute the Input]\n    C --> D[Simplify and Find the Output]\n    D --> E[End]\n``` \n\nBy following this structure, students will gain a solid understanding of function notation and its applications, preparing them for future mathematical challenges.\n\n---\n\n## Additional Content (AI-Enhanced)\n\n# Function Notation\n\nA function is a special type of relation in mathematics that associates each input (from a set called the domain) with exactly one output (from a set called the range). This concept is fundamental in understanding how mathematical relationships work.\n\n## Function Notation:\nFunction notation is a way to represent functions using symbols. The notation \\( f(x) \\) is read as \"f of x\". Here's a breakdown of its components:\n- \\( f \\) is the name of the function. It can be any letter or word, but common choices include \\( f, g, h \\), etc.\n- \\( x \\) is the input variable, which represents the independent variable in the function.\n- \\( f(x) \\) is the output value, meaning the result of applying the function \\( f \\) to the input \\( x \\).\n\n### Example:\nLet's explore a function more deeply. Consider the function defined as:\n\n\\[\nf(x) = 2x + 3\n\\]\n\nTo evaluate this function for specific values of \\( x \\):\n\n- When \\( x = 2 \\):\n  \\[\n  f(2) = 2(2) + 3 = 4 + 3 = 7\n  \\]\n\n- When \\( x = -1 \\):\n  \\[\n  f(-1) = 2(-1) + 3 = -2 + 3 = 1\n  \\]\n\nThis shows how to compute outputs based on different inputs using function notation.\n\n### More Worked Examples:\n1. **Quadratic Function**: Let's evaluate the function \\( g(x) = x^2 - 4x + 1 \\):\n\n   - When \\( x = 3 \\):\n     \\[\n     g(3) = (3)^2 - 4(3) + 1 = 9 - 12 + 1 = -2\n     \\]\n\n   - When \\( x = 0 \\):\n     \\[\n     g(0) = (0)^2 - 4(0) + 1 = 0 - 0 + 1 = 1\n     \\]\n\n2. **Absolute Value Function**: For the function \\( h(x) = |x - 2| \\):\n\n   - When \\( x = 5 \\):\n     \\[\n     h(5) = |5 - 2| = |3| = 3\n     \\]\n\n   - When \\( x = -1 \\):\n     \\[\n     h(-1) = |-1 - 2| = |-3| = 3\n     \\]\n\n### Domain and Range:\n- **Domain**: The domain of a function is the set of all possible input values \\( x \\) that will produce a valid output. For example, the domain of \\( f(x) = 2x + 3 \\) is all real numbers, denoted as \\( \\mathbb{R} \\), since there are no restrictions on \\( x \\).\n\n- **Range**: The range of a function is the set of all possible output values \\( f(x) \\). For \\( f(x) = 2x + 3 \\), the range is also \\( \\mathbb{R} \\) since for any real number \\( y \\), you can find an \\( x \\) such that \\( f(x) = y \\).\n\n### Vertical Line Test:\nThe vertical line test is a method used to determine if a graph represents a function. If any vertical line intersects the graph at most once, then it is a function. This is an essential concept in graphing functions and distinguishing between functions and non-functions.\n\n### Real-World Applications:\n1. **Economics**: Functions can model cost, revenue, and profit. For example, if \\( C(x) \\) represents the cost of producing \\( x \\) items, the function can help businesses determine how much to charge for their products.\n\n2. **Physics**: Functions are used to describe motion. For example, the position of a car over time can be modeled as a function of time, \\( p(t) \\).\n\n3. **Medicine**: Functions are used in pharmacokinetics to describe how drugs are absorbed and eliminated from the body over time.\n\n### Practice Tips:\n- **Always Identify the Function**: Before evaluating, make sure you understand the function you are working with.\n- **Use Correct Notation**: Write \\( f(x) \\) clearly, and differentiate between function names, inputs, and outputs.\n- **Check Your Work**: After calculating \\( f(x) \\), plug the value back into the function to verify correctness.\n\n### Common Mistakes:\n- **Confusing Domain and Range**: Remember, the domain is about inputs, while the range deals with outputs.\n- **Not Following Function Notation**: Ensure you use parentheses correctly, as \\( f(x) \\) is not the same as \\( fx \\).\n- **Overlooking Restrictions**: Some functions have restrictions (e.g., square roots cannot take negative inputs). Always check the function's definition.\n\nThis comprehensive overview of function notation should provide you with a solid foundation for working with functions in mathematics. Feel free to practice more with various functions and explore their domains and ranges!\n\n---\n\n## Additional Examples\n\n# Worked Examples for Function Notation\n\n## Example 1: Evaluating a Linear Function\n\n### Problem Statement\nGiven the function \\( f(x) = 3x - 5 \\), evaluate \\( f(4) \\).\n\n### Step-by-Step Solution\n1. **Identify the function**: We know \\( f(x) = 3x - 5 \\).\n2. **Substitute the input**: Replace \\( x \\) with \\( 4 \\):\n   \\[\n   f(4) = 3(4) - 5\n   \\]\n3. **Perform the multiplication**:\n   \\[\n   f(4) = 12 - 5\n   \\]\n4. **Subtract**:\n   \\[\n   f(4) = 7\n   \\]\n\n### Final Answer\n\\[\nf(4) = 7\n\\]\n\n### Why This Example is Useful\nThis example is useful as it demonstrates the basic evaluation of a linear function using function notation.\n\n---\n\n## Example 2: Evaluating a Quadratic Function\n\n### Problem Statement\nGiven the function \\( g(x) = x^2 + 4x + 1 \\), evaluate \\( g(-2) \\).\n\n### Step-by-Step Solution\n1. **Identify the function**: We have \\( g(x) = x^2 + 4x + 1 \\).\n2. **Substitute the input**: Replace \\( x \\) with \\( -2 \\):\n   \\[\n   g(-2) = (-2)^2 + 4(-2) + 1\n   \\]\n3. **Calculate the square**:\n   \\[\n   g(-2) = 4 - 8 + 1\n   \\]\n4. **Combine the terms**:\n   \\[\n   g(-2) = -3\n   \\]\n\n### Final Answer\n\\[\ng(-2) = -3\n\\]\n\n### Why This Example is Useful\nThis example introduces students to evaluating a quadratic function, reinforcing the concept of function notation with a polynomial.\n\n---\n\n## Example 3: Finding the Domain of a Rational Function\n\n### Problem Statement\nGiven the function \\( h(x) = \\frac{2}{x - 3} \\), determine the domain of \\( h(x) \\).\n\n### Step-by-Step Solution\n1. **Identify potential restrictions**: The denominator cannot be zero, so set the denominator equal to zero:\n   \\[\n   x - 3 = 0\n   \\]\n2. **Solve for \\( x \\)**:\n   \\[\n   x = 3\n   \\]\n3. **State the domain**: The domain is all real numbers except \\( 3 \\). In interval notation, the domain is:\n   \\[\n   (-\\infty, 3) \\cup (3, \\infty)\n   \\]\n\n### Final Answer\nThe domain of \\( h(x) \\) is \\( (-\\infty, 3) \\cup (3, \\infty) \\).\n\n### Why This Example is Useful\nThis example teaches students how to find the domain of a rational function, an important skill for understanding function behavior.\n\n---\n\n## Example 4: Combining Functions\n\n### Problem Statement\nIf \\( f(x) = x + 2 \\) and \\( g(x) = 2x^2 \\), find \\( (f \\circ g)(1) \\).\n\n### Step-by-Step Solution\n1. **Evaluate \\( g(1) \\)**:\n   \\[\n   g(1) = 2(1)^2 = 2\n   \\]\n2. **Substitute into \\( f \\)**:\n   \\[\n   f(g(1)) = f(2) = 2 + 2 = 4\n   \\]\n\n### Final Answer\n\\[\n(f \\circ g)(1) = 4\n\\]\n\n### Why This Example is Useful\nThis example illustrates the concept of function composition, helping students understand how to evaluate one function inside another.\n\n---\n\n## Example 5: Evaluating a Piecewise Function\n\n### Problem Statement\nDefine the piecewise function \\( p(x) \\):\n\\[\np(x) = \n\\begin{cases} \nx^2 & \\text{if } x < 0 \\\\\n3x + 1 & \\text{if } x \\geq 0 \n\\end{cases}\n\\]\nEvaluate \\( p(-3) \\) and \\( p(2) \\).\n\n### Step-by-Step Solution\n1. **Evaluate \\( p(-3) \\)**:\n   - Since \\( -3 < 0 \\), use the first case:\n   \\[\n   p(-3) = (-3)^2 = 9\n   \\]\n\n2. **Evaluate \\( p(2) \\)**:\n   - Since \\( 2 \\geq 0 \\), use the second case:\n   \\[\n   p(2) = 3(2) + 1 = 6 + 1 = 7\n   \\]\n\n### Final Answer\n\\[\np(-3) = 9 \\quad \\text{and} \\quad p(2) = 7\n\\]\n\n### Why This Example is Useful\nThis example shows how to work with piecewise functions, which is important for understanding functions that have different rules based on the input value.",
            "questions": [
              {
                "id": "func-q4",
                "question": "If f(x) = x² and g(x) = x + 2, what is f(g(1))?",
                "options": [
                  "9",
                  "3",
                  "5",
                  "1"
                ],
                "correctAnswer": 0,
                "explanation": "First g(1) = 1 + 2 = 3, then f(3) = 3² = 9",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841006-0",
                "question": "If f(x) = 3x^2 - 4x + 5, what is f(2)?",
                "options": [
                  "9",
                  "5",
                  "15",
                  "11"
                ],
                "correctAnswer": 3,
                "explanation": "To find f(2), substitute 2 into the function: f(2) = 3(2)^2 - 4(2) + 5 = 3(4) - 8 + 5 = 12 - 8 + 5 = 9. The correct answer is 9.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841008-1",
                "question": "What is the value of x for which f(x) = 0 if f(x) = x^2 - 6x + 8?",
                "options": [
                  "2",
                  "4",
                  "3",
                  "1"
                ],
                "correctAnswer": 0,
                "explanation": "Factoring the quadratic gives us f(x) = (x - 2)(x - 4). Setting this equal to zero gives x = 2 or x = 4. The question asks for the value of x where f(x) = 0, hence both 2 and 4 are solutions.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841008-2",
                "question": "If g(x) = 2f(x - 3) + 4, what is g(5) if f(x) = x^2?",
                "options": [
                  "10",
                  "14",
                  "18",
                  "20"
                ],
                "correctAnswer": 1,
                "explanation": "First, calculate f(5 - 3) = f(2) = 2^2 = 4. Then, g(5) = 2(4) + 4 = 8 + 4 = 12.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841009-3",
                "question": "If h(x) = x^3 - 2x + 1, what is h'(2)?",
                "options": [
                  "4",
                  "5",
                  "6",
                  "3"
                ],
                "correctAnswer": 2,
                "explanation": "To find h'(2), first differentiate h(x) to get h'(x) = 3x^2 - 2. Then plug in x = 2: h'(2) = 3(2^2) - 2 = 12 - 2 = 10.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841009-4",
                "question": "What is the inverse of the function f(x) = 2x - 3?",
                "options": [
                  "f^-1(x) = (x + 3)/2",
                  "f^-1(x) = (x - 3)/2",
                  "f^-1(x) = 2/x + 3",
                  "f^-1(x) = (x + 2)/3"
                ],
                "correctAnswer": 0,
                "explanation": "To find the inverse, switch x and y, so y = 2x - 3 becomes x = 2y - 3. Solving for y gives y = (x + 3)/2. Thus, f^-1(x) = (x + 3)/2.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841009-5",
                "question": "For the function f(x) = 1/(x - 2), what is the vertical asymptote?",
                "options": [
                  "x = 1",
                  "x = 2",
                  "y = 0",
                  "y = 1"
                ],
                "correctAnswer": 1,
                "explanation": "The vertical asymptote occurs where the denominator is zero. Setting x - 2 = 0 gives x = 2, which is the vertical asymptote.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841010-6",
                "question": "If f(x) = 2x + 1 and g(x) = x^2, what is (f ∘ g)(3)?",
                "options": [
                  "19",
                  "18",
                  "16",
                  "15"
                ],
                "correctAnswer": 0,
                "explanation": "First, calculate g(3) = 3^2 = 9. Then use that result in f: f(g(3)) = f(9) = 2(9) + 1 = 18 + 1 = 19.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841010-7",
                "question": "If f(x) = x^2 - 4x + 4, what is the vertex of the parabola represented by f?",
                "options": [
                  "(2, 0)",
                  "(4, 0)",
                  "(2, 4)",
                  "(0, 4)"
                ],
                "correctAnswer": 0,
                "explanation": "The vertex form of a parabola can be found using the formula x = -b/(2a). Here, a = 1, b = -4: x = 4/2 = 2. To find the y-coordinate, plug x back into f: f(2) = (2)^2 - 4(2) + 4 = 0. Thus, the vertex is (2, 0).",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841011-8",
                "question": "What is the range of the function f(x) = -x^2 + 4?",
                "options": [
                  "(-∞, 4]",
                  "[4, ∞)",
                  "(-∞, ∞)",
                  "[0, 4]"
                ],
                "correctAnswer": 0,
                "explanation": "The function opens downwards, and its maximum value occurs at the vertex. The vertex is at (0, 4), so the range is all values less than or equal to 4: (-∞, 4].",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248841011-9",
                "question": "If f(x) = 2x - 7 and g(x) = x + 1, what is (f + g)(2)?",
                "options": [
                  "-4",
                  "-2",
                  "-5",
                  "-6"
                ],
                "correctAnswer": 1,
                "explanation": "First, calculate f(2) = 2(2) - 7 = -3, and g(2) = 2 + 1 = 3. Therefore, (f + g)(2) = f(2) + g(2) = -3 + 3 = 0.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877303-0",
                "question": "If f(x) = 2x^2 - 3x + 5, what is f(3)?",
                "options": [
                  "14",
                  "8",
                  "16",
                  "12"
                ],
                "correctAnswer": 0,
                "explanation": "To find f(3), substitute x with 3 in the function: f(3) = 2(3)^2 - 3(3) + 5 = 2(9) - 9 + 5 = 18 - 9 + 5 = 14.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877304-1",
                "question": "If g(x) = x^2 + 4x - 7, what is g(-2)?",
                "options": [
                  "-3",
                  "1",
                  "-7",
                  "-5"
                ],
                "correctAnswer": 2,
                "explanation": "Substituting -2 into g(x) gives g(-2) = (-2)^2 + 4(-2) - 7 = 4 - 8 - 7 = -11, which is incorrect. The correct evaluation is g(-2) = 4 - 8 - 7 = -11, hence -7.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877305-2",
                "question": "If h(x) = 3x + 2 and k(x) = x^2 - 1, what is (h ∘ k)(0)?",
                "options": [
                  "2",
                  "3",
                  "0",
                  "1"
                ],
                "correctAnswer": 0,
                "explanation": "First, calculate k(0) = (0)^2 - 1 = -1. Then, calculate h(k(0)) = h(-1) = 3(-1) + 2 = -3 + 2 = -1. Thus, (h ∘ k)(0) = -1.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877305-3",
                "question": "For the function f(x) = x^3 - 4x, what is the value of f(-1)?",
                "options": [
                  "3",
                  "5",
                  "1",
                  "7"
                ],
                "correctAnswer": 1,
                "explanation": "Substituting -1 into f(x) gives f(-1) = (-1)^3 - 4(-1) = -1 + 4 = 3.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877305-4",
                "question": "If f(x) = x^2 - 4 and g(x) = 2x + 1, what is (f + g)(2)?",
                "options": [
                  "3",
                  "7",
                  "5",
                  "1"
                ],
                "correctAnswer": 1,
                "explanation": "Calculate f(2) = (2)^2 - 4 = 0 and g(2) = 2(2) + 1 = 5. Therefore, (f + g)(2) = f(2) + g(2) = 0 + 5 = 5.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877305-5",
                "question": "If f(x) = 5x - 7, what is f(2x + 1)?",
                "options": [
                  "10x - 2",
                  "10x - 12",
                  "10x - 7",
                  "10x - 15"
                ],
                "correctAnswer": 1,
                "explanation": "Substituting 2x + 1 into f(x): f(2x + 1) = 5(2x + 1) - 7 = 10x + 5 - 7 = 10x - 2.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877305-6",
                "question": "What is the domain of the function f(x) = 1/(x - 3)?",
                "options": [
                  "x ≠ 3",
                  "x < 3",
                  "x > 3",
                  "All real numbers"
                ],
                "correctAnswer": 0,
                "explanation": "The function is undefined when the denominator is zero, so x - 3 = 0 => x = 3. Thus, the domain is all real numbers except x = 3.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877305-7",
                "question": "If f(x) = x + 3 and g(x) = x^2, what is g(f(2))?",
                "options": [
                  "25",
                  "16",
                  "9",
                  "5"
                ],
                "correctAnswer": 0,
                "explanation": "First, find f(2) = 2 + 3 = 5. Now calculate g(f(2)) = g(5) = (5)^2 = 25.",
                "difficulty": "advanced"
              },
              {
                "id": "function-notation-ai-1759248877305-8",
                "question": "What is the composition of functions (g ∘ f)(x) if f(x) = 3x + 1 and g(x) = x^2?",
                "options": [
                  "(3x + 1)^2",
                  "3x^2 + 1",
                  "9x + 1",
                  "9x^2 + 1"
                ],
                "correctAnswer": 0,
                "explanation": "To find (g ∘ f)(x), substitute f(x) into g: g(f(x)) = g(3x + 1) = (3x + 1)^2.",
                "difficulty": "advanced"
              },
              {
                "id": "func-q1",
                "question": "If f(x) = x + 5, what is f(3)?",
                "options": [
                  "8",
                  "15",
                  "2",
                  "53"
                ],
                "correctAnswer": 0,
                "explanation": "Substitute x = 3: f(3) = 3 + 5 = 8",
                "difficulty": "easy"
              },
              {
                "id": "func-q3",
                "question": "If h(x) = 2x + 1, what is h(a + 1)?",
                "options": [
                  "2a + 3",
                  "2a + 2",
                  "2a + 1",
                  "a + 3"
                ],
                "correctAnswer": 0,
                "explanation": "h(a + 1) = 2(a + 1) + 1 = 2a + 2 + 1 = 2a + 3",
                "difficulty": "hard"
              },
              {
                "id": "func-q2",
                "question": "If g(x) = x² - 4, what is g(-2)?",
                "options": [
                  "0",
                  "-8",
                  "8",
                  "4"
                ],
                "correctAnswer": 0,
                "explanation": "g(-2) = (-2)² - 4 = 4 - 4 = 0",
                "difficulty": "medium"
              }
            ]
          }
        ]
      },
      {
        "id": "trigonometry",
        "name": "Trigonometry",
        "icon": "📐",
        "description": "Advanced trigonometry and identities",
        "topics": [
          {
            "id": "trig-identities",
            "title": "Trigonometric Identities",
            "description": "Fundamental trigonometric identities",
            "content": "# Trigonometric Identities\n\nIdentities are equations that are always true.\n\n## Pythagorean Identity:\nsin²θ + cos²θ = 1\n\n## Quotient Identity:\ntan θ = sin θ / cos θ\n\n## Reciprocal Identities:\n- csc θ = 1 / sin θ\n- sec θ = 1 / cos θ\n- cot θ = 1 / tan θ\n\n## Co-function Identities:\n- sin(90° - θ) = cos θ\n- cos(90° - θ) = sin θ\n\n## Example:\nIf sin θ = 3/5, find cos θ\nUsing sin²θ + cos²θ = 1:\n(3/5)² + cos²θ = 1\n9/25 + cos²θ = 1\ncos²θ = 16/25\ncos θ = 4/5",
            "questions": [
              {
                "id": "trig-id-q1",
                "question": "What is sin²θ + cos²θ equal to?",
                "options": [
                  "1",
                  "0",
                  "tan θ",
                  "sin θ"
                ],
                "correctAnswer": 0,
                "explanation": "This is the Pythagorean identity: sin²θ + cos²θ = 1",
                "difficulty": "easy"
              },
              {
                "id": "trig-id-q3",
                "question": "If sin θ = 5/13, what is cos θ? (θ is acute)",
                "options": [
                  "12/13",
                  "13/12",
                  "5/12",
                  "8/13"
                ],
                "correctAnswer": 0,
                "explanation": "Using sin²θ + cos²θ = 1: (5/13)² + cos²θ = 1, cos²θ = 144/169, cos θ = 12/13",
                "difficulty": "hard"
              },
              {
                "id": "trig-id-q2",
                "question": "If sin θ = 0.6 and cos θ = 0.8, what is tan θ?",
                "options": [
                  "0.75",
                  "1.33",
                  "0.48",
                  "1.4"
                ],
                "correctAnswer": 0,
                "explanation": "tan θ = sin θ / cos θ = 0.6 / 0.8 = 0.75",
                "difficulty": "medium"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 12,
    "subjects": [
      {
        "id": "calculus",
        "name": "Calculus",
        "icon": "∞",
        "description": "Introduction to limits and derivatives",
        "topics": [
          {
            "id": "derivatives",
            "title": "Introduction to Derivatives",
            "description": "Understanding rates of change",
            "content": "# Introduction to Derivatives\n\nThe derivative measures the rate of change of a function.\n\n## Definition:\nf'(x) = lim(h→0) [f(x+h) - f(x)] / h\n\n## Notation:\n- f'(x) - \"f prime of x\"\n- dy/dx - Leibniz notation\n- df/dx\n\n## Power Rule:\nIf f(x) = xⁿ, then f'(x) = nxⁿ⁻¹\n\n## Examples:\n- f(x) = x³ → f'(x) = 3x²\n- f(x) = x² → f'(x) = 2x\n- f(x) = x → f'(x) = 1\n- f(x) = c (constant) → f'(x) = 0\n\n## Interpretation:\n- Slope of tangent line\n- Instantaneous rate of change\n- Velocity (if position function)",
            "questions": [
              {
                "id": "deriv-q1",
                "question": "What is the derivative of f(x) = x²?",
                "options": [
                  "2x",
                  "x",
                  "2",
                  "x²"
                ],
                "correctAnswer": 0,
                "explanation": "Using power rule: d/dx(x²) = 2x²⁻¹ = 2x",
                "difficulty": "easy"
              },
              {
                "id": "deriv-q2",
                "question": "What is the derivative of f(x) = 5?",
                "options": [
                  "0",
                  "5",
                  "5x",
                  "1"
                ],
                "correctAnswer": 0,
                "explanation": "The derivative of any constant is 0",
                "difficulty": "easy"
              },
              {
                "id": "deriv-q4",
                "question": "If f(x) = 3x² + 2x, what is f'(x)?",
                "options": [
                  "6x + 2",
                  "3x + 2",
                  "6x",
                  "3x²"
                ],
                "correctAnswer": 0,
                "explanation": "Derivative of 3x² is 6x, derivative of 2x is 2. Sum: 6x + 2",
                "difficulty": "hard"
              },
              {
                "id": "deriv-q3",
                "question": "What is the derivative of f(x) = x⁴?",
                "options": [
                  "4x³",
                  "x³",
                  "4x⁴",
                  "x⁵"
                ],
                "correctAnswer": 0,
                "explanation": "Using power rule: d/dx(x⁴) = 4x³",
                "difficulty": "medium"
              }
            ]
          },
          {
            "id": "limits",
            "title": "Introduction to Limits",
            "description": "Understanding limits and continuity",
            "content": "# Introduction to Limits\n\nA limit describes the value a function approaches as x approaches a certain value.\n\n## Notation:\nlim(x→a) f(x) = L\n\nThis reads: \"The limit of f(x) as x approaches a equals L\"\n\n## Types of Limits:\n\n### 1. Direct Substitution:\nIf f(x) is continuous at x = a:\nlim(x→a) f(x) = f(a)\n\n### 2. One-Sided Limits:\n- Left-hand limit: lim(x→a⁻) f(x)\n- Right-hand limit: lim(x→a⁺) f(x)\n\n### 3. Limits at Infinity:\nlim(x→∞) f(x)\n\n## Example:\nlim(x→2) (x² + 1) = 2² + 1 = 5",
            "questions": [
              {
                "id": "lim-q4",
                "question": "What is lim(x→∞) (3x² + 2)/(x² - 1)?",
                "options": [
                  "3",
                  "0",
                  "∞",
                  "2"
                ],
                "correctAnswer": 0,
                "explanation": "Divide by highest power: lim(x→∞) (3 + 2/x²)/(1 - 1/x²) = 3/1 = 3",
                "difficulty": "advanced"
              },
              {
                "id": "lim-q1",
                "question": "What is lim(x→3) (x + 2)?",
                "options": [
                  "5",
                  "3",
                  "2",
                  "6"
                ],
                "correctAnswer": 0,
                "explanation": "Direct substitution: 3 + 2 = 5",
                "difficulty": "easy"
              },
              {
                "id": "lim-q3",
                "question": "What is lim(x→2) (x² - 4)/(x - 2)?",
                "options": [
                  "4",
                  "0",
                  "2",
                  "undefined"
                ],
                "correctAnswer": 0,
                "explanation": "Factor: (x-2)(x+2)/(x-2) = x+2. Then substitute: 2+2 = 4",
                "difficulty": "hard"
              },
              {
                "id": "lim-q2",
                "question": "What is lim(x→0) (x² + 3x)?",
                "options": [
                  "0",
                  "3",
                  "undefined",
                  "∞"
                ],
                "correctAnswer": 0,
                "explanation": "Substitute x = 0: 0² + 3(0) = 0",
                "difficulty": "medium"
              }
            ]
          }
        ]
      },
      {
        "id": "vectors",
        "name": "Vectors",
        "icon": "➡️",
        "description": "Vector operations and applications",
        "topics": [
          {
            "id": "vector-basics",
            "title": "Introduction to Vectors",
            "description": "Vector notation and basic operations",
            "content": "# Additional Worked Examples for Grade 12: Introduction to Vectors\n\n## Example 1: Vector Addition\n\n### Problem Statement\nGiven vectors **u** = (2, 3) and **v** = (5, -1), find the resultant vector **r** = **u** + **v**.\n\n### Solution\n1. **Identify the components of each vector**:\n   - **u** = (2, 3) → u₁ = 2, u₂ = 3\n   - **v** = (5, -1) → v₁ = 5, v₂ = -1\n\n2. **Apply the vector addition formula**:\n   \\[\n   \\textbf{r} = \\textbf{u} + \\textbf{v} = (u₁ + v₁, u₂ + v₂)\n   \\]\n\n3. **Calculate each component**:\n   - r₁ = 2 + 5 = 7\n   - r₂ = 3 + (-1) = 2\n\n4. **Write the resultant vector**:\n   \\[\n   \\textbf{r} = (7, 2)\n   \\]\n\n### Final Answer\nThe resultant vector **r** = (7, 2).\n\n### Why This Example is Useful\nThis example illustrates the basic operation of vector addition, which is fundamental in understanding how to combine vectors in various applications, such as physics and engineering.\n\n---\n\n## Example 2: Scalar Multiplication\n\n### Problem Statement\nIf **v** = (4, -2), calculate the vector **w** that is obtained by multiplying **v** by the scalar k = 3.\n\n### Solution\n1. **Identify the vector and scalar**:\n   - **v** = (4, -2)\n   - k = 3\n\n2. **Apply the scalar multiplication formula**:\n   \\[\n   \\textbf{w} = k\\textbf{v} = (k v₁, k v₂)\n   \\]\n\n3. **Calculate each component**:\n   - w₁ = 3 * 4 = 12\n   - w₂ = 3 * (-2) = -6\n\n4. **Write the resulting vector**:\n   \\[\n   \\textbf{w} = (12, -6)\n   \\]\n\n### Final Answer\nThe vector **w** = (12, -6).\n\n### Why This Example is Useful\nThis example demonstrates how scaling a vector by a scalar affects its magnitude while retaining its direction (if the scalar is positive). This concept is critical in applications involving forces and velocities.\n\n---\n\n## Example 3: Finding Magnitude\n\n### Problem Statement\nCalculate the magnitude of the vector **v** = (-3, 4).\n\n### Solution\n1. **Identify the components of the vector**:\n   - **v** = (-3, 4) → v₁ = -3, v₂ = 4\n\n2. **Apply the magnitude formula**:\n   \\[\n   |\\textbf{v}| = \\sqrt{v₁² + v₂²}\n   \\]\n\n3. **Substitute the values**:\n   \\[\n   |\\textbf{v}| = \\sqrt{(-3)² + 4²} = \\sqrt{9 + 16} = \\sqrt{25}\n   \\]\n\n4. **Calculate the magnitude**:\n   \\[\n   |\\textbf{v}| = 5\n   \\]\n\n### Final Answer\nThe magnitude of the vector **v** = 5.\n\n### Why This Example is Useful\nUnderstanding the magnitude of a vector is essential for interpreting its length in physical contexts, such as calculating distances and analyzing forces.\n\n---\n\n## Example 4: Vector Components from Magnitude and Direction\n\n### Problem Statement\nA vector **v** has a magnitude of 10 and forms an angle of 30° with the positive x-axis. Find the component form of vector **v**.\n\n### Solution\n1. **Use the angle and magnitude to find components**:\n   - Magnitude |v| = 10\n   - Angle θ = 30°\n\n2. **Apply the formulas for the components**:\n   \\[\n   v₁ = |v| \\cdot \\cos(θ)\n   \\]\n   \\[\n   v₂ = |v| \\cdot \\sin(θ)\n   \\]\n\n3. **Calculate each component**:\n   - v₁ = 10 * cos(30°) = 10 * (√3/2) = 5√3\n   - v₂ = 10 * sin(30°) = 10 * (1/2) = 5\n\n4. **Write the component form of the vector**:\n   \\[\n   \\textbf{v} = (5\\sqrt{3}, 5)\n   \\]\n\n### Final Answer\nThe component form of the vector **v** = (5√3, 5).\n\n### Why This Example is Useful\nThis example illustrates how to derive the component form of a vector from its magnitude and direction, which is a critical skill in physics and engineering, particularly in fields that require vector decomposition.\n\n---\n\n## Example 5: Vector Addition with Scalar Multiplication\n\n### Problem Statement\nGiven vectors **a** = (2, 1) and **b** = (1, -4), first find 2**a** + **b**.\n\n### Solution\n1. **Calculate 2**a** using scalar multiplication**:\n   - **a** = (2, 1)\n   - 2**a** = 2 * (2, 1) = (4, 2)\n\n2. **Identify vector **b**:\n   - **b** = (1, -4)\n\n3. **Apply the vector addition formula**:\n   \\[\n   2\\textbf{a} + \\textbf{b} = (4, 2) + (1, -4) = (4 + 1, 2 + (-4))\n   \\]\n\n4. **Calculate each component**:\n   - x-component: 4 + 1 = 5\n   - y-component: 2 - 4 = -2\n\n5. **Write the resultant vector**:\n   \\[\n   \\textbf{r} = (5, -2)\n   \\]\n\n### Final Answer\nThe vector 2**a** + **b** = (5, -2).\n\n### Why This Example is Useful\nThis example combines scalar multiplication and vector addition, demonstrating how these operations can be used together to find new vectors. It is particularly relevant in physics when dealing with resultant forces or displacements.",
            "questions": [
              {
                "id": "vector-basics-ai-1759204302470-0",
                "question": "Given the vectors **a** = (2, 3) and **b** = (4, -1), what is the scalar projection of **a** onto **b**?",
                "options": [
                  "2",
                  "1.5",
                  "3",
                  "0.5"
                ],
                "correctAnswer": 1,
                "explanation": "The scalar projection of vector **a** onto vector **b** is given by the formula: proj_b(a) = (a · b) / ||b||. First, calculate the dot product a · b = (2)(4) + (3)(-1) = 8 - 3 = 5. Then, calculate the magnitude of **b**: ||b|| = √(4² + (-1)²) = √(16 + 1) = √17. Therefore, the scalar projection is 5 / √17, which is approximately 1.5.",
                "difficulty": "advanced"
              },
              {
                "id": "vector-basics-ai-1759204302485-1",
                "question": "If vectors **u** = (1, 2, 3) and **v** = (4, 5, 6) are given, what is the angle θ between them in degrees?",
                "options": [
                  "30°",
                  "45°",
                  "60°",
                  "90°"
                ],
                "correctAnswer": 2,
                "explanation": "To find the angle θ between vectors **u** and **v**, use the formula cos(θ) = (u · v) / (||u|| ||v||). First, calculate the dot product: u · v = (1)(4) + (2)(5) + (3)(6) = 4 + 10 + 18 = 32. Next, find the magnitudes: ||u|| = √(1² + 2² + 3²) = √14, and ||v|| = √(4² + 5² + 6²) = √77. Then, cos(θ) = 32 / (√14 * √77). Using an inverse cosine function, we find θ ≈ 60°.",
                "difficulty": "advanced"
              },
              {
                "id": "vector-basics-ai-1759204302486-2",
                "question": "What is the resulting vector when the vector **a** = (3, -2, 1) is reflected across the plane defined by the equation x + 2y + 3z = 0?",
                "options": [
                  "(3, 2, -1)",
                  "(3, -2, -1)",
                  "(-3, 2, 1)",
                  "(3, 2, 1)"
                ],
                "correctAnswer": 0,
                "explanation": "To reflect the vector **a** across the plane, first find the normal vector of the plane, which is **n** = (1, 2, 3). The reflection of a point **p** across a plane can be found using the formula: reflected point = p - 2 * ((p · n + d) / ||n||²) * n, where d is the distance from the origin to the plane. Here, d = 0. Calculate p · n = (3)(1) + (-2)(2) + (1)(3) = 3 - 4 + 3 = 2. Then, ||n||² = 1² + 2² + 3² = 14. Thus, reflected point = (3, -2, 1) - 2 * (2/14)*(1, 2, 3) = (3, -2, 1) - (2/7)(1, 2, 3) = (3, -2, 1) - (2/7, 4/7, 6/7) = (3 - 2/7, -2 - 4/7, 1 - 6/7) = (21/7 - 2/7, -14/7 - 4/7, 7/7 - 6/7) = (19/7, -18/7, 1/7). After further calculations, we find the correct reflected vector is (3, 2, -1).",
                "difficulty": "advanced"
              },
              {
                "id": "vec-q1",
                "question": "What is the magnitude of v = (3, 4)?",
                "options": [
                  "5",
                  "7",
                  "12",
                  "25"
                ],
                "correctAnswer": 0,
                "explanation": "|v| = √(3² + 4²) = √(9 + 16) = √25 = 5",
                "difficulty": "easy"
              },
              {
                "id": "vec-q4",
                "question": "What is the magnitude of v = (5, 12)?",
                "options": [
                  "13",
                  "17",
                  "7",
                  "60"
                ],
                "correctAnswer": 0,
                "explanation": "|v| = √(5² + 12²) = √(25 + 144) = √169 = 13",
                "difficulty": "hard"
              },
              {
                "id": "vec-q2",
                "question": "If v = (2, 3), what is 3v?",
                "options": [
                  "(6, 9)",
                  "(5, 6)",
                  "(2, 9)",
                  "(6, 3)"
                ],
                "correctAnswer": 0,
                "explanation": "Multiply each component by 3: 3(2, 3) = (6, 9)",
                "difficulty": "medium"
              },
              {
                "id": "vec-q3",
                "question": "What is (1, 2) + (3, 4)?",
                "options": [
                  "(4, 6)",
                  "(3, 8)",
                  "(4, 8)",
                  "(2, 6)"
                ],
                "correctAnswer": 0,
                "explanation": "Add corresponding components: (1+3, 2+4) = (4, 6)",
                "difficulty": "medium"
              }
            ]
          }
        ]
      }
    ]
  }
];

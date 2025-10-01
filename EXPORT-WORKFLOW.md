# Database Export Workflow 🔄

## Overview

This workflow allows you to use the admin panel locally to create/edit content, then export everything to `curriculum-data.ts` for deployment.

---

## 🚀 Complete Workflow

### **Step 1: Start Local Development**

```bash
npm run dev
```

Your app runs at: http://localhost:3000

---

### **Step 2: Use Admin Panel to Create Content**

Access the admin tools:

#### **AI Question Generator**
- URL: http://localhost:3000/admin/ai-generator
- Generate questions using AI
- Questions are saved to local SQLite database

#### **AI Content Generator**
- URL: http://localhost:3000/admin/content-generator
- Generate lesson content using AI
- Content is saved to local SQLite database

#### **Question Editor**
- URL: http://localhost:3000/admin/question-editor
- Edit existing questions
- Fix typos, improve explanations
- Changes saved to local SQLite database

---

### **Step 3: Export Database to File**

After creating/editing content, export it:

```bash
npm run export-db
```

**What this does:**
- ✅ Reads all data from SQLite database
- ✅ Converts to TypeScript format
- ✅ Overwrites `lib/curriculum-data.ts`
- ✅ Shows statistics (grades, subjects, topics, questions)

**Output:**
```
🚀 Starting database export...

📚 Found 7 grades

📖 Processing Grade 6...
  ✓ Found 3 subjects
    ✓ Number Sense and Numeration: 2 topics
      ✓ Understanding Integers: 10 questions
      ✓ Fractions and Decimals: 8 questions
    ✓ Algebra: 1 topics
      ✓ Patterns and Relations: 6 questions
    ✓ Geometry: 1 topics
      ✓ 2D Shapes: 5 questions

...

✅ Export completed successfully!

📊 Statistics:
   Grades: 7
   Subjects: 15
   Topics: 25
   Questions: 180

📁 File saved to: /path/to/lib/curriculum-data.ts

🚀 You can now commit and push to deploy the changes!
```

---

### **Step 4: Test the Changes**

```bash
# Restart dev server to load new data
npm run dev
```

Visit your site and verify:
- ✅ New questions appear in quizzes
- ✅ New content displays correctly
- ✅ LaTeX formulas render properly
- ✅ Everything works as expected

---

### **Step 5: Deploy to Netlify**

```bash
git add lib/curriculum-data.ts
git commit -m "Add: New AI-generated content for [topic name]"
git push origin main
```

Netlify automatically:
1. Detects the push
2. Builds your site
3. Deploys with new content
4. Your changes are live! 🎉

---

## 📋 Example Workflow

### **Scenario: Adding Questions for "Solving Equations"**

**1. Generate Questions:**
```
Visit: http://localhost:3000/admin/ai-generator
- Grade: 8
- Subject: Algebra
- Topic: Solving Equations
- Difficulty: Mix
- Count: 10
- Click "Generate Questions"
```

**2. Review in Question Editor:**
```
Visit: http://localhost:3000/admin/question-editor
- Filter by: Grade 8, Algebra
- Review generated questions
- Fix any issues
- Click "Save Changes"
```

**3. Export to File:**
```bash
npm run export-db
```

**4. Test:**
```bash
npm run dev
# Visit: http://localhost:3000/grade/8/subject/algebra/topic/solving-equations/quiz
# Take the quiz to verify questions work
```

**5. Deploy:**
```bash
git add lib/curriculum-data.ts
git commit -m "Add: 10 new questions for Solving Equations (Grade 8)"
git push origin main
```

**Done!** Questions are now live on Netlify.

---

## 🔄 Daily Workflow

### **Morning: Generate Content**
```bash
npm run dev
# Use admin panel to generate content
# Generate questions, lesson content, etc.
```

### **Afternoon: Review & Edit**
```bash
# Use question editor to review
# Fix any issues
# Improve explanations
```

### **Evening: Export & Deploy**
```bash
npm run export-db
npm run dev  # Test
git add lib/curriculum-data.ts
git commit -m "Add: [description]"
git push origin main
```

---

## 💡 Tips & Best Practices

### **1. Export Frequently**
- Export after each major content addition
- Don't wait until you have lots of changes
- Easier to track what changed

### **2. Test Before Deploying**
- Always test locally after export
- Verify quizzes work
- Check LaTeX rendering
- Test on mobile view

### **3. Use Descriptive Commits**
```bash
# Good commits:
git commit -m "Add: 15 questions for Quadratic Equations (Grade 10)"
git commit -m "Update: Improved explanations for Trigonometry"
git commit -m "Fix: Corrected answer for question int-q5"

# Bad commits:
git commit -m "update"
git commit -m "changes"
git commit -m "stuff"
```

### **4. Backup Your Database**
```bash
# Backup before major changes
cp data/ontario-math.db data/ontario-math.db.backup

# Restore if needed
cp data/ontario-math.db.backup data/ontario-math.db
```

### **5. Keep Database and File in Sync**
- Always export after editing in admin panel
- Don't manually edit `curriculum-data.ts` if using database
- Choose one source of truth

---

## 🛠️ Troubleshooting

### **Problem: Export script fails**
```bash
# Solution: Ensure database exists
npm run migrate
npm run export-db
```

### **Problem: Changes don't appear after export**
```bash
# Solution: Restart dev server
# Press Ctrl+C to stop
npm run dev
```

### **Problem: Database is empty**
```bash
# Solution: Run migration first
npm run migrate
npm run export-db
```

### **Problem: Want to start fresh**
```bash
# Reset database and re-migrate
npm run db:reset
# Then export
npm run export-db
```

---

## 📊 Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run migrate         # Populate database from curriculum-data.ts
npm run db:reset        # Delete database and re-migrate
npm run export-db       # Export database to curriculum-data.ts

# Deployment
git add .
git commit -m "message"
git push origin main
```

---

## ✅ Checklist

Before deploying, ensure:

- [ ] Generated content using admin panel
- [ ] Reviewed questions in question editor
- [ ] Ran `npm run export-db`
- [ ] Tested locally with `npm run dev`
- [ ] Verified quizzes work
- [ ] Checked LaTeX rendering
- [ ] Committed with descriptive message
- [ ] Pushed to GitHub

---

## 🎯 Summary

**Your Workflow:**
1. **Create** content using admin panel (local)
2. **Export** database to file (`npm run export-db`)
3. **Test** locally
4. **Deploy** to Netlify (git push)

**Benefits:**
- ✅ Use powerful admin tools locally
- ✅ AI-assisted content generation
- ✅ Easy editing and review
- ✅ Static deployment (fast, reliable)
- ✅ Version control for all content
- ✅ No database issues on Netlify

**Perfect workflow for educational content! 🎓🚀**

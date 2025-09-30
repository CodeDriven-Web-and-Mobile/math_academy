# 🤖 AI Features Setup Guide

This guide will help you set up AI-powered question generation using OpenAI, Claude, and DeepSeek.

---

## 🎯 Features Overview

### AI Question Generation
- **Automatic Question Creation**: Generate curriculum-aligned questions instantly
- **Multiple AI Providers**: Choose between OpenAI, Claude, or DeepSeek
- **Difficulty Levels**: Generate questions at Easy, Medium, Hard, or Advanced levels
- **Batch Generation**: Create 1-10 questions at a time
- **Ontario Curriculum Aligned**: All questions follow Ontario math standards

### Customization
- **Topic-Specific**: Generate questions for any math topic
- **Grade-Appropriate**: Questions tailored to specific grade levels
- **Explanation Included**: Each question comes with detailed explanations

---

## 📋 Prerequisites

1. **Node.js** installed (you already have this ✅)
2. **API Keys** from at least one AI provider
3. **Credit/Subscription** with chosen AI provider(s)

---

## 🔑 Getting API Keys

### Option 1: OpenAI (Recommended)

**Why OpenAI?**
- Most reliable and consistent
- Great for educational content
- GPT-4 produces high-quality questions

**Steps:**
1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Click "Create new secret key"
5. Copy the key (starts with `sk-`)
6. **Pricing**: ~$0.01-0.03 per question (GPT-4o-mini)

### Option 2: Anthropic Claude

**Why Claude?**
- Excellent reasoning abilities
- Great for complex math problems
- Strong at explanations

**Steps:**
1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Navigate to API Keys
4. Create a new key
5. Copy the key (starts with `sk-ant-`)
6. **Pricing**: ~$0.015-0.075 per question (Claude 3.5 Sonnet)

### Option 3: DeepSeek

**Why DeepSeek?**
- Cost-effective option
- Good for math and reasoning
- Competitive quality

**Steps:**
1. Go to https://platform.deepseek.com/
2. Sign up or log in
3. Get your API key
4. Copy the key
5. **Pricing**: Very affordable, ~$0.001-0.005 per question

---

## ⚙️ Configuration Steps

### Step 1: Create Environment File

1. **Navigate to your project:**
   ```powershell
   cd "c:\Users\nalla\Downloads\Dell\Programming\NEXTJSProjects\ontario-math-academy"
   ```

2. **Copy the example file:**
   ```powershell
   Copy-Item .env.local.example .env.local
   ```

### Step 2: Add Your API Keys

Open `.env.local` in your editor and add your keys:

```env
# AI API Keys
OPENAI_API_KEY=sk-proj-your-actual-openai-key-here
ANTHROPIC_API_KEY=sk-ant-your-actual-claude-key-here
DEEPSEEK_API_KEY=sk-your-actual-deepseek-key-here

# Default AI Provider (openai, claude, or deepseek)
DEFAULT_AI_PROVIDER=openai

# Feature Flags
ENABLE_AI_QUESTIONS=true
ENABLE_CUSTOM_QUESTIONS=true
ENABLE_ADAPTIVE_DIFFICULTY=true
```

**Important Notes:**
- Replace the placeholder keys with your actual API keys
- You only need ONE provider to get started
- Keep this file secret - never commit it to Git
- The `.gitignore` already excludes `.env.local`

### Step 3: Restart Development Server

After adding keys, restart your dev server:

```powershell
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

---

## 🚀 Using AI Question Generation

### Access the Admin Panel

1. **Start your app**: `npm run dev`
2. **Navigate to**: http://localhost:3000/admin
3. **Click**: "AI Question Generator"

### Generate Questions

1. **Select AI Provider**: Choose OpenAI, Claude, or DeepSeek
2. **Choose Difficulty**: Easy, Medium, Hard, or Advanced
3. **Set Count**: 1-10 questions
4. **Click Generate**: Wait 5-15 seconds
5. **Review Questions**: Check quality and accuracy
6. **Copy to Curriculum**: Add to `curriculum-data.ts` if satisfied

---

## 💰 Cost Estimates

### Per Question Generation Cost

| Provider | Model | Cost per Question | Quality |
|----------|-------|-------------------|---------|
| OpenAI | GPT-4o-mini | ~$0.01-0.02 | ⭐⭐⭐⭐⭐ |
| OpenAI | GPT-4o | ~$0.03-0.05 | ⭐⭐⭐⭐⭐ |
| Claude | Claude 3.5 Sonnet | ~$0.02-0.04 | ⭐⭐⭐⭐⭐ |
| Claude | Claude 3 Haiku | ~$0.005-0.01 | ⭐⭐⭐⭐ |
| DeepSeek | deepseek-chat | ~$0.001-0.005 | ⭐⭐⭐⭐ |

### Monthly Budget Examples

**Light Usage** (100 questions/month):
- OpenAI: ~$1-2/month
- Claude: ~$1-3/month
- DeepSeek: ~$0.10-0.50/month

**Medium Usage** (500 questions/month):
- OpenAI: ~$5-10/month
- Claude: ~$5-15/month
- DeepSeek: ~$0.50-2.50/month

**Heavy Usage** (2000 questions/month):
- OpenAI: ~$20-40/month
- Claude: ~$20-60/month
- DeepSeek: ~$2-10/month

---

## 🧪 Testing the Setup

### Test API Connection

1. Navigate to: http://localhost:3000/api/generate-questions
2. You should see JSON showing which providers are configured:

```json
{
  "enabled": true,
  "providers": {
    "openai": true,
    "claude": false,
    "deepseek": false
  },
  "defaultProvider": "openai"
}
```

### Generate Test Questions

1. Go to Admin Panel → AI Question Generator
2. Try generating 2-3 easy questions
3. Verify:
   - Questions are relevant to the topic
   - Options make sense
   - Correct answer is marked
   - Explanation is clear

---

## 🔧 Troubleshooting

### Error: "API key not found"

**Solution:**
1. Check `.env.local` file exists
2. Verify key is on correct line
3. No spaces around the `=` sign
4. Restart dev server

### Error: "Failed to generate questions"

**Possible causes:**
1. **Invalid API key**: Double-check the key
2. **No credits**: Add credits to your AI provider account
3. **Rate limit**: Wait a minute and try again
4. **Network issue**: Check internet connection

### Error: "AI question generation is not enabled"

**Solution:**
1. Set `ENABLE_AI_QUESTIONS=true` in `.env.local`
2. Restart dev server

### Questions are low quality

**Solutions:**
1. Try a different AI provider
2. Be more specific with the topic
3. Adjust difficulty level
4. Generate more questions and pick the best ones

---

## 📊 API Usage Monitoring

### OpenAI
- Dashboard: https://platform.openai.com/usage
- View costs, requests, and tokens used

### Claude
- Dashboard: https://console.anthropic.com/settings/usage
- Monitor API usage and costs

### DeepSeek
- Dashboard: https://platform.deepseek.com/usage
- Track API calls and spending

---

## 🎓 Best Practices

### Question Generation

1. **Start Small**: Generate 2-3 questions first to test quality
2. **Review Everything**: Always check AI-generated content
3. **Edit as Needed**: Improve questions before adding to curriculum
4. **Test Questions**: Try answering them yourself
5. **Get Feedback**: Have students or teachers review

### Cost Management

1. **Use Cheaper Models First**: Try GPT-4o-mini or DeepSeek
2. **Batch Requests**: Generate multiple questions at once
3. **Cache Results**: Save good questions for reuse
4. **Set Budgets**: Use provider dashboards to set spending limits

### Security

1. **Never Commit `.env.local`**: Keep API keys secret
2. **Rotate Keys**: Change keys periodically
3. **Use Environment Variables**: Never hardcode keys
4. **Limit Access**: Only trusted users should access admin panel

---

## 🔄 Switching Providers

You can switch between providers anytime:

1. **In the UI**: Select different provider in the generator
2. **Set Default**: Change `DEFAULT_AI_PROVIDER` in `.env.local`
3. **Compare Results**: Try same topic with different providers

---

## 📈 Advanced Features (Coming Soon)

- [ ] **Adaptive Difficulty**: AI adjusts based on student performance
- [ ] **Question Variations**: Generate similar questions for practice
- [ ] **Bulk Generation**: Create entire topic question banks
- [ ] **Quality Scoring**: AI rates its own question quality
- [ ] **Multi-language**: Generate questions in French
- [ ] **Image Support**: Questions with diagrams and graphs

---

## 💡 Example Use Cases

### 1. Expanding Existing Topics
Generate more questions for topics that need more practice problems.

### 2. Creating New Topics
Quickly create question banks for new curriculum topics.

### 3. Differentiation
Generate questions at multiple difficulty levels for the same concept.

### 4. Test Preparation
Create practice tests with AI-generated questions.

### 5. Homework Assignments
Generate unique questions for each student to prevent copying.

---

## 📞 Getting Help

### If You're Stuck

1. **Check this guide** - Most issues are covered here
2. **Review error messages** - They usually tell you what's wrong
3. **Test API keys** - Use provider dashboards to verify keys work
4. **Check documentation**:
   - OpenAI: https://platform.openai.com/docs
   - Claude: https://docs.anthropic.com
   - DeepSeek: https://platform.deepseek.com/docs

---

## ✅ Quick Setup Checklist

- [ ] Get API key from at least one provider
- [ ] Create `.env.local` file
- [ ] Add API key to `.env.local`
- [ ] Set `ENABLE_AI_QUESTIONS=true`
- [ ] Restart development server
- [ ] Test at http://localhost:3000/api/generate-questions
- [ ] Generate test questions in admin panel
- [ ] Review and verify question quality

---

## 🎉 You're Ready!

Once you've completed the setup, you can:
- Generate unlimited questions
- Customize difficulty levels
- Choose between multiple AI providers
- Expand your curriculum rapidly
- Create personalized content for students

**Start generating questions at: http://localhost:3000/admin/ai-generator**

---

**Happy question generating! 🚀**

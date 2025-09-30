# 🚀 Deployment Guide - Ontario Math Academy

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Free tier available
- Automatic HTTPS
- Global CDN

**Steps:**

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to Git**
   ```bash
   cd ontario-math-academy
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Click "New Project" in Vercel dashboard
   - Import your Git repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

4. **Done!**
   - Your app is live in ~2 minutes
   - Get a URL like: `ontario-math-academy.vercel.app`
   - Can add custom domain later

**Automatic Updates:**
- Every git push automatically deploys
- Preview deployments for branches
- Rollback with one click

---

### Option 2: Netlify

**Steps:**

1. **Build the App**
   ```bash
   npm run build
   ```

2. **Create netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop `.next` folder
   - Or connect Git repository

---

### Option 3: GitHub Pages (Static Export)

**Note:** Requires static export configuration

1. **Update next.config.js**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   
   module.exports = nextConfig
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   - Push `out` folder to `gh-pages` branch
   - Enable GitHub Pages in repository settings

---

### Option 4: Docker Container

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build and Run:**
```bash
docker build -t ontario-math-academy .
docker run -p 3000:3000 ontario-math-academy
```

---

### Option 5: Traditional Hosting (cPanel, etc.)

1. **Build the app**
   ```bash
   npm run build
   ```

2. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "math-academy" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx** (if needed)
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

---

## 📋 Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Build completes successfully (`npm run build`)
- [ ] App runs in production mode (`npm start`)

### Content Review
- [ ] All questions have correct answers
- [ ] Explanations are clear and accurate
- [ ] No spelling or grammar errors
- [ ] Content is age-appropriate

### Testing
- [ ] Test all grade pages
- [ ] Test all subject pages
- [ ] Test all topic pages
- [ ] Test quiz functionality at all difficulty levels
- [ ] Test on mobile devices
- [ ] Test on different browsers

### Performance
- [ ] Images optimized (if any added)
- [ ] No console errors
- [ ] Fast page load times
- [ ] Smooth animations

### SEO & Metadata
- [ ] Update page titles
- [ ] Add meta descriptions
- [ ] Add Open Graph tags
- [ ] Create sitemap

---

## 🔧 Environment Variables

If you add features requiring environment variables:

**Create `.env.local`:**
```env
# Database (if added)
DATABASE_URL=your_database_url

# Authentication (if added)
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=https://yourdomain.com

# Analytics (if added)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

**Add to Vercel:**
- Go to Project Settings → Environment Variables
- Add each variable
- Redeploy

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Get GA4 ID** from Google Analytics

2. **Add to app/layout.tsx:**
   ```typescript
   import Script from 'next/script'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           <Script
             src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
             strategy="afterInteractive"
           />
           <Script id="google-analytics" strategy="afterInteractive">
             {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'GA_ID');
             `}
           </Script>
         </head>
         <body>{children}</body>
       </html>
     )
   }
   ```

---

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS
4. SSL enabled automatically

---

## 🔄 Continuous Deployment

### GitHub Actions (Example)

**`.github/workflows/deploy.yml`:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test # if you add tests
      # Add deployment steps here
```

---

## 📈 Monitoring & Maintenance

### What to Monitor
- **Uptime**: Use UptimeRobot or similar
- **Performance**: Use Lighthouse or WebPageTest
- **Errors**: Use Sentry or LogRocket
- **Usage**: Google Analytics or Plausible

### Regular Maintenance
- Update dependencies monthly: `npm update`
- Review and add new content
- Check for security vulnerabilities: `npm audit`
- Monitor user feedback

---

## 🔐 Security Best Practices

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm audit fix
   ```

2. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.local` for local development
   - Set in hosting platform for production

3. **HTTPS Only**
   - Most platforms provide free SSL
   - Redirect HTTP to HTTPS

4. **Content Security**
   - Validate all user inputs (if you add forms)
   - Sanitize content
   - Use TypeScript for type safety

---

## 💰 Cost Estimates

### Free Tier Options
- **Vercel**: Free for personal projects
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic SSL

- **Netlify**: Free tier includes
  - 100GB bandwidth/month
  - 300 build minutes/month
  - Automatic SSL

- **GitHub Pages**: Completely free
  - 1GB storage
  - 100GB bandwidth/month
  - Static sites only

### Paid Options (if needed)
- **Vercel Pro**: $20/month
- **Netlify Pro**: $19/month
- **Custom VPS**: $5-20/month (DigitalOcean, Linode)

---

## 🎯 Recommended Deployment Path

**For This Project:**

1. **Start with Vercel** (Free)
   - Easiest setup
   - Perfect for Next.js
   - Great performance

2. **Add Custom Domain** (Optional)
   - Buy domain from Namecheap, Google Domains (~$10-15/year)
   - Connect to Vercel

3. **Add Analytics** (Free)
   - Google Analytics or Plausible

4. **Scale as Needed**
   - Upgrade to paid tier if traffic grows
   - Add database if you want to save user progress
   - Add authentication for personalized experience

---

## 🚀 Quick Deploy Commands

```bash
# Prepare for deployment
npm run build
npm start  # Test production build locally

# Deploy to Vercel (after installing Vercel CLI)
npm i -g vercel
vercel

# Deploy to Netlify (after installing Netlify CLI)
npm i -g netlify-cli
netlify deploy --prod
```

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Pages**: https://pages.github.com

---

## ✅ Post-Deployment

After deploying:
1. ✅ Test all pages on live site
2. ✅ Test on mobile devices
3. ✅ Check page load speed
4. ✅ Verify all links work
5. ✅ Share with test users
6. ✅ Collect feedback
7. ✅ Iterate and improve!

---

**Your app is ready to help Ontario students excel in mathematics! 🎓🚀**

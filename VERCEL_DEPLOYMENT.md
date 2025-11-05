# 🚀 Vercel Deployment Guide for Derzi Privacy Policies

## 📋 Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your Vercel account: [https://vercel.com/manikarthi-vaihas-projects](https://vercel.com/manikarthi-vaihas-projects)

---

## ✨ Method 1: Deploy via Vercel Dashboard (EASIEST - Recommended)

This is the simplest and most reliable method.

### Step 1: Push Code to Git Repository

First, initialize a Git repository and push to GitHub:

```bash
cd /Users/manikandan/Desktop/privacy

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Derzi Privacy Policies"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/derzi-privacy.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your GitHub/GitLab/Bitbucket account
4. Find and select your `derzi-privacy` repository
5. Click **"Import"**

### Step 3: Configure Project (Auto-detected)

Vercel will automatically detect:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

Just click **"Deploy"** - no configuration needed!

### Step 4: Done! 🎉

Vercel will build and deploy your app in under a minute. You'll get:
- **Production URL:** `https://derzi-privacy.vercel.app` (or similar)
- **Automatic HTTPS**
- **Automatic deployments** on every push to main branch

---

## 🖥️ Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open a browser for authentication.

### Step 3: Deploy

```bash
cd /Users/manikandan/Desktop/privacy
vercel
```

Answer the prompts:
- **Set up and deploy?** `Y`
- **Which scope?** Select your account
- **Link to existing project?** `N`
- **Project name?** `derzi-privacy` (or your preferred name)
- **In which directory is your code located?** `./` (press Enter)

Vercel will automatically detect settings and deploy.

### Step 4: Deploy to Production

After the initial deployment, deploy to production:

```bash
vercel --prod
```

---

## 🌐 Your Live URLs

After deployment, your privacy policies will be accessible at:

- `https://your-project.vercel.app/user/privacy` - **Derzi User App Privacy Policy**
- `https://your-project.vercel.app/merchant/privacy` - **Derzi Merchant App Privacy Policy**
- `https://your-project.vercel.app/driver/privacy` - **Derzi Driver App Privacy Policy**

---

## 🔧 Configure Custom Domain

To use a custom domain like `privacy.derziapp.com`:

1. Go to your Vercel dashboard: [https://vercel.com/manikarthi-vaihas-projects](https://vercel.com/manikarthi-vaihas-projects)
2. Select your project
3. Go to **Settings** → **Domains**
4. Click **"Add"**
5. Enter your domain: `privacy.derziapp.com`
6. Follow the DNS configuration instructions
7. Add the required DNS records to your domain provider

### DNS Records Example:
```
Type: CNAME
Name: privacy
Value: cname.vercel-dns.com
```

---

## 🔄 Automatic Deployments

Once connected to Git:
- **Every push to `main` branch** → Auto-deploys to production
- **Pull requests** → Get preview deployments
- **View all deployments** in your Vercel dashboard

---

## 📊 Vercel Dashboard Features

Access your dashboard at: [https://vercel.com/manikarthi-vaihas-projects](https://vercel.com/manikarthi-vaihas-projects)

You can:
- View deployment history
- Monitor analytics and performance
- Set up custom domains
- Configure environment variables
- View build logs
- Set up preview deployments

---

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure `package.json` has correct dependencies
- Verify Node.js version (Vercel uses Node 18 by default)

### Routes Not Working (404 errors)
- The `vercel.json` file is configured to handle SPA routing
- All routes redirect to `index.html` properly

### Need Different Node Version
Add to `package.json`:
```json
{
  "engines": {
    "node": "18.x"
  }
}
```

---

## 📝 Project Files

Your project includes:
- ✅ `vercel.json` - Configures routing for React Router
- ✅ `package.json` - All dependencies configured
- ✅ `.gitignore` - Excludes `node_modules`, `dist`, `.vercel`

---

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Start local server

# Build
npm run build        # Build for production

# Deploy (if using CLI)
vercel              # Deploy preview
vercel --prod       # Deploy to production

# View deployments
vercel ls           # List all deployments

# Check project info
vercel inspect      # Show project details
```

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)
- [Your Vercel Dashboard](https://vercel.com/manikarthi-vaihas-projects)

---

## 💡 Pro Tips

1. **Preview Deployments:** Every Git branch gets its own preview URL
2. **Environment Variables:** Add them in Vercel dashboard under Settings
3. **Analytics:** Enable Vercel Analytics for traffic insights
4. **Edge Network:** Your app is deployed to Vercel's global CDN automatically
5. **Zero Config:** Vercel auto-detects framework settings

---

**Need Help?** Visit [https://vercel.com/docs](https://vercel.com/docs) or check your dashboard at [https://vercel.com/manikarthi-vaihas-projects](https://vercel.com/manikarthi-vaihas-projects)


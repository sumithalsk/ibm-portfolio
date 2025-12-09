# 🚀 QUICK START COMMANDS

## Development

```powershell
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📤 Deploy to Vercel (EASIEST)

### First Time Setup:

```powershell
# 1. Initialize git
git init
git add .
git commit -m "Initial commit"

# 2. Create GitHub repository at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/sumith-portfolio.git
git branch -M main
git push -u origin main

# 3. Go to vercel.com and import your GitHub repository
# Done! Your site is live.
```

### Update After Changes:

```powershell
git add .
git commit -m "Updated portfolio"
git push
# Vercel auto-deploys in 2-3 minutes
```

---

## 🌐 Deploy to Netlify

### Option A: Drag & Drop (Quick)

```powershell
npm run build
# Then drag the 'dist' folder to app.netlify.com/drop
```

### Option B: Via GitHub (Better)

```powershell
# Same as Vercel: push to GitHub
# Then connect GitHub repo on netlify.com
```

---

## 📘 Deploy to GitHub Pages

```powershell
# 1. Install gh-pages (first time only)
npm install --save-dev gh-pages

# 2. Deploy
npm run deploy

# Your site will be at:
# https://YOUR_USERNAME.github.io/profitolio/
```

---

## 🔧 Common Tasks

### Add Your Resume

1. Put your resume PDF in the `public` folder as `resume.pdf`
2. It will be available at `/resume.pdf` on your site
3. The download button already links to it!

### Update Your Information

Edit these files:
- `src/components/Hero.jsx` - Name, title, intro
- `src/components/About.jsx` - About section
- `src/components/Contact.jsx` - Email, location, links
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Change this to your color
    600: '#0284c7',
    // ... etc
  },
}
```

---

## 🆘 Troubleshooting

### Can't run npm commands
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port already in use
```powershell
# Stop the running server (Ctrl+C)
# Or use a different port:
npm run dev -- --port 3000
```

### Build errors
```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 📱 Share Your Portfolio

Once deployed, add your URL to:
- ✅ LinkedIn profile (Contact Info section)
- ✅ Naukri.com (Profile → Website field)
- ✅ Your resume (under contact information)
- ✅ Email signature
- ✅ Job applications (cover letters)

Format:
```
Portfolio: https://sumith-portfolio.vercel.app
```

---

## ✨ That's it! You're ready to go! 🚀

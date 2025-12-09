# Data Engineer Portfolio - Quick Setup Guide

## Your Data Engineer Portfolio Location
**Folder**: `C:\Users\SUMITH\OneDrive\Desktop\data-portfolio`

## To Run Your Data Engineer Portfolio Locally:

```powershell
cd C:\Users\SUMITH\OneDrive\Desktop\data-portfolio
npm run dev
```

It will open at: http://localhost:5174 (different port from the other one)

## To Deploy to Vercel:

1. **Initialize git in the data-portfolio folder**:
```powershell
cd C:\Users\SUMITH\OneDrive\Desktop\data-portfolio
git init
git add .
git commit -m "Data Engineer portfolio"
```

2. **Create a new GitHub repository**:
   - Go to https://github.com/new
   - Name it: `data-engineer-portfolio`
   - Make it Public
   - Don't add README

3. **Push to GitHub**:
```powershell
git remote add origin https://github.com/sumithalsk/data-engineer-portfolio.git
git branch -M main
git push -u origin main
```

4. **Deploy on Vercel**:
   - Go to https://vercel.com/new
   - Import `data-engineer-portfolio`
   - Click Deploy

## Now Let Me Update The Content

I'll update the files to match your Data Engineer resume...

# Sumith Reddy - Professional Portfolio

A modern, professional portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional fintech/tech aesthetic
- **Smooth Animations**: Subtle fade-in, slide-in, and hover effects using Framer Motion
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Optimized Performance**: Built with Vite for fast loading and development
- **Sections Include**:
  - Hero section with call-to-actions
  - About section with highlights
  - Skills organized by category
  - Projects showcase with detailed descriptions
  - Experience timeline
  - Certifications
  - Why Me section
  - Contact form and information

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vite** - Build tool and dev server

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment Options

This portfolio can be deployed to multiple platforms. Here are the easiest options:

### Option 1: Vercel (Recommended)

Vercel provides the easiest deployment with automatic CI/CD.

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or simply:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the settings and deploy

3. **Your site will be live** at `https://your-project.vercel.app`

### Option 2: Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   npm run build
   netlify deploy --prod
   ```

   Or use Netlify's web interface:
   - Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository at [netlify.com](https://netlify.com)

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js** with your repository name:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 4: Render

1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new "Static Site"
4. Use these settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

## 📝 Customization

### Update Personal Information

Edit the component files in `src/components/` to update:
- Personal details (email, location, etc.)
- Projects and descriptions
- Skills and certifications
- Social media links

### Change Colors

Modify `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors here
      },
    },
  },
}
```

### Add Resume Download

Replace the placeholder link in `src/components/Hero.jsx`:

```javascript
<a href="/path-to-your-resume.pdf" download>
  Download Resume
</a>
```

## 📱 Job Portal Integration

This portfolio is perfect for job applications:

1. **Deploy to a custom domain** or use the provided URL from Vercel/Netlify
2. **Add the link to**:
   - LinkedIn profile
   - Resume/CV
   - Job application forms (Naukri, LinkedIn Jobs, Indeed, etc.)
   - Email signature

3. **For Naukri.com and other job portals**:
   - Add your deployed URL in the "Website" or "Portfolio" field
   - Mention it in your profile summary
   - Include it in your cover letters

## 🎨 Design Philosophy

This portfolio follows modern design principles:
- **Minimalism**: Clean layouts with lots of white space
- **Professional**: Corporate fintech/trading firm aesthetic
- **Subtle Animations**: Enhance UX without being distracting
- **Accessibility**: Semantic HTML and good contrast ratios
- **Performance**: Optimized for fast loading

## 📞 Contact

- **Email**: sumith10296@gmail.com
- **Location**: Bangalore, India

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion

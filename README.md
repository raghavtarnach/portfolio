# Raghav Tarnach - Data Engineer Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS, showcasing a Lead Data Engineer's expertise in enterprise data platforms.

## Features

- ✨ **Clean, Modern Design** - Minimal dark theme optimized for professional impact
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Vite for optimized loading
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for search visibility
- 🎨 **Smooth Animations** - Subtle transitions and hover effects
- 📄 **Resume Download** - One-click resume download button
- 🔗 **Easy Navigation** - Fixed navigation with smooth scrolling

## Tech Stack

- **React** 18.2 - UI framework
- **Tailwind CSS** 3.3 - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful SVG icons
- **JavaScript** - Core functionality

## Project Structure

```
portfolio/
├── public/
│   └── RaghavTarnach_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Sections

- **Hero** - Name, title, value proposition, and CTA buttons
- **About** - Professional narrative and key achievements
- **Skills** - Categorized technical skills and domain expertise
- **Experience** - Detailed professional roles and accomplishments
- **Education** - Academic background
- **Contact** - Email, phone, and contact form

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- Primary accent color: `accent-500` / `accent-600`
- Dark backgrounds: `dark-950` to `dark-700`

### Content
Update individual component files in `src/components/` to modify content:
- `Hero.jsx` - Main headline and CTAs
- `About.jsx` - Professional narrative
- `Skills.jsx` - Technical skills
- `Experience.jsx` - Work history
- `Education.jsx` - Educational background
- `Contact.jsx` - Contact information

### Resume
Place your resume PDF in the `public/` folder and update the filename in `Hero.jsx`

## Performance Optimization

- Lazy loading for images
- Minified CSS and JavaScript
- Optimized build output
- Fast initial page load with Vite

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io"` to `package.json`
2. Run `npm run build`
3. Push the `dist` folder to GitHub Pages

## License

© 2025 Raghav Tarnach. All rights reserved.

# Infinite Solutions Landing Page

A modern, responsive React landing page for Infinite Solutions Ontario math tutoring business.

## Features

✅ Responsive mobile-first design  
✅ Animated progress bars with color-coded performance indicators  
✅ Multi-step pricing options (September Math Ready & Ongoing Tutoring)  
✅ Personal "About Kary" page  
✅ Direct call button with tel: linking  
✅ Mobile hamburger navigation menu  
✅ FAQ accordion section  
✅ Testimonials placeholder  
✅ Tailwind CSS styling  
✅ Optimized for all screen sizes (mobile, tablet, desktop, ultra-wide)  

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons (Menu, X, ChevronDown)

## Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Navigate to the project:
   ```bash
   cd infinite-solutions-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

The site opens at http://localhost:3000

## Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for Netlify.

## Deployment

### Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Netlify Dashboard
1. Push to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## Customization

### Phone Number
Search `src/App.jsx` for `4166065425` and replace with your number.

### Pricing
Search for `$149`, `$90`, `$349`, etc. and update values.

### Text & Content
Edit directly in `src/App.jsx` - all content is in this one file.

### Colors
- Blue buttons: Change `bg-blue-600`
- Green "Call Kary": Change `bg-green-600`
- Progress bars: Edit `getColorForPercentage()` function

## Performance

- Bundle size: ~50KB (gzipped)
- Load time: < 1 second on most connections
- Responsive at all screen sizes
- Mobile-first design approach

## Browser Support

- Chrome (90+)
- Firefox (88+)
- Safari (14+)
- Edge (90+)
- Mobile Safari
- Chrome Mobile

## Documentation

- **START_HERE.md** - Quick start guide
- **SETUP.md** - Step-by-step setup
- **DEPLOYMENT_CHECKLIST.md** - Pre-deploy verification
- **FILES_GUIDE.md** - File reference

## License

© 2026 Infinite Solutions Tutoring. All rights reserved.

---

**Questions?** Contact Kary at **(416) 606-5425**

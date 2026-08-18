# Pre-Deployment Checklist

Complete this checklist before deploying to Netlify.

## Content Verification

- [ ] Phone number correct (`src/App.jsx` - `4166065425`)
- [ ] All pricing current (September Ready & Ongoing rates)
- [ ] Website title updated (`index.html`)
- [ ] Meta description accurate (`index.html`)
- [ ] No placeholder text remaining (search for `[`, `TODO`, `Insert`)

## Testimonials & Media

- [ ] Real testimonials added (search `[Insert real parent`)
- [ ] Student names/grades updated
- [ ] Images/photos ready (or placeholders accepted)

## Links & Functionality

- [ ] Phone "Call Kary" links work
- [ ] Navigation links functional
- [ ] Anchor links smooth scroll (#options, #how-it-works, #faq)
- [ ] All external links tested

## Mobile Testing

- [ ] Tested on actual phone (not just browser zoom)
- [ ] Hamburger menu works
- [ ] Buttons large enough to tap (44px minimum)
- [ ] Text readable without zoom
- [ ] Images load properly
- [ ] No content cut off
- [ ] Scrolling smooth

## Desktop Testing

- [ ] Desktop width (1366px+) looks good
- [ ] Large fonts readable
- [ ] Spacing balanced
- [ ] No layout issues
- [ ] Call Kary button visible
- [ ] Hover effects work

## Building

- [ ] `npm run build` completes without errors
- [ ] `dist/` folder created
- [ ] No console warnings/errors
- [ ] Build size reasonable (~50KB gzipped)

## Netlify Deployment

- [ ] Netlify account created
- [ ] `netlify.toml` in root directory
- [ ] `.gitignore` includes `node_modules/` and `dist/`
- [ ] Ready to deploy

## Final Check

- [ ] All edits saved
- [ ] No console errors (F12)
- [ ] Site loads quickly
- [ ] Looks professional
- [ ] Functions as expected

---

## Deployment Steps

### Option 1: Netlify Drag & Drop (Easiest)

```bash
npm run build
```

1. Go to [netlify.com](https://netlify.com)
2. Drag `dist/` folder to deployment area
3. Site is live! ✅

### Option 2: Netlify CLI (Recommended)

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```

### Option 3: GitHub + Netlify (Best)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOU/infinite-solutions.git
git push -u origin main
```

Then on Netlify:
1. Click "New site from Git"
2. Choose your repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

---

## After Deployment

- [ ] Visit live site URL
- [ ] Test Call Kary button
- [ ] Test on mobile phone
- [ ] Test all navigation
- [ ] Verify page speed
- [ ] Check mobile responsiveness

---

## Common Issues

| Issue | Fix |
|-------|-----|
| 404 errors | Check `netlify.toml` redirects |
| Styles broken | Clear browser cache (Ctrl+Shift+R) |
| Images missing | Check image paths in code |
| Slow load | Check bundle size in dist/ |
| Phone doesn't dial | Check `href="tel:1234567890"` format |

---

## Success Criteria

✅ Site loads in < 2 seconds  
✅ Mobile looks perfect  
✅ Desktop looks premium  
✅ All buttons work  
✅ No console errors  
✅ Phone number clickable  
✅ Navigation smooth  

---

You're ready! 🚀

Deployment time: 5-10 minutes
Site goes live: Immediately after

**Questions?** Call (416) 606-5425

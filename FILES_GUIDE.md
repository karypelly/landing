# Project Files Guide

Quick reference for what each file does.

## 🔴 MUST EDIT

| File | Edit | How |
|------|------|-----|
| `src/App.jsx` | **YES** | Update phone, pricing, text, testimonials |
| `index.html` | **YES** | Update page title (line 6) |

## 🟢 DON'T TOUCH

| File | Purpose |
|------|---------|
| `package.json` | Dependencies list |
| `vite.config.js` | Build configuration |
| `tailwind.config.js` | Tailwind CSS setup |
| `postcss.config.js` | CSS processing |
| `netlify.toml` | Netlify deployment settings |
| `.gitignore` | Git ignore rules |
| `src/main.jsx` | React entry point |
| `src/index.css` | Tailwind imports |

## 📁 Project Structure

```
infinite-solutions-website/
├── src/
│   ├── App.jsx              ← Your landing page (EDIT THIS!)
│   ├── main.jsx             ← React entry (don't touch)
│   └── index.css            ← Tailwind imports (don't touch)
├── index.html               ← HTML template (EDIT TITLE HERE!)
├── package.json             ← Dependencies (don't change)
├── vite.config.js           ← Build tool config (don't touch)
├── tailwind.config.js       ← Tailwind config (don't touch)
├── postcss.config.js        ← CSS processor (don't touch)
├── netlify.toml             ← Netlify settings (ready to go!)
├── .gitignore               ← Git rules (don't edit)
├── .env.example             ← Env template (don't edit)
└── Documentation (guides for you)
    ├── START_HERE.md        ← Read this first!
    ├── README.md            ← Full overview
    ├── SETUP.md             ← Setup instructions
    ├── DEPLOYMENT_CHECKLIST.md
    └── FILES_GUIDE.md       ← This file
```

## 🎯 What to Edit: Line-by-Line

### Phone Number
**File:** `src/App.jsx`  
**Search:** `4166065425`  
**Replace:** Your phone number  

### Website Title
**File:** `index.html` line 6  
**Current:** `<title>Infinite Solutions...</title>`  
**Edit:** Change to your title  

### Hero Headline
**File:** `src/App.jsx` ~line 302  
**Current:** `"Start September stronger in math."`  
**Edit:** Your headline  

### Hero Body Text
**File:** `src/App.jsx` ~line 303-304  
**Edit:** Your positioning message  

### Pricing
**File:** `src/App.jsx` ~line 490+  
**Search:** `$149`, `$90`, `$349`, `$50`, etc.  
**Edit:** Current prices  

### About Kary (Full Page)
**File:** `src/App.jsx` ~line 136-195  
**Edit:** Your bio and story  

### About Kary (Main Page Teaser)
**File:** `src/App.jsx` ~line 1029-1063  
**Edit:** Summary and quote  

### FAQ Questions & Answers
**File:** `src/App.jsx` ~line 24-63  
**Edit:** Array of Q&A pairs  

### Testimonials
**File:** `src/App.jsx` ~line 990  
**Search:** `[Insert real parent testimonial]`  
**Edit:** Add real quotes  

### Colors
**File:** `src/App.jsx`  
**Search:** `bg-blue-600` → Primary buttons  
**Search:** `bg-green-600` → Call Kary button  
**Search:** `getColorForPercentage()` → Progress bars  

## 📦 Dependencies

After `npm install`, you get:

```
react              ← UI library
react-dom          ← DOM rendering
lucide-react       ← Icons (Menu, X, ChevronDown)
tailwindcss        ← CSS framework
vite               ← Build tool
postcss            ← CSS processor
autoprefixer       ← Browser compatibility
```

## 🚀 Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production locally |

## 🎨 Customization Spots

### Colors
Find and replace:
- `bg-blue-600` → Primary color
- `bg-green-600` → Secondary color
- `text-blue-600` → Text color
- `border-blue-600` → Border color

### Fonts
System fonts in `src/index.css`:
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', ...
```

To add custom font:
1. Import in `src/index.css`
2. Add to `tailwind.config.js`
3. Use in `src/App.jsx`

### Spacing
Tailwind classes (all responsive):
- `px-4` = horizontal padding
- `py-16` = vertical padding
- `gap-6` = space between items
- `mb-4` = margin bottom

### Typography
Tailwind size classes:
- `text-sm` = 14px
- `text-base` = 16px
- `text-lg` = 18px
- `text-xl` = 20px
- `text-2xl` = 24px
- `text-3xl` = 30px
- `text-4xl` = 36px
- `text-5xl` = 48px
- `text-6xl` = 60px

## ✅ Before First Deploy

1. ✅ Edit `src/App.jsx` (phone, pricing, text)
2. ✅ Edit `index.html` (title, description)
3. ✅ Run `npm install`
4. ✅ Run `npm run dev` (test locally)
5. ✅ Test on mobile phone
6. ✅ Run `npm run build`
7. ✅ Deploy to Netlify

## 🔍 Finding Code Sections

### Search in VSCode
Press **Ctrl+F** to open Find dialog.

**Common searches:**
- `4166065425` → Phone number
- `$149` → Pricing
- `About Kary` → Bio section
- `FAQ` → Questions
- `bg-blue-600` → Colors
- `className` → Styling

## 📝 Documentation Reference

- **START_HERE.md** - Quick answers
- **README.md** - Full overview
- **SETUP.md** - Installation steps
- **DEPLOYMENT_CHECKLIST.md** - Before deploying
- **FILES_GUIDE.md** - This file

## 💡 Pro Tips

### Hot Reload
- Edit file → Save (Ctrl+S)
- Changes appear instantly in browser
- No page refresh needed!

### Quick Search
- Find: Ctrl+F (browser)
- Find: Ctrl+F (VSCode)
- Replace: Ctrl+H (VSCode)

### Console Errors
- Press F12 → Console tab
- See any errors there
- Fix in VSCode

### Mobile Testing
- Open DevTools: F12
- Click mobile icon
- Resize to test sizes

## 🎯 TL;DR

**Only edit these 2 files:**
1. `src/App.jsx` - All content
2. `index.html` - Page title

**Everything else is ready to go!**

---

**Questions?** See START_HERE.md or SETUP.md

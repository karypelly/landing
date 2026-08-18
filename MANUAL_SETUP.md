# Manual Setup Guide (No Download Needed)

If the folder download isn't working, follow this guide to manually create all files.

## Option 1: Using Terminal (Fastest)

### Step 1: Create Project Folder
```bash
mkdir infinite-solutions-website
cd infinite-solutions-website
mkdir src
```

### Step 2: Copy-Paste Commands Below

Run each section in your terminal:

**Create package.json:**
```bash
cat > package.json << 'EOF'
{
  "name": "infinite-solutions-landing",
  "version": "1.0.0",
  "description": "Infinite Solutions tutoring landing page",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "start": "vite"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.24",
    "autoprefixer": "^10.4.14"
  }
}
EOF
```

**Create vite.config.js:**
```bash
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})
EOF
```

**Create tailwind.config.js:**
```bash
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF
```

**Create postcss.config.js:**
```bash
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF
```

**Create netlify.toml:**
```bash
cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF
```

**Create .gitignore:**
```bash
cat > .gitignore << 'EOF'
node_modules/
package-lock.json
yarn.lock
dist/
build/
.env
.env.local
.env.*.local
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store
*.log
npm-debug.log*
yarn-debug.log*
.netlify/
EOF
```

**Create .env.example:**
```bash
cat > .env.example << 'EOF'
# Environment variables example
# VITE_API_URL=https://api.example.com
# VITE_API_KEY=your_api_key_here
# VITE_GA_ID=your_google_analytics_id
EOF
```

**Create index.html:**
```bash
cat > index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinite Solutions - Ontario Math Tutoring for Grades 7-12</title>
    <meta name="description" content="Personalized math tutoring for students in Grades 7-12." />
    <meta name="theme-color" content="#1e40af" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF
```

**Create src/main.jsx:**
```bash
cat > src/main.jsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF
```

**Create src/index.css:**
```bash
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
EOF
```

### Step 3: Get App.jsx

**Copy App.jsx** from `/mnt/user-data/outputs/infinite-solutions-landing.jsx` and save it as `src/App.jsx`

Or download directly from the outputs folder.

### Step 4: Install & Run

```bash
npm install
npm run dev
```

---

## Option 2: Manual File Creation in VSCode

### Step 1: Create Folder
- Create folder: `infinite-solutions-website`
- Open in VSCode

### Step 2: Create Files

In VSCode, create these files and paste the content:

**Files to create:**
- `package.json` (see content above)
- `vite.config.js` (see content above)
- `tailwind.config.js` (see content above)
- `postcss.config.js` (see content above)
- `netlify.toml` (see content above)
- `.gitignore` (see content above)
- `.env.example` (see content above)
- `index.html` (see content above)
- `src/main.jsx` (see content above)
- `src/index.css` (see content above)
- `src/App.jsx` (copy from outputs folder)

### Step 3: Open Terminal

In VSCode: Ctrl + `

Run:
```bash
npm install
npm run dev
```

---

## Quick Reference: File Locations

```
infinite-solutions-website/
├── package.json         ← Dependencies
├── vite.config.js       ← Build config
├── tailwind.config.js   ← Tailwind setup
├── postcss.config.js    ← CSS processor
├── netlify.toml         ← Netlify settings
├── .gitignore           ← Git rules
├── .env.example         ← Env template
├── index.html           ← HTML page
└── src/
    ├── App.jsx          ← Landing page (from outputs)
    ├── main.jsx         ← React entry
    └── index.css        ← Tailwind imports
```

---

## Getting App.jsx

The main component file `src/App.jsx` is located at:
```
/mnt/user-data/outputs/infinite-solutions-landing.jsx
```

1. Download or copy this file
2. Rename to `App.jsx`
3. Place in `src/` folder
4. Done!

---

## Start Development

Once all files are created:

```bash
npm install    # Install dependencies (2 min)
npm run dev    # Start dev server
```

Browser opens automatically to http://localhost:3000

---

## Troubleshooting

**Command not found: npm**
→ Install Node.js from nodejs.org

**Port 3000 already in use**
→ Edit `vite.config.js`, change port to 3001

**Module not found**
→ Make sure you ran `npm install`

**App.jsx missing**
→ Copy from `/mnt/user-data/outputs/infinite-solutions-landing.jsx`

---

## Next Steps After Setup

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Edit `src/App.jsx` (phone number, pricing)
4. ✅ Edit `index.html` (page title)
5. ✅ Test locally
6. ✅ Run `npm run build`
7. ✅ Deploy to Netlify

---

## Files Needed: Summary

**Configuration (10 files):**
- package.json
- vite.config.js
- tailwind.config.js
- postcss.config.js
- netlify.toml
- .gitignore
- .env.example
- index.html
- src/main.jsx
- src/index.css

**Application:**
- src/App.jsx (1,124 lines - copy from outputs)

**That's it!** 16 files total, everything else is generated.

---

If you have any issues, the files are available in:
```
/mnt/user-data/outputs/infinite-solutions-website/
```

You can browse and download individual files from there.

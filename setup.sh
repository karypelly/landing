#!/bin/bash

# Infinite Solutions Website - Auto Setup Script
# This script creates all project files from scratch

echo "🚀 Creating Infinite Solutions Website..."
echo ""

# Create directories
mkdir -p src

# Create package.json
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
echo "✅ package.json created"

# Create vite.config.js
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
echo "✅ vite.config.js created"

# Create tailwind.config.js
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
echo "✅ tailwind.config.js created"

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF
echo "✅ postcss.config.js created"

# Create netlify.toml
cat > netlify.toml << 'EOF'
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF
echo "✅ netlify.toml created"

# Create .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
package-lock.json
yarn.lock

# Build output
dist/
build/

# Environment variables
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Logs
*.log
npm-debug.log*
yarn-debug.log*

# Netlify
.netlify/
EOF
echo "✅ .gitignore created"

# Create .env.example
cat > .env.example << 'EOF'
# Environment variables example
# Copy this file to .env and fill in values if needed

# API keys (if you add backend services in the future)
# VITE_API_URL=https://api.example.com
# VITE_API_KEY=your_api_key_here

# Analytics (if you add Google Analytics, Hotjar, etc.)
# VITE_GA_ID=your_google_analytics_id
# VITE_HOTJAR_ID=your_hotjar_id

# Note: Variables must start with VITE_ to be exposed to the browser
EOF
echo "✅ .env.example created"

# Create index.html
cat > index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinite Solutions - Ontario Math Tutoring for Grades 7-12</title>
    <meta name="description" content="Personalized math tutoring for students in Grades 7-12. Catch up, start strong, or get ahead with Infinite Solutions." />
    <meta name="theme-color" content="#1e40af" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF
echo "✅ index.html created"

# Create src/main.jsx
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
echo "✅ src/main.jsx created"

# Create src/index.css
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
echo "✅ src/index.css created"

echo ""
echo "✅ All files created successfully!"
echo ""
echo "Next steps:"
echo "1. npm install"
echo "2. npm run dev"
echo ""
echo "🎉 Ready to go!"

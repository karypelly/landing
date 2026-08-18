# Setup Guide

Get your Infinite Solutions website running in 5 minutes.

## Prerequisites

- Node.js 16+ ([Download](https://nodejs.org))
- npm (comes with Node.js)
- VSCode or any text editor

## Step 1: Install Node.js

Download and install from [nodejs.org](https://nodejs.org) (LTS recommended).

Verify installation:
```bash
node --version
npm --version
```

## Step 2: Open in VSCode

1. Open VSCode
2. File → Open Folder
3. Select `infinite-solutions-website` folder
4. Click "Select Folder"

## Step 3: Open Terminal

In VSCode, press: **Ctrl + `** (backtick)

Or use: Terminal → New Terminal

## Step 4: Install Dependencies

```bash
npm install
```

This downloads all required packages (~200MB).
⏳ Takes 1-2 minutes on first run.

## Step 5: Start Development Server

```bash
npm run dev
```

Output shows:
```
  VITE v4.3.9  ready in 123 ms

  ➜  Local:   http://localhost:3000/
```

✅ Your site opens automatically at http://localhost:3000

## Step 6: Make Changes

Edit `src/App.jsx` in VSCode.

Save the file (Ctrl+S).

Changes appear instantly in browser! 🔄

---

## Essential First Edits

### 1. Phone Number
File: `src/App.jsx`
Search: `4166065425`
Replace with: Your phone number

### 2. Page Title
File: `index.html` (line 6)
Change: `<title>Your New Title</title>`

### 3. Save & Refresh
- Save all files (Ctrl+S)
- Check browser for updates

---

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (watch mode) |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm install` | Install dependencies |

---

## Stopping the Server

In terminal: Press **Ctrl + C**

To restart: `npm run dev`

---

## Testing Locally

### On Same Computer
- http://localhost:3000

### On Mobile Device
1. Find your computer IP:
   - Windows: `ipconfig` → look for IPv4 Address
   - Mac: `ifconfig` → look for inet

2. On phone browser:
   ```
   http://YOUR_IP:3000
   ```
   Example: `http://192.168.1.100:3000`

### Responsive Testing
1. Open DevTools: F12
2. Click mobile icon (top-left)
3. Resize to test different sizes:
   - 375px = iPhone
   - 768px = iPad
   - 1366px = Laptop
   - 1920px = Desktop

---

## Troubleshooting

### Port 3000 Already in Use
Edit `vite.config.js`:
```javascript
server: {
  port: 3001,  // Change from 3000 to 3001
}
```

### npm: Command Not Found
Reinstall Node.js:
1. Download from [nodejs.org](https://nodejs.org)
2. Restart VSCode
3. Try again

### Module Not Found Error
Run again:
```bash
npm install
npm run dev
```

### Port Still in Use?
Find and kill the process:
```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

---

## Next Steps

1. ✅ Update phone number
2. ✅ Update page title
3. ✅ Edit hero text
4. ✅ Update pricing
5. ✅ Add testimonials
6. ✅ Test on mobile
7. ✅ Deploy to Netlify (see DEPLOYMENT_CHECKLIST.md)

---

## Ready for Deployment?

```bash
npm run build
```

Creates `dist/` folder with production-ready files.

See **DEPLOYMENT_CHECKLIST.md** before deploying.

---

## Need Help?

- Check README.md for overview
- See FILES_GUIDE.md for file reference
- Visit START_HERE.md for quick answers
- Contact: (416) 606-5425

---

**You're all set!** Happy building! 🚀

# GitHub Pages Deployment Guide

## About This Version

This `docs/` folder contains a **GitHub Pages-ready** version of the Vanden Intranet. It's a completely static website that doesn't require any backend server.

## What Changed

| Aspect | Original | GitHub Pages Version |
|--------|----------|----------------------|
| Backend | Node.js/Express API | None (Static) |
| Data Storage | API routes | Embedded in JavaScript |
| Hosting | localhost:3000 | GitHub Pages |
| Deployment | Manual | Automatic (GitHub Pages) |

## Setup Instructions

### 1. GitHub Pages Configuration

1. Go to your GitHub repository: https://github.com/kmwck2/Vanden-Intranet
2. Navigate to **Settings** → **Pages**
3. Under "Source", select:
   - **Branch**: `main`
   - **Folder**: `/docs`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### 2. Access Your Live Site

Your Vanden Intranet will be available at:
```
https://kmwck2.github.io/Vanden-Intranet/
```

## File Structure

```
docs/
├── index.html          # Main entry point
├── .nojekyll          # Tell GitHub to not process with Jekyll
├── css/
│   └── styles.css     # Vanden branding & styles
└── js/
    ├── data.js        # Embedded application data
    └── app.js         # Frontend application logic
```

## How It Works

1. **Data Embedding**: All employee, news, document, team, and event data is embedded directly in `js/data.js`
2. **Client-Side Rendering**: The browser loads `app.js` which uses the embedded `appData` object
3. **No API Calls**: All data operations happen in the browser using the JavaScript objects
4. **Pure Static Hosting**: No server required - GitHub Pages serves the files directly

## Making Changes

To add/modify data:

1. Edit `docs/js/data.js` - Update the `appData` object
2. Commit and push to GitHub
3. Changes appear automatically on your GitHub Pages site (within 1-2 minutes)

Example: Adding a new employee

```javascript
// In docs/js/data.js, add to appData.employees array:
{
  id: '11',
  name: 'New Employee',
  email: 'new.employee@vanden.com',
  phone: '+1 (555) 123-4577',
  title: 'Job Title',
  department: 'Department',
  initials: 'NE'
}
```

## Local Testing

To test locally before pushing:

```bash
# Option 1: Python 3
cd docs
python -m http.server 8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Node.js
npx http-server docs
```

Then visit: `http://localhost:8000`

## Troubleshooting

### Site Not Showing
- Wait 1-2 minutes after pushing
- Check GitHub Pages settings in repository Settings
- Verify branch is set to `main` and folder is `/docs`

### Old Content Showing
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check that changes were pushed to GitHub

### 404 Error
- Make sure `docs/index.html` exists
- Verify the repository is public (or you have GitHub Pages in your plan)
- Check that `.nojekyll` file exists

## Differences from Local Version

| Feature | Local (Node.js) | GitHub Pages |
|---------|-----------------|--------------|
| Dashboard | ✅ Dynamic API | ✅ Embedded Data |
| Employees | ✅ API Calls | ✅ Client-Side |
| News | ✅ API Calls | ✅ Client-Side |
| Documents | ✅ API Calls | ✅ Client-Side |
| Teams | ✅ API Calls | ✅ Client-Side |
| Events | ✅ API Calls | ✅ Client-Side |
| Search | ✅ Works | ✅ Works |
| Calendar | ✅ Works | ✅ Works |

## Future Enhancements

To add more features to the GitHub Pages version:

1. **External Data Source**: Replace embedded data with JSON file
2. **Database Integration**: Use a BaaS like Firebase or Supabase
3. **Authentication**: Add GitHub OAuth or similar
4. **Comments/Feedback**: Add Disqus or similar

## Performance

The GitHub Pages version is extremely fast:
- **No server processing** - instant rendering
- **Minimal network requests** - only downloads HTML, CSS, JS
- **Cached content** - browser caches all files
- **CDN Distribution** - GitHub Pages uses global CDN

---

**Deployment Status**: Ready for GitHub Pages ✅
**Last Updated**: 2026-07-16

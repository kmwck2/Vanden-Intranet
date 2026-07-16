# Pushing Vanden Intranet to GitHub

## Prerequisites

### 1. Install Git
- Download Git for Windows from: https://git-scm.com/download/win
- Run the installer and follow the setup wizard (use default options)
- Restart your terminal after installation

### 2. Generate GitHub Personal Access Token
- Go to: https://github.com/settings/tokens/new
- Select scopes: `repo` (full control of private repositories)
- Copy the generated token (you'll need this)
- Keep this token secure!

## Setup Instructions

Once Git is installed, run these commands in PowerShell:

```powershell
# Navigate to project directory
cd c:\Users\caden\Desktop\Vanden

# Initialize Git repository
git init

# Configure Git with your details
git config user.name "Your Name"
git config user.email "your-email@gmail.com"

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: Vanden Intranet portal with all features"

# Add remote repository
git remote add origin https://github.com/kmwck2/Vanden-Intranet.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## If You Get Authentication Errors

When prompted for password, paste your Personal Access Token (not your GitHub password).

## Verify Push Success

Check your repository at: https://github.com/kmwck2/Vanden-Intranet

You should see:
- ✅ All source files
- ✅ README.md documentation
- ✅ .gitignore file
- ✅ package.json with dependencies

## Future Commits

After the initial push, you can update the repo with:

```powershell
# Make changes to files...

# Stage changes
git add .

# Commit
git commit -m "Your commit message"

# Push
git push
```

## Additional GitHub Features (Optional)

- Create a branch: `git checkout -b feature-name`
- View commit history: `git log`
- Check status: `git status`

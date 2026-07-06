# Git Global Configuration Guide

## Prerequisites
- Git installed on your system
- A Git hosting account (GitHub, GitLab, Bitbucket, etc.)

---

## Step 1: Check Git Installation
```bash
git --version
If not installed, download from git-scm.com or use:

macOS: brew install git

Ubuntu/Debian: sudo apt install git

Windows: Download installer from website

Step 2: Set Global Username
bash
git config --global user.name "Your Full Name"
Example:

bash
git config --global user.name "John Doe"
Step 3: Set Global Email
bash
git config --global user.email "your-email@example.com"
Example:

bash
git config --global user.email "john.doe@gmail.com"
⚠️ Important: Use the same email associated with your Git hosting account.

Step 4: Verify Configuration
bash
git config --global --list
This displays all your global settings.

Step 5: Set Up Authentication Method
Option A: Personal Access Token (Recommended for HTTPS)
Generate a token from your Git hosting service:

GitHub: Settings → Developer settings → Personal access tokens → Generate new token

GitLab: Settings → Access Tokens → Add new token

Bitbucket: Personal settings → App passwords → Create app password

Copy the generated token

When pushing/pulling, use the token as your password

Option B: SSH Key (Most Secure)
Generate SSH key:

bash
ssh-keygen -t ed25519 -C "your-email@example.com"
Start SSH agent:

bash
eval "$(ssh-agent -s)"
Add key to agent:

bash
ssh-add ~/.ssh/id_ed25519
Copy public key:

bash
cat ~/.ssh/id_ed25519.pub
Add to your Git hosting service:

GitHub: Settings → SSH and GPG keys → New SSH key

GitLab: Settings → SSH Keys

Bitbucket: Personal settings → SSH keys → Add key

Step 6: Cache Credentials (Optional)
Save credentials to avoid re-entering password/token:

macOS
bash
git config --global credential.helper osxkeychain
Windows
bash
git config --global credential.helper wincred
Linux/Unix
bash
git config --global credential.helper cache
# Set cache timeout (e.g., 1 hour):
git config --global credential.helper 'cache --timeout=3600'
Step 7: Test Your Configuration
Clone a test repository:
bash
git clone https://github.com/yourusername/your-repo.git
Or check remote connection:
bash
git ls-remote https://github.com/yourusername/your-repo.git
Optional Configurations
Set Default Branch Name
bash
git config --global init.defaultBranch main
Set Default Editor
bash
# VS Code
git config --global core.editor "code --wait"

# Vim
git config --global core.editor "vim"

# Sublime Text
git config --global core.editor "subl -w"
Set Default Merge Tool
bash
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd "code --wait $MERGED"
Set Pull Behavior
bash
git config --global pull.rebase false  # Merge (default)
# OR
git config --global pull.rebase true   # Rebase
Quick One-Line Setup
For GitHub HTTPS Users:
bash
git config --global user.name "Your Name" && \
git config --global user.email "your-email@example.com" && \
git config --global credential.helper cache && \
git config --global init.defaultBranch main
For GitHub SSH Users:
bash
git config --global user.name "Your Name" && \
git config --global user.email "your-email@example.com" && \
git config --global init.defaultBranch main
View All Configurations
Show all global configs:
bash
git config --global --list
Show all configs with source locations:
bash
git config --list --show-origin
Show specific config:
bash
git config --global user.name
git config --global user.email
Troubleshooting
Common Issues
Issue	Solution
Permission denied	Use SSH instead of HTTPS OR ensure token/SSH key is correct
Wrong email/name	Re-run the config commands with correct values
Authentication failed	Generate a new token or check SSH key setup
Multiple accounts	Use --local instead of --global for repo-specific configs
SSL certificate problem	git config --global http.sslVerify false (not recommended for production)
Reset Global Configuration
bash
# Remove specific setting
git config --global --unset user.name

# Remove all global settings (use with caution)
rm ~/.gitconfig
Important Notes
✅ Global configuration applies to all repositories on your system

✅ Use --local flag (instead of --global) for project-specific settings

✅ Never share your personal access token or private SSH key

✅ For corporate environments, use company-provided credentials

✅ Always use HTTPS with token or SSH for better security

Additional Resources
Git Official Documentation

GitHub SSH Key Guide

GitLab SSH Key Guide

Pro Git Book

Configuration File Locations
System	Global Config Location
Linux/macOS	~/.gitconfig
Windows	C:\Users\username\.gitconfig
Project-specific	./.git/config
Final Verification Checklist
Git is installed (git --version)

Username is set (git config --global user.name)

Email is set (git config --global user.email)

Authentication method is configured (token or SSH)

Can clone a repository successfully

Can push changes successfully

Your Git is now globally configured! 🎉

For any issues, refer to the troubleshooting section or consult your Git hosting service's documentation.

text

You can save this as `git-global-setup.md` and use it as a reference guide. The file includes:

- ✅ Step-by-step instructions
- ✅ Code blocks with proper formatting
- ✅ Tables for troubleshooting and configuration locations
- ✅ Checkboxes for verification
- ✅ Icons and emojis for visual clarity
- ✅ Different authentication options (HTTPS and SSH)
- ✅ Optional configurations
- ✅ Troubleshooting guide
- ✅ Additional resources

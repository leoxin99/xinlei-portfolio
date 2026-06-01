# Deployment Guide

This portfolio is a static website. It does not need a build step, backend, database, or server runtime.

## Current Local Setup

- Local folder: `D:\AI\carrer\portfolio`
- Git branch: `main`
- Prepared remote: `https://github.com/leoxin99/xinlei-portfolio.git`
- First commit: `Initial portfolio site`

## Recommended Path: GitHub Pages

1. Create this GitHub repository in the browser:
   - Owner: `leoxin99`
   - Repository name: `xinlei-portfolio`
   - Visibility: public
   - Do not initialize with README, license, or `.gitignore`; this local folder already has the first commit.
2. Upload everything in this folder to the repository root:
   - `index.html`
   - `cellsam.html`
   - `assets/`
   - `.nojekyll`
   - `README.md`
   - `DEPLOYMENT.md`
3. Push the local commit:

```powershell
git -C D:\AI\carrer\portfolio push -u origin main
```

4. In the GitHub repository, open `Settings -> Pages`.
5. Set the source to `Deploy from branch`.
6. Select branch `main` and folder `/root`.
7. Wait for the Pages build to finish.
8. Visit the public URL:
   - `https://leoxin99.github.io/xinlei-portfolio/`

## Optional Custom Domain

1. Add the domain in `Settings -> Pages -> Custom domain`.
2. Configure DNS at your domain provider.
   - Apex domain: use the GitHub Pages A records from GitHub's current docs.
   - `www` subdomain: add a CNAME pointing to `<username>.github.io`.
3. Enable `Enforce HTTPS` after GitHub finishes certificate provisioning.

## Alternative Hosts

- Cloudflare Pages: upload the whole static folder or connect the GitHub repository.
- Vercel: import the GitHub repository or run `vercel --cwd D:\AI\carrer\portfolio`.

## Pre-Launch Checklist

- Confirm final public email, GitHub, phone / WeChat, and portfolio URL in `assets/content.js`.
- Replace `assets/profile_placeholder.png` with a real profile image.
- Replace `assets/files/xin-lei-ai-pm-resume.pdf` with the final resume.
- Add the Agent / AI developer resume PDF if available.
- Do not add SQL / Python / BI to the Xiaomi internship unless the actual tools are confirmed.
- Add CellSAM metrics, repository link, and thesis or presentation links when ready.

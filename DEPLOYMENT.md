# Deployment Guide

This portfolio is a static website. It does not need a build step, backend, database, or server runtime.

## Recommended Path: GitHub Pages

1. Create a GitHub repository.
   - Recommended project repo: `xinlei-portfolio`
   - Recommended user site repo: `<your-github-username>.github.io`
2. Upload everything in this folder to the repository root:
   - `index.html`
   - `cellsam.html`
   - `assets/`
   - `.nojekyll`
   - `README.md`
   - `DEPLOYMENT.md`
3. In the GitHub repository, open `Settings -> Pages`.
4. Set the source to `Deploy from branch`.
5. Select branch `main` and folder `/root`.
6. Wait for the Pages build to finish.
7. Visit the public URL:
   - Project site: `https://<username>.github.io/xinlei-portfolio/`
   - User site: `https://<username>.github.io/`

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

- Replace placeholder email, GitHub, and LinkedIn links in `assets/content.js`.
- Replace `assets/profile_placeholder.png` with a real profile image.
- Replace `assets/files/xin-lei-ai-pm-resume.pdf` with the final resume.
- Add the Agent / AI developer resume PDF if available.
- Confirm whether SQL should remain in the Xiaomi internship tags.
- Add CellSAM metrics, repository link, and thesis or presentation links when ready.


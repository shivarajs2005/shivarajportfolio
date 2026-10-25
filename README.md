# Shivaraj S — React Portfolio

Professional light theme for a fresher targeting Web Designer, UI Designer and Front-End Developer roles.

## 1. Run locally
Install Node.js LTS, then open this folder in VS Code. In the terminal:

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## 2. Personalize your portfolio
- `src/data/projects.js`: edit project descriptions and replace `demo: "#"` with a real live URL. Replace `code` with each project's exact GitHub repository URL. A profile URL is used as a temporary fallback; direct repo URLs are better.
- `src/App.js`: edit About, skills, contact and social links.
- `public/Shivaraj_Resume.pdf`: copy your real resume PDF into this folder using this exact filename. The View Resume link points there.
- Update the LinkedIn URL if your public profile uses a different URL.
- Keep only projects you can explain in an interview. Label unfinished projects honestly.

## 3. Build
```bash
npm run build
```
Vite creates a `dist` folder.

## 4. Publish free with GitHub Pages (recommended)
This project uses Vite + React. For easiest deployment, use GitHub Pages with GitHub Actions:

1. Create a GitHub repository, e.g. `shivarajs2005.github.io` or `shivaraj-portfolio`.
2. Upload the project source files (not `node_modules`).
3. On GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
4. Add `.github/workflows/deploy.yml` from this project.
5. If your repo is named `shivarajs2005.github.io`, the workflow uses root path. If you use a repository such as `shivaraj-portfolio`, set `base: "/shivaraj-portfolio/"` in `vite.config.js` before deploying.
6. Push to the `main` branch. Open Settings → Pages to see the published URL.

A workflow file is included for deployment. The first deploy may take a few minutes.

## Important
The project list is based on projects you have described previously, but all demo links are placeholders and GitHub links currently point to your profile as a fallback. Check each project, repo URL, resume and contact link before sharing with recruiters.

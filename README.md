# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

# Saksham Prasad Portfolio

A responsive React and Vite portfolio for Saksham Prasad, a 2026 B.Tech Computer Science and Engineering graduate. It presents real projects, internship experience, certifications, skills, and contact links with a lightweight static build.

## Technologies

- React 19
- Vite
- Framer Motion
- React Icons
- CSS Modules

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The production build can be checked with:

```bash
npm run build
npm run preview
```

## Content updates

Portfolio content is centralized in `src/data/`:

- `profile.js`: name, title, bio, About copy, education, highlights, and resume path
- `socials.js`: email, phone, GitHub, LinkedIn, and contact display items
- `projects.js`: project cards and case studies
- `skills.js`: skill groups
- `experience.js`: work history and responsibilities
- `certifications.js`: certifications and optional verification URLs

To add a project, add one object to `src/data/projects.js` with a unique `id`. Set `githubUrl` and `liveUrl` only when the links are real; leave either value `null` when unavailable. To add a certification, add one object to `certifications.js`. To change contact details, edit `src/data/socials.js`.

## Resume

Place the real PDF at `public/resume.pdf`, then set `resumeUrl: '/resume.pdf'` in `src/data/profile.js`. The resume links stay hidden until that file is available.

## Deployment

The site is a static Vite application and can be deployed to Vercel, Netlify, GitHub Pages, or another static host. Use `npm run build` and publish the generated `dist` directory. Configure the host to serve `index.html` for unknown routes if client-side routes are added later.

No deployment was performed from this workspace, so there is currently no public portfolio URL to report.

// ─── Profile ────────────────────────────────────────────────────────────────
// Edit this file to update your personal information across the entire site.

export const profile = {
  name: 'Saksham Prasad',
  initials: 'SP',
  title: 'Full-Stack Developer',
  tagline: 'Full-Stack Developer · AI Enthusiast · B.Tech CSE \'26',

  // Shown in the hero bio
  bio: 'I build web applications, AI-powered tools, and practical software projects using React, Node.js, Express, MongoDB, and cloud technologies. Currently looking for my first full-time role in software development.',

  // Shown in the About section — each string is a paragraph
  about: [
    "I'm a 2026 B.Tech Computer Science and Engineering graduate from Chameli Devi Group of Institutions. My interest in software development started with building small web projects and grew into a genuine focus on full-stack development, AI-powered applications, and cloud technologies.",
    "During my internship at Tech Mahindra, I worked as a UI intern on an internal product called Datavyom — a data-analyst-facing application with AI/chatbot configuration features. That experience gave me a real sense of how frontend development works in a professional team environment, including API integration, component-level thinking, and working against actual product requirements.",
    "Outside of work, I've been building projects like ResumeAI — a MERN-stack application that uses AI to analyse resumes and suggest learning paths — and MuseAI, a creative content generation tool. I enjoy working on problems where software and AI intersect.",
    "I'm currently looking for my first full-time role in software development — whether that's frontend, backend, full-stack, or something adjacent. I learn quickly and I'm comfortable picking up new tools as the work demands.",
  ],

  // Shown as stat cards in the About section
  highlights: [
    { label: 'Graduation', value: '2026', sub: 'B.Tech CSE' },
    { label: 'Internship', value: '3 mo', sub: 'Tech Mahindra' },
    { label: 'Projects',   value: '5+',   sub: 'Built & shipped' },
    { label: 'Focus',      value: 'MERN', sub: 'Full-Stack & AI' },
  ],

  education: {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Chameli Devi Group of Institutions',
    year: 'Graduating 2026',
  },

  location: 'India',
  availableForWork: true,

  // Add the PDF to /public and set this to '/resume.pdf' when ready.
  resumeUrl: '/Resume.pdf',
}

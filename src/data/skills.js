// ─── Skills ──────────────────────────────────────────────────────────────────
// To add a skill: add a new object to the relevant category's skills array.
// To add a new category: add a new object to skillCategories.
// icon values must match keys in the iconMap inside Skills.jsx.

export const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML5',      icon: 'SiHtml5' },
      { name: 'CSS3',       icon: 'SiCss' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'React.js',   icon: 'SiReact' },
      { name: 'Angular',    icon: 'SiAngular' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',    icon: 'SiNodedotjs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'REST APIs',  icon: 'TbApi' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'SiMongodb' },
    ],
  },
  {
    label: 'Programming & AI',
    skills: [
      { name: 'Python',             icon: 'SiPython' },
      { name: 'OpenCV',             icon: 'SiOpencv' },
      { name: 'AI/ML Concepts',     icon: 'TbBrain' },
      { name: 'Prompt Engineering', icon: 'TbBrain' },
    ],
  },
  {
    label: 'Cloud & Tools',
    skills: [
      { name: 'AWS',        icon: 'SiAmazonaws' },
      { name: 'Git',        icon: 'SiGit' },
      { name: 'GitHub',     icon: 'SiGithub' },
      { name: 'Deployment', icon: 'TbRocket' },
    ],
  },
]

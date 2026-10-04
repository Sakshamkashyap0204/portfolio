// ─── Projects ────────────────────────────────────────────────────────────────
// To add a project: add a new object to this array.
// To remove a project: delete its object.
// featured: true  → shown in the larger featured grid at the top
// featured: false → shown in the smaller secondary grid
//
// status values: 'live' | 'backend-only' | 'in-development' | 'academic' | 'completed'
//
// liveUrl: set to null if there is no usable frontend deployment.
// githubUrl: always set if the repository is public.

export const projects = [
  {
    id: 'museai',
    name: 'MuseAI',
    tagline: 'AI-powered creative content generation dashboard',
    description:
      'A React-based creative application where users generate stories, poems, and jokes through natural-language prompts. Features a conversational dashboard with a generation history sidebar and AI integration for prompt-based content creation.',
    technologies: [
      'React',
      'JavaScript',
      'AI Integration',
      'Brevo (Email)',
      'Render',
    ],
    githubUrl: 'https://github.com/Sakshamkashyap0204/MuseAI.git',
    liveUrl: 'https://muse-gj1r.onrender.com',
    backendUrl: null,
    status: 'live',
    featured: true,
    categories: ['AI', 'Full Stack'],
    image: null,

    problem:
      'Creative writers and hobbyists often hit a blank page. A prompt-driven AI tool can help spark ideas and generate starting material quickly.',
    solution:
      'MuseAI provides a clean dashboard where users type a prompt and receive AI-generated creative content. A sidebar keeps a history of past generations for easy reference.',
    myContribution:
      'Built the React frontend, integrated the AI generation API, implemented the history/sidebar experience, and set up email functionality via Brevo.',
    features: [
      'Prompt-based story, poem, and joke generation',
      'Conversational dashboard interface',
      'Generation history sidebar',
      'Email functionality via Brevo',
    ],
    challenges:
      'Designing a UI that felt creative and inviting without being cluttered. Keeping the history state in sync across sessions required careful state management.',
    learning:
      'Gained experience integrating third-party AI APIs into a React app and managing async state for a chat-style interface.',
  },

  {
    id: 'resumeai',
    name: 'ResumeAI',
    tagline: 'AI-powered resume analysis and job-matching platform',
    description:
      'A full-stack MERN application where users upload their resume and receive AI-driven insights — job-role matching, a match score, missing skills, and a personalised learning roadmap. Built with a Node.js/Express backend, MongoDB for persistence, and Groq AI as the analysis engine.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Groq AI',
      'JWT',
      'REST APIs',
    ],
    githubUrl: 'https://github.com/Sakshamkashyap0204/ResumeAI.git',
    liveUrl: null,
    backendUrl: null,
    status: 'completed',
    featured: true,
    categories: ['AI', 'Full Stack'],
    image: null,

    // Case study content
    problem:
      'Job seekers often struggle to understand how well their resume aligns with a specific role and what skills they need to develop to become a stronger candidate.',
    solution:
      'ResumeAI parses an uploaded resume, runs it through an AI model, and returns a structured analysis: a match score against a target role, a list of missing skills, and a step-by-step learning roadmap.',
    myContribution:
      'I designed and built the full application — React frontend, Express REST API, MongoDB schema, Groq AI integration, JWT-based authentication, and email OTP verification.',
    features: [
      'Resume upload and AI-powered analysis',
      'Job-role matching with a percentage match score',
      'Missing skills identification',
      'Personalised learning roadmap',
      'Job listings view',
      'Email OTP verification',
      'JWT authentication',
    ],
    challenges:
      'Structuring the AI prompt so the model returned consistent, parseable JSON was the trickiest part. I iterated on the prompt design and added a validation layer on the backend to handle edge cases.',
    learning:
      'Deepened my understanding of prompt engineering, REST API design, and full-stack authentication flows. Also learned how to deploy a Node.js service on Render and a React app on Vercel.',
  },

  {
    id: 'criminal-detection',
    name: 'Criminal Record Detection',
    tagline: 'Academic face-matching system using computer vision',
    description:
      'An academic computer-vision project demonstrating face detection and matching against a stored record database. Built with Python and OpenCV, it supports image upload and webcam capture for facial feature extraction and comparison.',
    technologies: [
      'Python',
      'OpenCV',
      'Face Recognition',
      'Image Processing',
    ],
    githubUrl:
      'https://github.com/Sakshamkashyap0204/CriminalRecordDetection.git',
    liveUrl: null,
    backendUrl: null,
    status: 'academic',
    featured: false,
    categories: ['Data & CV'],
    image: null,

    problem:
      'An academic exercise in applying computer vision techniques to identity matching — exploring facial feature extraction and comparison using OpenCV.',
    solution:
      'The system captures or accepts an image, extracts facial features using OpenCV, and compares them against a local record database to find potential matches.',
    myContribution:
      'Implemented the full pipeline: image capture, preprocessing, feature extraction, and matching logic using Python and OpenCV.',
    features: [
      'Image upload and webcam capture',
      'Facial feature extraction with OpenCV',
      'Face matching against stored records',
      'Record management interface',
    ],
    challenges:
      'Varying lighting conditions and image quality significantly affected matching accuracy. Applied preprocessing steps (grayscale, histogram equalisation) to improve consistency.',
    learning:
      'Practical understanding of OpenCV pipelines, image preprocessing, and the real-world limitations of face-matching systems.',
  },

  {
    id: 'smarttraffic',
    name: 'SmartTrafficAI',
    tagline: 'AI-assisted smart traffic management concept',
    description:
      'A project exploring technology applications in smart traffic management. The repository contains the implementation details and should be consulted for the project scope.',
    technologies: ['Python', 'AI/ML'],
    githubUrl:
      'https://github.com/Sakshamkashyap0204/SmartTrafficAI.git',
    liveUrl: null,
    backendUrl: null,
    status: 'academic',
    featured: false,
    categories: ['AI'],
    image: null,

    problem:
      'Urban traffic congestion is a growing challenge. This project explores how AI and sensor data can be used to improve traffic flow management.',
    solution:
      'Explores a smart-traffic problem through the implementation available in the repository. Specific capabilities are intentionally left to the source project rather than overstated here.',
    myContribution:
      'Worked on the project implementation. See the GitHub repository for the authoritative technical details.',
    features: ['Smart traffic management project exploration'],
    challenges:
      'Understanding the problem space and translating the project idea into a working implementation.',
    learning:
      'Practised applying software and AI concepts to a real-world infrastructure problem.',
  },

  {
    id: 'orchestrateai',
    name: 'OrchestrateAI',
    tagline: 'Governed multi-agent operations platform for enterprise workflows',
    description:
      'A full-stack platform that decomposes business tasks into parallel work for eight specialized AI agents, then validates and synthesizes their results. Human approval gates, policy enforcement, and an audit ledger keep high-risk actions reviewable.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'SQLite',
      'WebSockets',
    ],
    githubUrl: 'https://github.com/Sakshamkashyap0204/Multi-Agent-AI-',
    liveUrl: 'https://multi-agent-ai-alpha.vercel.app/',
    backendUrl: null,
    status: 'live',
    featured: true,
    categories: ['AI', 'Full Stack'],
    image: null,

    problem:
      'Complex business work spans research, analysis, finance, writing, and compliance. Coordinating those steps while retaining oversight and traceability is difficult when each task is handled in isolation.',
    solution:
      'OrchestrateAI decomposes an objective into a dependency-aware execution graph, runs specialized agents in parallel, applies governance policies, and pauses for human approval when sensitive actions cross configured thresholds.',
    myContribution:
      'Built a production-style multi-agent application with a React operations interface and Python API, connecting agent orchestration, governance workflows, live execution updates, and executive deliverables.',
    features: [
      'Eight specialized agents for planning, research, analysis, finance, writing, review, compliance, and synthesis',
      'Dependency-aware task decomposition and parallel execution',
      'Human approval checkpoints with approve, reject, and request-changes actions',
      'Governance policies and an exportable audit ledger',
      'Live agent progress, notifications, and executive report export',
    ],
    challenges:
      'Coordinating parallel agent work while preserving task dependencies, actionable progress updates, and approval checkpoints requires clear execution state and governance boundaries.',
    learning:
      'Explored multi-agent orchestration, human-in-the-loop governance, and how auditability and policy enforcement fit into an AI-assisted operations workflow.',
  },

  {
    id: 'news-pulse',
    name: 'News Pulse',
    tagline: 'Live news topic clustering on an interactive timeline',
    description:
      'A full-stack news intelligence app that ingests BBC, NPR, and Guardian RSS feeds, extracts article text, deduplicates stories, and groups related coverage into persistent topic clusters. Explore each cluster’s activity window and filter the timeline by source.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'Python',
      'MongoDB',
      'Docker',
    ],
    githubUrl: 'https://github.com/Sakshamkashyap0204/news-pulse',
    liveUrl: 'https://news-pulse-self.vercel.app/',
    backendUrl: null,
    status: 'live',
    featured: true,
    categories: ['Full Stack', 'Data & CV'],
    image: null,

    problem:
      'The same developing story appears across multiple news outlets, making it hard to follow how coverage changes over time without reading duplicate articles one by one.',
    solution:
      'News Pulse collects public RSS feeds, normalizes and deduplicates articles, extracts full text when available, and assigns stories to persistent topic clusters using keyword overlap. An interactive timeline makes each cluster’s activity and sources easy to explore.',
    myContribution:
      'Built the Next.js timeline interface, Node/Express API, and Python ingestion pipeline, with MongoDB persistence connecting articles, topic clusters, and ingestion-job status.',
    features: [
      'Ingestion from BBC News, NPR, and The Guardian RSS feeds',
      'Article normalization, deduplication, and best-effort full-text extraction',
      'Persistent topic clustering using keyword overlap and Jaccard similarity',
      'Interactive timeline with proportional activity windows and source filtering',
      'On-demand refresh with live ingestion-job status',
    ],
    challenges:
      'Making ingestion repeatable required stable article identity, duplicate protection, and clusters that can accept new stories across runs. Keyword similarity is intentionally simpler than semantic understanding and can occasionally misgroup coverage.',
    learning:
      'Practised coordinating a TypeScript frontend, Node API, and Python worker; designing persistent ingestion jobs; and communicating data-processing state in an interactive interface.',
  },
]
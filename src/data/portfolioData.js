export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const aboutCards = [
  { icon: '⚡', title: 'High Performance', desc: 'Systems optimized for speed, scale, and absolute zero downtime in production' },
  { icon: '🛡️', title: 'Secure By Design', desc: 'Security baked in from day one — OWASP, threat modeling, and hardened APIs' },
  { icon: '🤖', title: 'AI-Powered', desc: 'Integrating intelligent systems that learn, adapt, automate, and scale' },
  { icon: '☁️', title: 'Cloud Native', desc: 'Designed for the cloud with Docker, AWS, and scalable infrastructure' },
];

export const techStack = [
  'React', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'Flask',
  'MongoDB', 'MySQL', 'PostgreSQL', 'Docker', 'AWS', 'Firebase',
  'Tailwind CSS', 'Python', 'Java', 'TypeScript', 'Socket.IO', 'Redis',
  'AI & Machine Learning', 'Cybersecurity', 'GraphQL', 'Kubernetes',
];

export const projects = [
  {
  "number": "01 / 07",
  "badge": "Task Management · Fullstack",
  "name": "TaskFlow - Advanced Task Management System",
  "desc": "Complete task management platform similar to Trello with workspaces, boards, lists, tasks, drag-and-drop functionality, real-time updates, user authentication, team collaboration, task assignments, due dates, priority levels, comments, notifications, and a beautiful modern UI with Tailwind CSS.",
  "tags": ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "React Router", "Axios"],
  "image": "https://res.cloudinary.com/dyuurossx/image/upload/v1779874456/Capture_d_%C3%A9cran_2026-05-27_102908_snh1lw.png",
  "videoSrc": "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  "liveUrl": "https://your-taskflow.vercel.app",
  "githubUrl": "https://github.com/mohamedalirz/TaskManager"
},
  {
  number: "02 / 07",
  badge: "E-Commerce · Fullstack",
  name: "Ultra-Premium eCommerce Platform",
  desc: "Fullstack enterprise eCommerce platform with React.js, Node.js, real-time notifications, JWT authentication, admin dashboard, product management, shopping cart, order tracking, and futuristic UI/UX with glassmorphism effects.",
  tags: ["React", "Node.js", "Express", "Socket.IO", "Redux", "Tailwind CSS", "JWT", "MongoDB"],
  image: "https://res.cloudinary.com/dyuurossx/image/upload/v1779765108/Capture_d_%C3%A9cran_2026-05-26_035918_z2fqnz.png",
  videoSrc: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  liveUrl: "https://your-ecommerce.vercel.app",
  githubUrl: "https://github.com/mohamedalirz/ultra-premium-ecommerce.git"
},
  {
  number: "03 / 07",
  badge: "Cybersecurity · Fullstack",
  name: "CyberSentinel - Security Scanner Platform",
  desc: "A modern cybersecurity & pentesting web application that scans websites for security vulnerabilities, analyzes security headers, detects XSS and SQL injection flaws, performs port scanning, and provides detailed risk assessments with a beautiful dark theme dashboard.",
  tags: ["React", "Flask", "Python", "Tailwind CSS", "Axios", "REST API", "Socket Programming", "Security Testing"],
  image: "https://res.cloudinary.com/dyuurossx/image/upload/v1779878481/Capture_d_%C3%A9cran_2026-05-27_113608_ghwuq1.png",
  videoSrc: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  liveUrl: "https://cybersentinel.vercel.app",
  githubUrl: "https://github.com/mohamedalirz/-CyberSentinel",
},
  {
  "number": "04 / 07",
  "badge": "Finance · Fullstack",
  "name": "GyMoney - Personal Finance Management Platform",
  "desc": "A comprehensive personal finance management application built with Spring Boot and React that helps users track income, expenses, budgets, and savings goals. Features include transaction categorization, financial analytics, budget planning, expense tracking, and interactive dashboards with beautiful data visualization.",
  "tags": ["React", "Spring Boot", "Java", "MySQL", "JPA/Hibernate", "Spring Security", "JWT", "Maven", "Tailwind CSS"],
  "image": "https://res.cloudinary.com/dyuurossx/image/upload/q_auto/f_auto/v1780011261/Capture_d_%C3%A9cran_2026-05-29_003018_qrqbag.png",
  "videoSrc": "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  "liveUrl": "https://gymoney.vercel.app",
  "githubUrl": "https://github.com/mohamedalirz/GyMoney"
},
  {
  "number": "05 / 07",
  "badge": "Transport · Fullstack",
  "name": "TrainOps - Railway Management Platform",
  "desc": "A comprehensive railway management application built with Spring Boot and React that helps manage train schedules, ticket bookings, user payments, and real-time tracking. Features include train management, ticket purchasing, payment processing with multiple methods, user authentication, QR code validation, and interactive dashboards with real-time analytics.",
  "tags": ["React", "Spring Boot", "Java", "MySQL", "JPA/Hibernate", "Spring Security", "JWT", "Maven", "Tailwind CSS", "Axios", "Framer Motion"],
  "image": "https://res.cloudinary.com/dyuurossx/image/upload/q_auto/f_auto/v1780125927/Capture_d_%C3%A9cran_2026-05-30_080437_sk0zvg.png",
  "videoSrc": "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  "liveUrl": "https://trainops.vercel.app",
  "githubUrl": "https://github.com/mohamedalirz/TrainOps"
}
];

export const heroStats = [
  { id: 'cnt-projects', target: projects.length, suffix: '+', label: 'Projects Built', value: projects.length },
  { id: 'cnt-tech', target: techStack.length, suffix: '+', label: 'Technologies', value: techStack.length },
  { id: 'cnt-infinity', value: '∞', label: 'Performance' },
];

export const skillCategories = [
  {
    icon: '🖥️',
    title: 'Frontend Development',
    skills: [
      { name: 'React / Next.js', pct: 95, w: 0.95 },
      { name: 'TypeScript', pct: 90, w: 0.90 },
      { name: 'Tailwind CSS', pct: 93, w: 0.93 },
      { name: 'UI/UX Design Systems', pct: 85, w: 0.85 },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    skills: [
      { name: 'Node.js / Express', pct: 94, w: 0.94 },
      { name: 'Spring Boot / Java', pct: 85, w: 0.85 },
      { name: 'Flask / Python', pct: 88, w: 0.88 },
      { name: 'REST / GraphQL APIs', pct: 96, w: 0.96 },
    ],
  },
  {
    icon: '🗄️',
    title: 'Database Management',
    skills: [
      { name: 'MongoDB', pct: 92, w: 0.92 },
      { name: 'MySQL / PostgreSQL', pct: 89, w: 0.89 },
      { name: 'Firebase / Firestore', pct: 86, w: 0.86 },
      { name: 'Redis / Caching', pct: 81, w: 0.81 },
    ],
  },
  {
    icon: '☁️',
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker / Kubernetes', pct: 87, w: 0.87 },
      { name: 'AWS Cloud Services', pct: 84, w: 0.84 },
      { name: 'CI/CD Pipelines', pct: 83, w: 0.83 },
      { name: 'Linux / Shell', pct: 89, w: 0.89 },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    skills: [
      { name: 'LLM Integration (GPT/Claude)', pct: 91, w: 0.91 },
      { name: 'ML / Data Science', pct: 82, w: 0.82 },
      { name: 'NLP Processing', pct: 78, w: 0.78 },
      { name: 'Process Automation', pct: 93, w: 0.93 },
    ],
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    skills: [
      { name: 'Penetration Testing', pct: 80, w: 0.80 },
      { name: 'Secure API Design', pct: 93, w: 0.93 },
      { name: 'OWASP / Threat Modeling', pct: 86, w: 0.86 },
      { name: 'Cryptography', pct: 79, w: 0.79 },
    ],
  },
];

export const experiences = [
  {
    period: '2025 — Present',
    title: 'Fullstack Developer',
    org: '// Karriery · Startup Collaboration',
    bullets: [
      'Worked on TaskFlow, a Trello-like project management platform for teams and startups',
      'Built modern fullstack features using React.js, Node.js, Express, and MongoDB',
      'Implemented drag-and-drop task system with boards, lists, and workspace management',
      'Developed authentication system using JWT with protected routes and user roles',
      'Created scalable backend APIs for task management and team collaboration',
      'Improved UI/UX with modern SaaS dashboard design and responsive layouts',
    ],
  },
  {
    period: '2024 — 2025',
    title: 'Fullstack Developer',
    org: '// Freelance · Personal SaaS Projects',
    bullets: [
      'Developed multiple fullstack applications including eCommerce, ATS, and SaaS dashboards',
      'Built CyberSentinel cybersecurity tools for vulnerability scanning and security analysis',
      'Created GyMoney gym management system for handling memberships and subscriptions',
      'Designed REST APIs using Node.js, Express, Flask, and MongoDB/MySQL databases',
      'Implemented authentication systems, admin dashboards, and real-time features',
    ],
  },
  {
    period: '2023 — 2024',
    title: 'Frontend & Backend Developer',
    org: '// Independent Projects · Learning Phase',
    bullets: [
      'Built responsive web applications using React.js and modern UI libraries',
      'Developed backend APIs with Express.js and Flask for CRUD-based systems',
      'Worked on Spring Boot projects including management and enterprise systems',
      'Practiced cybersecurity tools, automation scripts, and scanning utilities',
      'Learned database design using MongoDB and MySQL with real projects',
    ],
  },
];

export const contactInfo = {
  heading: 'Ready to Build?',
  desc: "I work with elite clients, startups, and enterprises to build systems that matter. Whether it's an AI platform, a cybersecurity tool, or a full SaaS product — let's make it extraordinary.",
  socials: [
    { icon: '✉', tag: 'Email', val: 'mohammedalirzeygui@gmail.com', href: 'mailto:mohammedalirzeygui@gmail.com' },
    { icon: '◈', tag: 'GitHub', val: 'github.com/mohamedalirz', href: 'https://github.com/mohamedalirz' },
    { icon: '◉', tag: 'LinkedIn', val: 'linkedin.com/in/mohamed-ali-rzeygui', href: 'https://www.linkedin.com/in/mohamed-ali-rzeygui-38b76a317/' },
  ],
};

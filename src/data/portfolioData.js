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
    period: '2023 — Present',
    title: 'Senior Fullstack Developer',
    org: '// Freelance · Remote · Global Clients',
    bullets: [
      'Architected and shipped AI SaaS platforms serving thousands of concurrent users with near-zero downtime',
      'Designed hardened backend APIs with JWT authentication, rate limiting, and full OWASP compliance',
      'Built scalable microservices deployed on AWS using Docker and Kubernetes orchestration',
      'Delivered real-time communication systems with Socket.IO and WebRTC supporting 10k+ connections',
      'Integrated LLMs (OpenAI GPT, custom fine-tuned models) into production-grade applications',
      'Automated data pipelines and business workflows using Python and machine learning models',
    ],
  },
  {
    period: '2022 — 2023',
    title: 'Fullstack Engineer',
    org: '// Independent Developer · Startup Projects',
    bullets: [
      'Developed enterprise web platforms with React, Node.js, and Spring Boot at production scale',
      'Automated complex workflows and data pipelines using Python and ML models',
      'Deployed multi-tenant SaaS architectures on AWS EC2, Lambda, and RDS',
      'Implemented cybersecurity tooling: vulnerability scanners and threat monitoring dashboards',
      'Designed and optimized relational and NoSQL database schemas for high-throughput systems',
    ],
  },
  {
    period: '2021 — 2022',
    title: 'Full-Stack Developer & Systems Designer',
    org: '// Personal Projects · Open Source · Self-Led',
    bullets: [
      'Built and launched 10+ production-grade full-stack applications from concept to deployment',
      'Mastered cloud infrastructure, CI/CD pipelines, and container orchestration workflows',
      'Contributed to open-source security tools and developer productivity projects',
      'Developed mobile-responsive progressive web apps and cross-platform solutions',
    ],
  },
];

export const contactInfo = {
  heading: 'Ready to Build?',
  desc: "I work with elite clients, startups, and enterprises to build systems that matter. Whether it's an AI platform, a cybersecurity tool, or a full SaaS product — let's make it extraordinary.",
  socials: [
    { icon: '✉', tag: 'Email', val: 'developer@matrix.dev', href: 'mailto:developer@matrix.dev' },
    { icon: '◈', tag: 'GitHub', val: 'github.com/devmatrix', href: 'https://github.com' },
    { icon: '◉', tag: 'LinkedIn', val: 'linkedin.com/in/devmatrix', href: 'https://linkedin.com' },
  ],
};

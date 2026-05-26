# DEV.MATRIX — React Portfolio

A full React conversion of the DEV.MATRIX portfolio, structured as a proper multi-component project.

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx               # Root component — assembles all sections
    │
    ├── styles/
    │   └── globals.css       # CSS variables, keyframes, shared utilities
    │
    ├── data/
    │   └── portfolioData.js  # All content data (projects, skills, experience, etc.)
    │
    ├── hooks/
    │   ├── useCursor.js      # Custom cursor logic
    │   ├── useScrollReveal.js# IntersectionObserver-based reveal
    │   └── useCounters.js    # Animated number counters
    │
    ├── components/           # Reusable layout/UI components
    │   ├── Cursor.jsx / .module.css
    │   ├── Loader.jsx / .module.css
    │   ├── BackgroundCanvas.jsx / .module.css
    │   ├── Navbar.jsx / .module.css
    │   └── Footer.jsx / .module.css
    │
    └── pages/                # Full-page sections
        ├── Hero.jsx / .module.css
        ├── About.jsx / .module.css
        ├── TechStack.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Skills.jsx / .module.css
        ├── Experience.jsx / .module.css
        └── Contact.jsx / .module.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

All portfolio content lives in **`src/data/portfolioData.js`** — edit that file to update your name, projects, skills, experience, and contact info without touching any component code.

## Tech Stack

- **React 18** with functional components and hooks
- **Vite** for blazing fast development
- **CSS Modules** for scoped, collision-free styles
- **Canvas API** for the animated particle background
- **IntersectionObserver** for scroll-triggered animations

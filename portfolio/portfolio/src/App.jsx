import { useEffect } from 'react';
import './styles/globals.css';

// Layout
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Hooks
import { useScrollReveal } from './hooks/useScrollReveal';

// Sections / Pages
import Hero from './pages/Hero';
import About from './pages/About';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Cursor />
      <Loader />
      <BackgroundCanvas />
      <Navbar />

      <main>
        <Hero />
        <div className="divider-line" />

        <About />
        <div className="divider-line" />

        <TechStack />
        <div className="divider-line" />

        <Projects />
        <div className="divider-line" />

        <Skills />
        <div className="divider-line" />

        <Experience />
        <div className="divider-line" />

        <Contact />
        <div className="divider-line" />
      </main>

      <Footer />
    </>
  );
}

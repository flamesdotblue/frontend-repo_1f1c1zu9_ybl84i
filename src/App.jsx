import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Github, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-gray-950/70 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
          <a href="#home" className="font-bold tracking-tight text-white">Flames Blue</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-gray-900/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket size={14} className="text-teal-300" />
          Interactive 3D • Modern • Playful
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          I craft delightful products that feel alive
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Designer and front‑end engineer focused on immersive web experiences, clean systems, and high‑performance interfaces.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-teal-400 px-5 py-3 text-gray-900 font-semibold shadow-lg shadow-teal-400/20 hover:bg-teal-300 transition"
          >
            View Work
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-3 text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-3 text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

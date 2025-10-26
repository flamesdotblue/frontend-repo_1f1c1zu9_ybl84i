import React from 'react';
import { User, Star, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 bg-gray-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(125,211,252,0.08),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <User size={14} className="text-teal-300" />
              About Me
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Product designer turned creative engineer</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I blend aesthetics with systems thinking. My work spans design systems, interaction design, and high‑fidelity front‑end development. I love bringing ideas to life with motion and 3D, while keeping accessibility and performance at the core.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <Star className="text-yellow-300" />
                <p className="mt-2 text-sm text-white/70">8+ years experience</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <Code className="text-teal-300" />
                <p className="mt-2 text-sm text-white/70">React • Three.js • Framer</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <Star className="text-blue-300" />
                <p className="mt-2 text-sm text-white/70">Design Systems & UX</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur">
              <h3 className="font-semibold">What I do</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc pl-5">
                <li>Immersive hero sections with 3D and motion</li>
                <li>Conversion‑focused landing pages</li>
                <li>Scalable design systems and component libraries</li>
                <li>Data‑driven dashboards with delightful micro‑interactions</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur">
              <h3 className="font-semibold">How I work</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc pl-5">
                <li>Collaborative, transparent, and iterative</li>
                <li>Accessibility and performance first</li>
                <li>Design tokens, variants, and reuse by default</li>
                <li>Measure, learn, and ship faster</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

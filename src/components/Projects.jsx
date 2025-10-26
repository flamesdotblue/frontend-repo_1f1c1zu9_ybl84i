import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Design System',
    desc: 'A token-driven UI kit with theming, motion recipes, and docs.',
    tag: 'Design System',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: '3D Marketing Microsite',
    desc: 'Interactive product storytelling with WebGL scenes and scroll.',
    tag: '3D Web',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Clean, responsive dashboard with real‑time data and charts.',
    tag: 'Dashboard',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 bg-gray-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(56,189,248,0.08),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles size={14} className="text-sky-300" />
              Selected Work
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Projects</h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            Start a project
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="text-xs text-white/70">{p.tag}</div>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink size={18} className="text-white/60 group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

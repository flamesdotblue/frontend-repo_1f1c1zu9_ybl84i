import React from 'react';
import { Mail, MessageSquareHeart } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 bg-gray-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(45,212,191,0.08),transparent_40%)]" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <MessageSquareHeart size={14} className="text-pink-300" />
          Let’s collaborate
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Have an idea? I’d love to help ship it.</h2>
        <p className="mt-3 text-white/80">
          Available for freelance projects, product collaborations, and design systems work.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-teal-400 px-5 py-3 text-gray-900 font-semibold shadow-lg shadow-teal-400/20 hover:bg-teal-300 transition"
          >
            <Mail size={18} /> Email me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition"
          >
            See my work
          </a>
        </div>
        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}

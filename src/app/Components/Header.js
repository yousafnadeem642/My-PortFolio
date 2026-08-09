
"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-cyan-400"
          >
            Yousaf
            <span className="text-cyan-400">.</span>
          </a>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="/#projects"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="/#contact"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Contact
            </a>

            <a
              href="#"
              className="px-5 py-2 rounded-lg
              bg-cyan-400 text-slate-950
              font-semibold hover:bg-cyan-300 transition"
            >
              Hire Me
            </a>

          </div>


          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-3 flex flex-col gap-4">

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="/#projects"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Contact
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-cyan-400 font-semibold"
            >
              Hire Me →
            </a>

          </div>
        )}

      </nav>
    </header>
  );
}


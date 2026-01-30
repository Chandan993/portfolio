"use client";

import { motion } from "framer-motion";
import { Github, Linkedin,} from "lucide-react";
import { JSX } from "react";

// ---------------- TYPES ----------------

type Qualification = {
  year: string;
  title: string;
  org: string;
};

type Project = {
  title: string;
  desc: string;
  link: string;
};

// ---------------- PAGE ----------------

export default function Page(): JSX.Element {
  const skills: string[] = [
    "Java",
    "C++",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Git",
  ];

  const qualifications: Qualification[] = [
    {
      year: "2022 – 2026",
      title: "B.E. Computer Science",
      org: "Chandigarh College of Engineering and Technology",
    },
  ];

  const projects: Project[] = [
    {
      title: "Quickstay shopping Website",
      desc: "Modern portfolio using Next.js, Tailwind & Framer Motion",
      link: "https://shopping-app-65xx.onrender.com",
    },
    {
      title: "Full Stack Hotel booking app",
      desc: "MERN app with authentication, cart and orders",
      link: "https://hb-gs.vercel.app/",
    },
    {
      title: "ML Prediction System",
      desc: "Flask-based ML app with end-to-end workflow",
      link: "https://github.com/",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* ---------------- HEADER ---------------- */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-400">Chandan Sharma</h1>
          <div className="flex gap-6 text-sm">
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#qualification" className="hover:text-blue-400">Qualification</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </nav>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="text-center py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hi, I'm Chandan Sharma
        </motion.h2>
        <p className="mt-4 text-lg opacity-90">
          Full Stack Developer | Java • React • C++ • Next.js
        </p>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold text-blue-400 mb-8">My Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-center font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- QUALIFICATION ---------------- */}
      <section id="qualification" className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-blue-400 mb-10">Qualification</h3>
          <div className="space-y-6">
            {qualifications.map((q, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="border-l-4 border-blue-500 pl-6"
              >
                <span className="text-sm text-blue-400">{q.year}</span>
                <h4 className="text-xl font-semibold mt-1">{q.title}</h4>
                <p className="text-slate-400">{q.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold text-blue-400 mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
            >
              <h4 className="text-xl font-semibold text-blue-300 mb-2">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block text-sm font-medium text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="bg-slate-900 py-20 text-center">
        <h3 className="text-3xl font-semibold text-blue-400 mb-6">Contact Me</h3>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Chandan993" target="_blank" className="hover:text-blue-400"><Github /></a>
          <a href="https://www.linkedin.com/in/chandan-sharma-331229256/" target="_blank" className="hover:text-blue-400"><Linkedin /></a>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 Chandan Sharma. All rights reserved.
      </footer>
    </main>
  );
}

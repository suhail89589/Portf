import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Globe,
  Zap,
  Target,
  Activity,
  Code,
} from "lucide-react";

// Asset Import
import image3 from "../assets/image3.png";
import image2 from "../assets/image2.png";
import image5 from "../assets/image5.png";
import image9 from "../assets/image9.png";

const projects = [
  {
    title: "Brofessor AI",
    category: "AI & Education",
    tagline: "Your Personal AI Professor.",
    problem:
      "Students struggle to get hyper-personalized learning paths from standard academic documents.",
    solution:
      "Developed an AI-powered study assistant utilizing RAG architecture to parse and understand complex materials.",
    outcome:
      "Provides interactive, context-aware tutoring directly from the student's uploaded documents.",
    tech: ["React.js", "Groq API", "Tailwind", "RAG"],
    image: image3,
    github: "https://github.com/suhail89589/Brofessor.Ai",
    live: "https://brofessor-ai-frontend.vercel.app",
    color: "#3b82f6",
  },
  {
    title: "Step2Campus",
    category: "Edtech Platform",
    tagline: "JEE/NEET Mentorship",
    problem:
      "Aspirants lack direct data-driven mentorship and struggle with counseling analytics.",
    solution:
      "Built a platform connecting aspirants with college seniors based on real-time rank data.",
    outcome:
      "Active platform facilitating better decision making for JEE/NEET candidates.",
    tech: ["Node.js", "React.js", "Tailwindcss", "MongoDB"],
    image: image5,
    github: "https://github.com/suhail89589/Step2Campus",
    live: "https://github.com/suhail89589/Step2Campus",
    color: "#f59e0b",
  },
  {
    title: "PM.Cafe",
    category: "Luxury Dining Experience",
    tagline: "Where Heritage Meets Contemporary",
    problem:
      "Traditional restaurant sites often fail to translate the physical ambiance into a digital space, leading to a disconnected brand experience.",
    solution:
      "Developed a high-performance, GSAP-driven visual experience focusing on architectural typography, parallax storytelling, and a seamless inquiry flow.",
    outcome:
      "A sophisticated digital presence that reduced bounce rates and increased private event inquiries through immersive motion design.",
    tech: ["React.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    image: image9, // This would be the preview of our new image-less layout
    github: "https://github.com/suhail89589/PM.Cafe",
    live: "https://pm-cafe.vercel.app/",
    color: "#a37a5c", // Matching your 'cafe-brown' brand color
  },
  {
    title: "Vox-Tutor",
    category: "Accessibility Tech",
    tagline: "Voice-First AI Tutor",
    problem:
      "Digital learning platforms often create barriers for the visually impaired.",
    solution:
      "Designed a specialized assistant featuring real-time Speech-to-Speech (StS) integration.",
    outcome:
      "Successfully broke digital learning barriers, creating an inclusive learning environment.",
    tech: ["Node.js", "Deepgram", "Web Speech API", "MongoDB"],
    image: image2,
    github: "https://github.com/suhail89589/Vox-Mvp",
    live: "https://youtu.be/jjQtbliik6s",
    color: "#10b981",
  },
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
    >
      {/* Visual Side */}
      <div className="w-full lg:w-[50%] group relative">
        <motion.div
          whileHover={{ y: -10 }}
          className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900 shadow-2xl"
        >
          {/* Subtle Glow Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`,
            }}
          />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-out"
          />

          {/* Overlay Link */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white text-black rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            >
              <ArrowUpRight size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-[50%] space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-zinc-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              {project.category}
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-none tracking-tight">
            {project.title}
          </h3>
          <p className="text-xl text-zinc-400 font-medium">{project.tagline}</p>
        </div>

        {/* Breakdown section */}
        <div className="space-y-4 bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Target size={14} className="text-red-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                The Problem
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="h-px w-full bg-zinc-800/50" />

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Code size={14} className="text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                The Solution
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="h-px w-full bg-zinc-800/50" />

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Activity size={14} className="text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                The Outcome
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold text-zinc-400 border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 rounded-full uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 pt-2">
          <a
            href={project.live}
            className="group relative inline-flex items-center gap-2 text-sm font-bold text-white overflow-hidden"
          >
            <span>Live Project</span>
            <div className="relative overflow-hidden w-4 h-4">
              <Globe
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-full"
              />
              <Globe
                size={16}
                className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full text-blue-400"
              />
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href={project.github}
            className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-white transition-colors"
          >
            <Github size={18} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#050505] py-24 md:py-40 border-t border-zinc-900/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Modern Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
              SHIPPED <br />
              <span className="text-zinc-800 outline-text">PRODUCTS</span>
            </h2>
            <p className="text-zinc-500 text-lg">
              A track record of taking complex problems and engineering robust,
              scalable solutions. Not just code — real products.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[100px] font-black text-zinc-900 leading-none select-none">
              03
            </span>
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px #27272a;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ArrowUpRight, Globe } from "lucide-react";
import image3 from "../assets/image3.png";

import image2 from "../assets/image2.png";

import image5 from "../assets/image5.png";
const projects = [
  {
    title: "Brofessor AI",
    category: "AI & Education",
    tagline: "Your Personal AI Professor.",
    description:
      "An AI-powered study assistant using RAG architecture to provide hyper-personalized learning paths from academic documents.",
    tech: ["React.js", "Groq API", "Tailwind", "RAG"],
    image: image3, // Replace with your image3
    github: "https://github.com/suhail89589/Brofessor.Ai",
    live: "https://brofessor-ai.vercel.app/",
    color: "#3b82f6",
  },
  {
    title: "Vox-Tutor",
    category: "Accessibility Tech",
    tagline: "Voice-First AI Tutor",
    description:
      "A specialized assistant for the visually impaired, featuring real-time StS integration to break digital learning barriers.",
    tech: ["Node.js", "Deepgram", "Web Speech API", "MongoDB"],
    image: image2, // Replace with your image2
    github: "https://github.com/suhail89589/Vox-Mvp",
    live: "https://vox-mvp.vercel.app/",
    color: "#10b981",
  },
  {
    title: "Step2Campus",
    category: "Edtech Platform",
    tagline: "JEE/NEET Mentorship",
    description:
      "Connecting aspirants with college seniors based on real-time rank data and counseling analytics.",
    tech: ["Node.js", "React.js", "Tailwindcss", "MongoDB"],
    image: image5, // Replace with your image5
    github: "https://github.com/suhail89589/Step2Campus",
    live: "https://github.com/suhail89589/Step2Campus",
    color: "#f59e0b",
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
      <div className="w-full lg:w-[60%] group relative">
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

        {/* Floating Tech Badges (Desktop Only) */}
        <div
          className={`hidden lg:flex absolute -bottom-4 ${isEven ? "-right-4" : "-left-4"} flex-wrap gap-2 max-w-[200px]`}
        >
          {project.tech.slice(0, 2).map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-[10px] font-bold text-white uppercase tracking-widest rounded-lg shadow-xl"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-[40%] space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-zinc-800" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              {project.category}
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-none">
            {project.title}
          </h3>
        </div>

        <p className="text-zinc-400 text-lg font-medium leading-snug">
          {project.tagline}
        </p>

        <p className="text-zinc-500 text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] font-bold text-zinc-600 border border-zinc-900 px-2 py-1 rounded-md uppercase"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href={project.live}
            className="group relative inline-flex items-center gap-2 text-sm font-bold text-white overflow-hidden"
          >
            <span>Live Experience</span>
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
            <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href={project.github}
            className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-white transition-colors"
          >
            <Github size={18} />
            <span>Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-[#050505] py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Modern Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
              FEATURED <br />
              <span className="text-zinc-800 outline-text">PROJECTS</span>
            </h2>
            <p className="text-zinc-500 text-lg">
              A collection of intent-driven digital products where engineering
              meets intuition.
            </p>
          </div>
          <div className="text-right">
            <span className="text-[100px] font-black text-zinc-900 leading-none select-none">
              03
            </span>
          </div>
        </div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #27272a;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;

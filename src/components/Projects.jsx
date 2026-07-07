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
import image10 from "../assets/image10.png";
import image9 from "../assets/image9.png";
import image7 from "../assets/image7.png";

const projects = [
  {
    title: "Divergix Labs",
    category: "Flagship Research Initiative",
    tagline: "A personal playground for exploring agentic systems and local LLM execution.",
    challenge:
      "Standard LLM APIs are costly and abstract away inner mechanics. I wanted to research how model alignment, prompt constraints, and context retrieval function directly on local hardware.",
    approach:
      "Built a modular architecture using Python, FastAPI, and PyTorch. Integrated Ollama for local model execution and ChromaDB for retrieval-augmented workflows, testing various embedding models and caching structures.",
    impact:
      "Created an extensible research base that hosts multiple active prototypes, allowing quick iteration on model parameters and prompt schemas without API dependencies.",
    tech: [
      "Python",
      "PyTorch",
      "FastAPI",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "SQLite",
      "ChromaDB",
      "Ollama"
    ],
    image: image7,
    github: "https://github.com/suhail89589e/Divergix-Labs",
    live: "https://divergix-labs.vercel.app/",
    color: "#6366f1",
  },
  {
    title: "Prompt Studio",
    category: "AI Developer Tool",
    tagline: "Interactive playground for prompt testing and LLM response comparison.",
    challenge:
      "Developers lack tools to systematically test prompts against multiple open-source models side-by-side on local machines, leading to slow integration loops.",
    approach:
      "Engineered a React interface backed by a Node.js orchestrator that calls multiple local Ollama instances simultaneously, parsing streams and tracking latency.",
    impact:
      "Drastically reduced the prompt iteration cycle, enabling visual comparison of performance, output format reliability, and inference times.",
    tech: ["React.js", "Node.js", "Express", "Ollama", "Tailwind CSS"],
    image: image10,
    github: "https://github.com/suhail89589/Prompt-studio",
    
    color: "#f59e0b",
  },
  {
    title: "Brofessor AI",
    category: "AI Application",
    tagline: "Context-aware reading assistant using document retrieval.",
    challenge:
      "Standard LLMs have limited context windows and lack domain knowledge for highly specialized academic documents, resulting in hallucinations.",
    approach:
      "Implemented a Retrieval-Augmented Generation (RAG) system utilizing PDF parsing, document chunking, and semantic searching over vector embeddings before query compilation.",
    impact:
      "Provides contextually accurate study assistance based strictly on uploaded documents, preventing out-of-bounds hallucinations.",
    tech: ["React.js", "Groq API", "Tailwind", "RAG", "ChromaDB"],
    image: image3,
    github: "https://github.com/suhail89589/Brofessor.Ai",
    live: "https://brofessor-ai-75zr.vercel.app/",
    color: "#3b82f6",
  },
  {
    title: "Vox-Tutor",
    category: "Voice AI",
    tagline: "Real-time speech-to-speech interaction helper.",
    challenge:
      "Traditional voice systems rely on high-latency TTS/STT pipelines, which break the natural flow of real-time conversational assistance.",
    approach:
      "Designed a lightweight pipeline linking Web Speech API with streaming audio endpoints, optimizing response serialization to minimize visual and audio latency.",
    impact:
      "Enabled low-latency conversational feedback, making conversational interfaces accessible for audio-first tasks.",
    tech: ["Node.js", "Deepgram", "Web Speech API", "MongoDB", "Express"],
    image: image2,
    github: "https://github.com/suhail89589/Vox-Mvp",
    live: "https://youtu.be/jjQtbliik6s",
    color: "#10b981",
  },
  {
    title: "PM.Cafe",
    category: "Product Engineering",
    tagline: "High-performance digital storytelling for culinary spaces.",
    challenge:
      "Standard food/restaurant sites rely on static templates that fail to convey physical ambiance, resulting in low digital engagement.",
    approach:
      "Built a responsive, motion-first architecture using Framer Motion and custom CSS grid structures for fluid typography and page transitions.",
    impact:
      "Designed an editorial visual presence that elevates physical restaurant branding through fluid digital interaction.",
    tech: ["React.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    image: image9,
    github: "https://github.com/suhail89589/PM.Cafe",
    live: "https://pro-cafe-frontend.vercel.app/",
    color: "#a37a5c",
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
              href={(project.title === "Prompt Studio" || project.title === "Vox-Tutor") ? project.github : project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white text-black rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            >
              {(project.title === "Prompt Studio" || project.title === "Vox-Tutor") ? <Github size={24} /> : <ArrowUpRight size={24} />}
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
                Challenge
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="h-px w-full bg-zinc-800/50" />

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Code size={14} className="text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                Approach
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {project.approach}
            </p>
          </div>

          <div className="h-px w-full bg-zinc-800/50" />

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Activity size={14} className="text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                Impact
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {project.impact}
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
          {project.title !== "Prompt Studio" && project.title !== "Vox-Tutor" && (
            <a
              href={project.live}
              className="group relative inline-flex items-center gap-2 text-sm font-bold text-white overflow-hidden"
            >
              <span>View Project</span>
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
          )}

          <a
            href={project.github}
            className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-white transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
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
              CASE <br />
              <span className="text-zinc-800 outline-text">STUDIES</span>
            </h2>
            <p className="text-zinc-500 text-lg">
              Engineering-focused case studies showcasing how I build and experiment with intelligent software systems.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[100px] font-black text-zinc-900 leading-none select-none">
              05
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

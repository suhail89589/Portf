import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Activity, Cpu, Cloud, X } from "lucide-react";

// 1. Data Structure with Storytelling expansion
const activeProjects = [
  {
    id: "autism-therapist",
    title: "Agentic AI Autism Therapist",
    category: "AI × EdTech",
    status: "Research & Exploration",
    desc: "Building a context-aware agentic AI system that adapts to children on the autism spectrum, delivering real-time, personalized guidance.",
    icon: <Cpu size={22} />,
    theme: {
      text: "text-emerald-400",
      bg: "bg-emerald-500",
      borderHover: "hover:border-emerald-500/50",
      gradient: "from-emerald-500/20 to-transparent",
      glowBg: "bg-emerald-500/20",
    },
    whyBuilding:
      "Children on the autism spectrum often struggle with generalized educational tools. There is a strong need for patient, highly adaptable, and personalized AI that can guide them at their own pace without overwhelming them.",
    whatBuilding:
      "An AI-powered application featuring a context-aware agent designed to interact, understand behavioral nuances, and offer gentle nudges and therapies tailored specifically for neurodivergent children.",
    techApproach: [
      "Large Language Models for dynamic conversation",
      "Sentiment and context tracking",
      "React + Tailwind for accessible UI",
      "FastAPI backend for low-latency logic",
    ],
    challenges:
      "Ensuring the AI remains perfectly safe, predictable in tone, and genuinely helpful rather than frustrating. It requires stringent prompt guardrails and robust continuous context memory.",
    vision:
      "To become a staple supportive companion for neurodivergent children, helping them navigate emotional regulation and learning safely alongside human therapists.",
  },
  {
    id: "agent-workflow",
    title: "Agent Workflow Engine",
    category: "AI Systems",
    status: "Prototyping",
    desc: "Designing a modular agent orchestration system for multi-step reasoning and automation.",
    icon: <Cpu size={22} />,
    theme: {
      text: "text-blue-400",
      bg: "bg-blue-500",
      borderHover: "hover:border-blue-500/50",
      gradient: "from-blue-500/20 to-transparent",
      glowBg: "bg-blue-500/20",
    },

    whyBuilding:
      "Most AI applications today rely on single-step prompts, limiting their ability to handle complex, multi-step reasoning. There is a need for systems that can coordinate multiple agents and workflows dynamically.",

    whatBuilding:
      "A modular agent orchestration engine that enables chaining, routing, and managing multiple AI agents to perform structured tasks such as reasoning, planning, and execution.",

    techApproach: [
      "LLM-based agents with role specialization",
      "Task routing and workflow pipelines",
      "Memory management for multi-step reasoning",
      "FastAPI backend for orchestration layer",
    ],

    challenges:
      "Maintaining context across multiple agents without losing coherence, optimizing latency for chained workflows, and designing a system that remains flexible yet predictable.",

    vision:
      "To build a scalable foundation for agent-based systems that can power complex applications, from autonomous assistants to enterprise-level AI workflows.",
  },

  {
    id: "vox-tutor",
    title: "Vox Tutor 2.0",
    category: "Accessibility × AI",
    status: "Concept Phase",
    desc: "Designing a fully voice-driven learning system to enable hands-free interaction for accessibility-focused education.",
    icon: <Cloud size={22} />,
    theme: {
      text: "text-purple-400",
      bg: "bg-purple-500",
      borderHover: "hover:border-purple-500/50",
      gradient: "from-purple-500/20 to-transparent",
      glowBg: "bg-purple-500/20",
    },
    whyBuilding:
      "Visual-heavy educational platforms alienate visually impaired learners or those requiring physical accessibility. Education should be inherently inclusive to everyone.",
    whatBuilding:
      "A voice-first tutor platform where the primary mode of interaction—from navigation to learning and assessment—is entirely conversational and hands-free.",
    techApproach: [
      "Advanced Speech-to-Text (Whisper)",
      "Natural Text-to-Speech (ElevenLabs)",
      "React PWA capabilities",
      "Serverless architecture for immediate scale",
    ],
    challenges:
      "Creating a seamless conversational UI that doesn't feel like a clunky phone tree structure. Dealing with ambient noise, diverse accents, and interruptions naturally.",
    vision:
      "To push the boundaries of 'zero-UI' applications, ensuring anyone, regardless of physical ability, has unfettered access to high-quality tutoring.",
  },
];

// 2. Extracted Project Card Component
const ProjectCard = ({ proj, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onClick(proj)}
      className={`group relative flex flex-col justify-between p-8 bg-zinc-900/20 border border-zinc-800/60 rounded-3xl hover:bg-zinc-900/40 transition-all duration-300 cursor-pointer overflow-hidden ${proj.theme.borderHover} hover:-translate-y-1`}
    >
      {/* Subtle background glow effect on hover */}
      <div
        className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${proj.theme.glowBg}`}
      ></div>

      <div className="mb-12 relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div
            className={`p-4 rounded-2xl bg-zinc-950 border border-zinc-800 ${proj.theme.text} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
          >
            {proj.icon}
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80">
            <span
              className={`w-1.5 h-1.5 rounded-full ${proj.theme.bg} animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.5)]`}
            />
            <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">
              {proj.status}
            </span>
          </div>
        </div>

        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 block mb-3">
          {proj.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-zinc-100 transition-colors">
          {proj.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-medium">
          {proj.desc}
        </p>
      </div>

      <div className="pt-6 border-t border-zinc-800/50 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
        <span className="text-xs font-bold text-white tracking-wide">
          Explore Project
        </span>
        <div
          className={`p-2 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors`}
        >
          <ArrowUpRight
            size={16}
            className={`${proj.theme.text} group-hover:rotate-45 transition-transform duration-300`}
          />
        </div>
      </div>
    </motion.div>
  );
};

// 3. Extracted Project Panel (Slide-Over) Component
const ProjectPanel = ({ project, onClose }) => {
  // Prevent body scrolling when open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        {/* Slide-over panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative w-full max-w-xl h-full bg-[#0a0a0a] border-l border-zinc-800 shadow-2xl flex flex-col z-50 overflow-hidden"
        >
          {/* Subtle gradient background element in panel */}
          <div
            className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${project.theme.gradient} blur-[100px] opacity-30 pointer-events-none rounded-full`}
          ></div>

          {/* Header */}
          <div className="px-6 py-6 md:px-10 md:py-8 flex justify-between items-start border-b border-zinc-800/50 z-10 backdrop-blur-md bg-[#0a0a0a]/80">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${project.theme.bg} animate-pulse`}
                />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                  {project.status}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                {project.title}
              </h2>
              <span
                className={`text-xs font-bold uppercase tracking-[0.2em] ${project.theme.text}`}
              >
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 md:py-10 z-10 custom-scrollbar">
            <div className="space-y-12">
              {/* Motivation */}
              <section>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span
                    className={`w-1 h-4 rounded-full ${project.theme.bg}`}
                  ></span>
                  Why I'm Building This
                </h4>
                <p className="text-zinc-300 leading-relaxed text-lg font-medium">
                  {project.whyBuilding}
                </p>
              </section>

              {/* What I'm Building */}
              <section>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span
                    className={`w-1 h-4 rounded-full ${project.theme.bg}`}
                  ></span>
                  What I'm Building
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  {project.whatBuilding}
                </p>
              </section>

              {/* Tech Stack / Approach */}
              <section>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span
                    className={`w-1 h-4 rounded-full ${project.theme.bg}`}
                  ></span>
                  Tech & Approach
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.techApproach.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800/80 p-3 rounded-xl"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${project.theme.bg}`}
                      ></div>
                      <span className="text-sm text-zinc-300 font-medium">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenges */}
              <section>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span
                    className={`w-1 h-4 rounded-full text-red-500 bg-red-500`}
                  ></span>
                  Current Challenges
                </h4>
                <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-2xl">
                  <p className="text-zinc-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              </section>

              {/* Vision */}
              <section>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span
                    className={`w-1 h-4 rounded-full text-amber-500 bg-amber-500`}
                  ></span>
                  Vision
                </h4>
                <div className="bg-amber-500/5 border border-amber-500/10 p-5 rounded-2xl">
                  <p className="text-zinc-300 leading-relaxed">
                    {project.vision}
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Footer of panel (optional gradient fade out for scroll) */}
          <div className="h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent absolute bottom-0 left-0 right-0 pointer-events-none z-20"></div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// 4. Main Section Component
const CurrentlyBuilding = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="building-now"
      className="py-24 bg-[#050505] border-t border-zinc-900/50 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <Activity size={16} className="text-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">
                Active Sprint
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter"
            >
              WHAT I'M <span className="text-zinc-600">BUILDING NOW.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 md:text-right max-w-xs"
          >
            I usually have 2-3 experiments running at any given time. Here's the
            current focus.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeProjects.map((proj, i) => (
            <ProjectCard
              key={proj.id}
              proj={proj}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Render Slide-Over Panel */}
      {selectedProject && (
        <ProjectPanel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default CurrentlyBuilding;

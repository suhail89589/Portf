import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Terminal,
  Cpu,
  Layout,
  Layers,
  Zap,
  ChevronRight,
  Binary,
} from "lucide-react";

const skills = [
  {
    category: "Frontend Architecture",
    icon: <Layout className="w-6 h-6" />,
    description:
      "Architecting modular, accessible, and high-performance interfaces with a focus on core web vitals.",
    items: [
      "React.js",
      "Figma",
      "Tailwind CSS",
      "Framer Motion",
    ],
    color: "blue",
  },
  {
    category: "Backend Systems",
    icon: <Terminal className="w-6 h-6" />,
    description:
      "Designing resilient microservices and real-time communication layers for modern applications.",
    items: ["Node.js", "Python", "MySQL", "Redis", ],
    color: "emerald",
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cpu className="w-6 h-6" />,
    description:
      "Managing containerized environments and automated CI/CD pipelines for global scale.",
    items: ["Docker",  "AWS", "Github", "Vercel/Render"],
    color: "purple",
  },
  {
    category: "AI & Automation",
    icon: <Binary className="w-6 h-6" />,
    description:
      "Integrating LLMs and vector databases to build intelligent, automated user experiences.",
    items: ["Python","OpenAI", "RAG", "n8n"],
    color: "orange",
  },
];

const SkillCard = ({ skill, index }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between p-8 md:p-12 bg-[#0d0d0d] border border-zinc-800/50 hover:border-zinc-400/20 transition-colors duration-500 rounded-2xl overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.03),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="mb-6 inline-flex p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300">
          {skill.icon}
        </div>

        <h3 className="text-2xl font-semibold text-zinc-100 mb-4 tracking-tight">
          {skill.category}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-[320px]">
          {skill.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {skill.items.map((item, i) => (
            <li
              key={item}
              className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-zinc-900/30 border border-zinc-800/80 text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-600 transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Subtle bottom indicator */}
      <div className="mt-8 pt-6 border-t border-zinc-900/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[10px] text-zinc-600 uppercase tracking-tighter">
        
        </span>
        <ChevronRight size={14} className="text-zinc-600" />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#050505] text-white selection:bg-white selection:text-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-zinc-500 to-transparent" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">
                Capabilities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold tracking-tighter"
            >
              Modern stack. <br />
              <span className="text-zinc-600">Enterprise standards.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-zinc-500 text-base md:text-lg leading-relaxed border-l border-zinc-800 pl-6"
            >
              I bridge the gap between complex engineering and intuitive design,
              ensuring every pixel serves a purpose.
            </motion.p>
          </div>
        </div>

        {/* Improved Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <p className="text-sm text-zinc-400 font-medium">
              Currently exploring{" "}
              <span className="text-white">WebGPU & AI Automation</span>{" "}
              optimizations.
            </p>
          </div>

          <div className="flex items-center gap-8">
            {["Performance", "Security", "Scale"].map((label) => (
              <span
                key={label}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

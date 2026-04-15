import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Binary,
} from "lucide-react";

// Restored original tech stack
const skills = [
  {
    category: "Frontend Architecture",
    icon: <Layout className="w-6 h-6" />,
    description:
      "Architecting modular, accessible, and high-performance interfaces.",
    items: ["React.js", "Figma", "Tailwind CSS", "Framer Motion"],
    color: "blue",
  },
  {
    category: "Backend Systems",
    icon: <Server className="w-6 h-6" />,
    description:
      "Designing resilient microservices and real-time communication layers.",
    items: ["Node.js", "FastApi", "SQL", "Redis"],
    color: "emerald",
  },
  {
    category: "Data & Infrastructure",
    icon: <Database className="w-6 h-6" />,
    description:
      "Managing containerized environments and automated deployments.",
    items: ["Docker", "Basic AWS", "MongoDB", "PostgreSQL"],
    color: "purple",
  },
  {
    category: "Programming Foundations",
    icon: <Binary className="w-6 h-6" />,
    description:
      "Optimized algorithms and system-level performance.",
    items: ["Python", "JavaScript", "TypeScript", ],
    color: "orange",
  }
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
      className={`group relative flex flex-col justify-between p-8 md:p-10 bg-[#0a0a0a] border border-zinc-800/80 hover:border-zinc-500/30 transition-colors duration-500 rounded-3xl overflow-hidden`}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.04),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="mb-6 inline-flex p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-600 group-hover:scale-110 transition-all duration-300 shadow-xl">
          {skill.icon}
        </div>

        <h3 className="text-2xl font-bold text-zinc-100 mb-3 tracking-tight">
          {skill.category}
        </h3>

        <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-[280px]">
          {skill.description}
        </p>

        <div className="flex flex-col gap-3">
          {skill.items.map((item, i) => (
            <div key={item} className="flex items-center gap-2 group/item">
              <span className="h-px w-3 bg-zinc-800 group-hover/item:w-6 group-hover/item:bg-white transition-all" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 group-hover/item:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#050505] text-white selection:bg-white selection:text-black border-t border-zinc-900/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-zinc-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                Tech Stack
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              WHAT I <span className="text-zinc-600">BUILD WITH.</span>
            </motion.h2>
          </div>
        </div>

        {/* 2x2 Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

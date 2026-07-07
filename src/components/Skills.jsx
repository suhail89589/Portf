import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { BrainCircuit, Server, Database, Layout } from "lucide-react";

const skills = [
  {
    category: "AI Engineering",
    icon: <BrainCircuit className="w-6 h-6" />,
    description:
      "Designing retrieval pipelines (RAG), evaluating local models, and training custom machine learning systems.",
    items: [
      "Python",
      "PyTorch",
      "Transformers",
      "Scikit-Learn",
      "Ollama",
      "RAG",
    ],
  },

  {
    category: "Backend Systems",
    icon: <Server className="w-6 h-6" />,
    description:
      "Developing asynchronous APIs, orchestration services, and robust server architectures.",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "SQLite",
      "PostgreSQL",
    ],
  },

  {
    category: "Data Infrastructure",
    icon: <Database className="w-6 h-6" />,
    description:
      "Orchestrating vector stores, designing data pipelines, and containerizing experimental runtimes.",
    items: ["ChromaDB", "Docker", "MongoDB", "SQL", "Git"],
  },

  {
    category: "Product Engineering",
    icon: <Layout className="w-6 h-6" />,
    description:
      "Crafting interactive developer tools, high-fidelity AI frontends, and clean visualizations.",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800/80 bg-[#0a0a0a] p-8 md:p-10 overflow-hidden hover:border-zinc-600/40 transition-colors duration-500"
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.05),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="inline-flex p-3 rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:text-white group-hover:border-zinc-600 group-hover:scale-110 transition-all duration-300 shadow-xl mb-6">
          {skill.icon}
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-zinc-100 mb-3">
          {skill.category}
        </h3>

        <p className="text-sm leading-relaxed text-zinc-500 mb-8">
          {skill.description}
        </p>

        <div className="space-y-3">
          {skill.items.map((item) => (
            <div key={item} className="flex items-center gap-2 group/item">
              <span className="h-px w-3 bg-zinc-800 group-hover/item:w-6 group-hover/item:bg-white transition-all duration-300" />

              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-400 group-hover/item:text-white transition-colors">
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
      className="py-24 md:py-32 bg-[#050505] text-white border-t border-zinc-900/50 selection:bg-white selection:text-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-zinc-700" />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                Core Expertise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter leading-none"
            >
              BUILDING <span className="text-zinc-600">INTELLIGENT</span>{" "}
              SYSTEMS.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-zinc-500 leading-relaxed max-w-xl"
            >
              I combine artificial intelligence, machine learning, and software
              engineering to build intelligent systems—from experimental
              research prototypes to scalable production-ready applications.
            </motion.p>
          </div>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

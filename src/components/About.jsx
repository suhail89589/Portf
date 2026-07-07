import React from "react";
import { motion } from "framer-motion";
import { Brain, FlaskConical, Rocket, Sparkles, Cpu } from "lucide-react";

const builderStats = [
  {
    icon: <Brain size={20} />,
    title: "Research Driven",
    desc: "Every project starts by reading papers, understanding the mathematical foundations, and studying existing codebases before implementation.",
    tag: "Mindset",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    icon: <Cpu size={20} />,
    title: "Engineering First",
    desc: "I translate concepts into running code by building AI applications, retrieval pipelines, and backend servers.",
    tag: "Execution",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    icon: <Rocket size={20} />,
    title: "Long-Term Vision",
    desc: "Growing Divergix Labs as an independent space to experiment with agentic concepts, decision intelligence, and open-source software.",
    tag: "Mission",
    accent: "from-purple-500/20 to-transparent",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-40 bg-[#050505] text-zinc-400 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT */}

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Badge */}

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/40">
                <Sparkles size={14} className="text-blue-400" />

                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-400">
                  AI ENGINEERING & EXPLORATION
                </span>
              </div>

              {/* Heading */}

              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.92] text-white">
                From curiosity
                <br />
                <span className="text-zinc-700">to intelligent systems.</span>
              </h2>

              {/* Story */}

              <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
                <p>
                  I'm currently pursuing a BS in Data Science at IIT Madras, building my foundations in machine learning, mathematics, and computer science.
                </p>

                <p>
                  I prioritize learning by building AI applications, experimenting with local LLMs, backend systems, retrieval pipelines, and research-driven software. I believe in concrete prototypes over theoretical speculation, proving concepts through running code.
                </p>

                {/* Quote */}

                <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-8 overflow-hidden">
                  <div className="absolute right-6 top-6 text-zinc-800/20">
                    <FlaskConical size={90} strokeWidth={1} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

                      <span className="uppercase tracking-[0.25em] text-xs font-bold text-zinc-400">
                        MY PHILOSOPHY
                      </span>
                    </div>

                    <p className="text-2xl text-white italic font-light leading-relaxed">
                      "The best way to understand intelligent systems isn't by
                      reading about them—it's by building them."
                    </p>
                  </div>
                </div>

                <p>
                  This mindset drove the creation of
                  <span className="text-white font-medium"> Divergix Labs</span>
                  —an independent space where I experiment with local language models, retrieval pipelines, and backend infrastructure.
                </p>
              </div>

              {/* Research Interests */}
              <div className="pt-8 border-t border-zinc-900/80">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6">
                  Research Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Large Language Models",
                    "Agentic Systems",
                    "Decision Intelligence",
                    "Reinforcement Learning",
                    "AI Infrastructure",
                    "Human-AI Interaction",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="text-xs font-bold text-zinc-300 border border-zinc-850 bg-zinc-900/20 px-4 py-2 rounded-full tracking-wide hover:border-zinc-700 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}

          <div className="lg:col-span-5 flex flex-col justify-center gap-5">
            {builderStats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 hover:bg-zinc-900/60 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10 flex gap-5">
                  <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950 text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-600 mb-2">
                      {item.tag}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

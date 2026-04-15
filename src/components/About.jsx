import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Rocket,
  Code2,
  Lightbulb,
  ArrowRight,
  Zap,
  Sparkles,
} from "lucide-react";

const builderStats = [
  {
    icon: <Rocket size={20} />,
    title: "Founder Mindset",
    desc: "I treat side-projects like start-ups. No tutorials, just building.",
    tag: "Approach",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    icon: <Code2 size={20} />,
    title: "Shipped Real Products",
    desc: "From AI Tutors to Agentic AI Applications, I build things people actually use.",
    tag: "Execution",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Always Exploring",
    desc: "Currently deep diving into AI-agents, SaaS architectures, and Problem Solving.",
    tag: "Curiosity",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* --- Left: The Narrative --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50">
                <Sparkles size={14} className="text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  The Builder Story
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                I learn by <br />
                <span className="text-zinc-700">breaking things.</span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-zinc-400 max-w-2xl">
                <p>
                  I'm a first-year student, but I don't really operate like one. I realized early on that watching tutorials wasn't going to get me anywhere. So, I just started building.
                </p>

                {/* Glassmorphism Quote Box */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-zinc-800/50 shadow-2xl overflow-hidden mt-8 mb-8">
                  <div className="absolute top-0 right-0 p-6 text-zinc-800/20">
                    <Zap size={100} strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-widest">
                        MY MINDSET
                      </h3>
                    </div>
                    <p className="text-white italic font-light text-xl md:text-2xl leading-snug">
                      "Ideas are cheap. Execution is everything. I build to solve actual problems, not just to add a line to my resume."
                    </p>
                  </div>
                </div>

                <p className="text-base text-zinc-500">
                  Right now, my obsession is at the crossroads of <span className="text-zinc-200">Agentic AI, Startups, Scalable</span>. Whether it's an AI tutor that adapts to how you learn, or a marketplace platform, I'm always chasing the next hard problem to solve. 
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- Right: The Bento Stats --- */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            {builderStats.map((item, i) => (
               <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className={`relative group p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden`}
             >
               {/* Accent Gradient */}
               <div
                 className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
               />

               <div className="relative z-10 flex items-center gap-6">
                 <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-white group-hover:scale-110 group-hover:border-zinc-700 transition-all shadow-lg">
                   {item.icon}
                 </div>
                 <div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1 block">
                     {item.tag}
                   </span>
                   <h4 className="text-xl font-bold text-white leading-tight mb-1">
                     {item.title}
                   </h4>
                   <p className="text-sm text-zinc-500">{item.desc}</p>
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

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";

import Anveshna from "../assets/Anveshna.png";
import CM from "../assets/CM.png";
import Et from "../assets/Et.png";
import Google from "../assets/Google.png";
import Jammu from "../assets/Jammu.png";
import Mnit from "../assets/Mnit.png";
import Madras from "../assets/Madras.png";
import Jaipur from "../assets/Jaipur.png";
import Delhi from "../assets/Delhi.png";

const marqueeItems = [
  {
    id: 1,
    src: Google,
    name: "Google Solution Challenge",
    achievement: "Top 1500 Global",
  },
  {
    id: 2,
    src: Delhi,
    name: "IIT Delhi Hackathon",
    achievement: "National Finalist",
  },
  {
    id: 3,
    src: Madras,
    name: "IIT Madras Incubation",
    achievement: "Qualified Round 2 Participant",
  },
  {
    id: 4,
    src: CM,
    name: "CM Yuva Startup Challenge",
    achievement: "Top 50 Finalist",
  },
  { id: 5, src: Anveshna, name: "Anveshna Tech Fest", achievement: "Finalist" },
  { id: 6, src: Jaipur, name: "Hack Jaipur", achievement: "Finalist" },
  { id: 7, src: Mnit, name: "MNIT Hackathon", achievement: "Top 10" },
  { id: 8, src: Jammu, name: "IIT Jammu Techfest", achievement: "Finalist" },
  { id: 9, src: Et, name: "ET Startup Awards", achievement: "Top 120" },
];

const highlightCards = [
  {
    icon: <Star size={18} className="text-blue-400" />,
    event: "Google Big Code Challenge",
    result: "Top 1,500 / 150K",
    desc: "Ranked among the top 1% globally, demonstrating strong problem-solving and algorithmic thinking.",
  },
  {
    icon: <Trophy size={18} className="text-emerald-400" />,
    event: "Economic Times Gen AI Hackathon",
    result: "Semi-Finalist (Top 120 / 54K)",
    desc: "Built and competed with a GenAI solution, advancing among top engineering teams across India.",
  },
  {
    icon: <Medal size={18} className="text-purple-400" />,
    event: "Startup Competitions",
    result: "Finalist — IITs ",
    desc: "Pitched startup ideas, showcasing strong product thinking and execution.",
  },
];
const Achievements = () => {
  // Duplicating for seamless infinite scroll
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="py-24 md:py-40 bg-[#050505] overflow-hidden border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6">
              <Trophy size={14} className="text-amber-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Track Record
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
              Selected in National Hackathons &{" "}
              <span className="text-zinc-600 block">Startup Competitions.</span>
            </h2>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {highlightCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-colors text-left group"
            >
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl inline-block mb-6 shadow-xl group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-2">
                {card.event}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {card.result}
              </h3>
              <p className="text-sm text-zinc-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full py-10 flex items-center">
        {/* Gradient Masks for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 flex-nowrap group w-max"
          animate={{ x: [0, -1035 * 3] }} // Approximate width to animate smoothly based on item count. Will rely on CSS scroll technically
          transition={{
            duration: 120, // Slow, non-distracting
            ease: "linear",
            repeat: Infinity,
          }}
          // Tailwind specific group-hover to pause
          css={{ "&:hover": { animationPlayState: "paused" } }}
        >
          <div className="flex gap-6 items-center animate-marquee hover:[animation-play-state:paused]">
            {duplicatedItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="relative flex-shrink-0 w-[280px] h-[160px] md:w-[350px] md:h-[200px] rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-900/20 group/card cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 p-4 text-center">
                  <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                    {item.achievement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// Asset Import
import myPortrait from "../assets/img.jpeg";

const Hero = () => {
  // Navigation Helpers
  const scrollToProjects = () => {
    const elem = document.getElementById("projects");
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const elem = document.getElementById("about-footer"); // Points to new ID in footer
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#050505] text-zinc-200 scroll-mt-20"
    >
      {/* Premium Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#111_0%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* --- Left Side: Content --- */}
          <motion.div
            className="lg:col-span-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Building the future
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter"
            >
              I build products at the intersection of{" "}
              <span className="text-zinc-500 italic font-serif font-light">
                AI, education,
              </span>{" "}
              and human behavior.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              1st year student actively building, experimenting, and competing in
              startup ecosystems. Focused on zero-to-one execution.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center justify-center lg:justify-start"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-wider flex items-center group transition-all hover:bg-zinc-200 active:scale-95"
              >
                View Work
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>

              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-bold text-sm uppercase tracking-wider flex items-center group transition-all hover:border-zinc-400 hover:bg-zinc-900/50 active:scale-95"
              >
                Contact
                <ArrowUpRight
                  className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-500 group-hover:text-white"
                  size={18}
                />
              </button>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Image --- */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />

              {/* Responsive Size Tweaks */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[340px] my-10 lg:h-[340px] rounded-full p-1.5 border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
                <div className="w-full h-full rounded-full overflow-hidden border border-white/5 shadow-2xl">
                  <img
                    src={myPortrait}
                    alt="Suhail Malik"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-110 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                  />
                </div>
              </div>

              {/* Animated Ring Decorator */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-t border-l border-zinc-800/30 rounded-full pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

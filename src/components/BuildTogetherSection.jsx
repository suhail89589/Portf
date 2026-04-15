import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Copy, CheckCircle2, ArrowRight } from "lucide-react";

const BuildTogetherSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "mohdsuhail8958911@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Subtle top divider with gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Open to Opportunities
            </span>
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8"
        >
          LET'S BUILD <span className="text-zinc-600">TOGETHER.</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-10 text-left md:text-center space-y-6">
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            I'm currently exploring opportunities where I can contribute to meaningful products and work alongside ambitious builders.
          </p>

          <div className="text-zinc-500 text-base md:text-lg leading-relaxed bg-zinc-950/50 border border-zinc-900/80 p-6 md:p-8 rounded-3xl text-left shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <p className="font-semibold text-zinc-300 mb-4">I'm actively looking for:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <ArrowRight size={18} className="text-zinc-600 mt-1 flex-shrink-0" />
                <span><span className="text-zinc-300 font-medium tracking-wide">AI/ML or Full-Stack roles</span> (Internships / Freelance)</span>
              </li>
              <li className="flex items-start gap-4">
                <ArrowRight size={18} className="text-zinc-600 mt-1 flex-shrink-0" />
                <span>Collaborating on <span className="text-zinc-300 font-medium tracking-wide">early-stage startups</span> as a technical partner</span>
              </li>
              <li className="flex items-start gap-4">
                <ArrowRight size={18} className="text-zinc-600 mt-1 flex-shrink-0" />
                <span>Working on impactful products in <span className="text-zinc-300 font-medium tracking-wide">AI, accessibility, or education</span></span>
              </li>
              <li className="flex items-start gap-4">
                <ArrowRight size={18} className="text-zinc-600 mt-1 flex-shrink-0" />
                <span>Product-focused roles where I can contribute to both <span className="text-zinc-300 font-medium tracking-wide">engineering and execution</span></span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-zinc-400 text-lg md:text-xl italic font-serif opacity-80 mb-12 max-w-xl mx-auto"
        >
          "If you're building something interesting or looking for someone who can think, build, and execute — let's connect."
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/suhailmalik-/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <Linkedin size={16} />
            Let's Connect
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleCopyEmail}
            className="w-full sm:w-auto group px-8 py-5 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
          >
            {copied ? (
              <CheckCircle2 size={16} className="text-emerald-500" />
            ) : (
              <Copy size={16} className="group-hover:text-white transition-colors" />
            )}
            <span className="group-hover:text-white transition-colors">
              {copied ? "Copied!" : "Copy Email"}
            </span>
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default BuildTogetherSection;

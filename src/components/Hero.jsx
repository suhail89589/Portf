import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import myPortrait from "../assets/img.jpeg";

const Hero = () => {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("about-footer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#151515_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Badge */}

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/40 px-5 py-2 mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-zinc-400">
                AI Systems • Machine Learning • Research Engineering
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03]"
            >
              Exploring the intersection of{" "}
              <span className="text-zinc-500 italic font-serif font-light">
                AI engineering and machine learning.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
            >
              I am a student builder focused on designing AI applications, experimenting with retrieval pipelines, backend systems, and research-driven software at Divergix Labs.
            </motion.p>

            {/* Quick Stats */}

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mt-10 text-sm"
            >
              <div>
                <p className="text-white font-bold text-xl">5</p>
                <p className="text-zinc-500 uppercase tracking-wider">
                  Case Studies
                </p>
              </div>

              <div>
                <p className="text-white font-bold text-xl">1</p>
                <p className="text-zinc-500 uppercase tracking-wider">
                  Research Lab
                </p>
              </div>

              <div>
                <p className="text-white font-bold text-xl">2026</p>
                <p className="text-zinc-500 uppercase tracking-wider">
                  Building Since
                </p>
              </div>
            </motion.div>

            {/* CTA */}

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 mt-12"
            >
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center"
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={scrollToContact}
                className="group px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 transition"
              >
                <span className="flex items-center">
                  Get in Touch

                  <ArrowUpRight
                    size={18}
                    className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition"
                  />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">

              <div className="absolute inset-0 blur-3xl rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-700" />

              <div className="relative w-[330px] h-[330px] rounded-full border border-zinc-800 bg-zinc-900/40 p-2 backdrop-blur-xl">

                <div className="overflow-hidden rounded-full w-full h-full border border-white/10">

                  <img
                    src={myPortrait}
                    alt="Suhail Malik"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000"
                  />

                </div>

              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-5 rounded-full border-t border-l border-zinc-700/30"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
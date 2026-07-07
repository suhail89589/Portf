import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  ArrowRight,
  Globe,
  Terminal,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/suhailmalik-/",
  },
  {
    name: "Twitter",
    icon: <Twitter size={18} />,
    href: "https://x.com/MohdSuhail89589",
  },
  {
    name: "Github",
    icon: <Github size={18} />,
    href: "https://github.com/suhail89589",
  },
];

const technicalLinks = [
  {
    name: "LeetCode",
    icon: <Terminal size={18} />,
    href: "https://leetcode.com/u/Suhail89/",
  },
  {
    name: "HackerRank",
    icon: <Terminal size={18} />,
    href: "https://www.hackerrank.com/profile/mohdsuhail895891",
  },
  {
    name: "CodeChef",
    icon: <Terminal size={18} />,
    href: "https://www.codechef.com/users/suhail89589",
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <footer
      id="about-footer"
      className="bg-[#050505] pt-16 pb-12 border-t border-zinc-900 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase">
                SUHAIL<span className="text-zinc-700">.</span>
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                AI Engineering student at IIT Madras and founder of Divergix Labs. Building software systems that learn, reason, and solve real-world problems.
              </p>
            </div>
            <div className="flex items-center gap-2 text-zinc-600">
              <Globe size={14} className="animate-pulse text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Uttar Pradesh, IN — {time} IST
              </span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
              Currently Exploring
            </h4>
            <ul className="space-y-3 text-xs text-zinc-500 font-bold">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                Retrieval-Augmented Generation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                Agentic AI Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                Reinforcement Learning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                FastAPI & PyTorch
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                Prompt Engineering
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
              Socials
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-sm font-bold"
                >
                  {link.icon} {link.name}
                  <ArrowRight
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
              Coding
            </h4>
            <div className="flex flex-col gap-4">
              {technicalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-sm font-bold"
                >
                  {link.icon} {link.name}
                  <ArrowRight
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 md:text-right">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
              Status
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-zinc-500">
                Open for opportunities
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-tighter">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                Live in Moradabad
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.3em] flex items-center gap-4">
            <span>© 2026 SUHAIL MALIK</span>
            <span className="w-1 h-1 bg-zinc-800 rounded-full" />
            <span>IIT Madras</span>
          </div>

          <motion.button
            whileHover={{ y: -5, backgroundColor: "#111" }}
            onClick={scrollToTop}
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 hover:text-white transition-all group"
          >
            <ArrowUp
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

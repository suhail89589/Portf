import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  
  ArrowUp,
  ArrowRight,
  Copy,
  CheckCircle2,
  Globe,
  Terminal,
} from "lucide-react";

// Technical platform icons for design consistency
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.344a1.344 1.344 0 0 0 0 1.908 1.351 1.351 0 0 0 1.913 0l4.377-4.344a1.344 1.344 0 0 0 0-1.908A1.351 1.351 0 0 0 13.483 0zm-6.135 5.639a1.355 1.355 0 0 0-.968.405l-4.547 4.506a1.344 1.344 0 0 0 0 1.907 1.357 1.357 0 0 0 1.914 0l4.547-4.507a1.344 1.344 0 0 0 0-1.907 1.355 1.355 0 0 0-.94-.404zm3.078 3.062a1.355 1.355 0 0 0-.968.404l-4.547 4.507a1.344 1.344 0 0 0 0 1.907 1.357 1.357 0 0 0 1.914 0l4.547-4.507a1.344 1.344 0 0 0 0-1.907 1.355 1.355 0 0 0-.94-.404zm3.078 3.062a1.355 1.355 0 0 0-.968.404l-4.547 4.507a1.344 1.344 0 0 0 0 1.907 1.357 1.357 0 0 0 1.914 0l4.547-4.507a1.344 1.344 0 0 0 0-1.907 1.355 1.355 0 0 0-.94-.404z" />
  </svg>
);

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
    icon: <LeetCodeIcon />,
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
  const [copied, setCopied] = useState(false);
  const email = "mohdsuhail8958911@gmail.com";

  // SINCERE FIX: Handlers for mailto issues
  const handleStartConversation = (e) => {
    // We let the default mailto fire, but we trigger the "copied" state
    // immediately as a fallback UI feedback in case no app opens.
    const start = Date.now();

    // If the window doesn't lose focus in 500ms, it means the mail app failed to open
    setTimeout(() => {
      if (Date.now() - start < 1000) {
        copyToClipboard();
      }
    }, 500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <footer
      id="about"
      className="bg-[#050505] pt-32 pb-12 border-t border-zinc-900 overflow-hidden relative scroll-mt-20"
    >
      {/* Background Marquee */}
      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[12vw] font-black whitespace-nowrap text-white uppercase tracking-tighter"
        >
          Elevating Digital Standards — Elevating Digital Standards —
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-12"
          >
            HAVE AN <br />
            <span className="text-zinc-700 italic font-serif font-light">
              Idea?
            </span>
          </motion.h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* LinkedIn - High Reliability Action */}
            <a
              href="https://www.linkedin.com/in/suhailmalik-/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
            >
              <Linkedin size={16} />
              Let's Connect
            </a>

            <button
              onClick={copyToClipboard}
              className="group px-8 py-5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:border-zinc-500 transition-all active:scale-95"
            >
              {copied ? (
                <CheckCircle2 size={16} className="text-emerald-500" />
              ) : (
                <Copy size={16} />
              )}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 py-16 border-t border-zinc-900/50">
          <div className="md:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase">
                SUHAIL<span className="text-zinc-700">.</span>
              </h3>
              <p className="text-zinc-500 text-base leading-relaxed">
                Fullstack Engineer bridging the gap between{" "}
                <span className="text-zinc-200">technical excellence</span> and{" "}
                <span className="text-zinc-200">human-centric design</span>.
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

          <div className="md:col-span-3 space-y-6">
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
                Open for new opportunities
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-tighter">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                Live in Moradabad
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
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

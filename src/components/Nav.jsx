import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowUpRight, Github, Linkedin } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Expertise", href: "#skills" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const RESUME_PATH =
    "https://drive.google.com/file/d/1YPGW9-kIDg-taizQ8V-OuJn_UQELUMQe/view?usp=drive_link";

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: -120 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-[100] px-4 py-6 md:px-6 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex justify-center">
          <motion.div
            layout
            className={`flex items-center justify-between px-4 md:px-6 py-2 rounded-2xl transition-all duration-500 pointer-events-auto w-full md:w-auto ${
              scrolled
                ? "bg-black/60 border border-white/10 shadow-2xl backdrop-blur-xl"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <a href="/" className="group flex items-center gap-2 mr-4 md:mr-8">
              <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center text-black font-black text-sm">
                S
              </div>
              <span className="text-sm font-bold tracking-tighter text-white">
                SUHAIL.
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center bg-zinc-900/50 rounded-xl px-2 py-1 border border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="relative px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="hidden md:flex items-center ml-8">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
              >
                Resume <ArrowUpRight size={14} strokeWidth={3} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-white bg-zinc-900 rounded-xl border border-white/10"
            >
              <Menu size={20} />
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* --- Immersive Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-[110] flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-8">
              <span className="font-black text-xl tracking-tighter text-white">
                SUHAIL.
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-400 hover:text-white"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-12 space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-5xl font-black text-white tracking-tighter hover:text-zinc-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="p-12 border-t border-white/10 flex justify-between items-center">
              <div className="flex gap-6 text-zinc-400">
                <Github size={24} />
                <Linkedin size={24} />
              </div>
              <a
                href={RESUME_PATH}
                className="text-xs font-black uppercase tracking-widest text-white underline underline-offset-8"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

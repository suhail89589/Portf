import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

// A simple SmoothScroll wrapper or CSS scroll-behavior: smooth is recommended
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-500 selection:text-white">
      {/* 1. Navigation */}
      <Nav />

      <main>
        {/* 2. Hero Section - Entry Point */}
        <Hero />

        {/* 3. Skills Section - Technical Proof */}
        <Skills />

        {/* 4. Projects Section - Case Studies */}
        <Projects />

        {/* 5. About Section - Personality & Mindset */}
        <About />
      </main>

      {/* 6. Footer - Final Connect & Links */}
      <Footer />
    </div>
  );
}

export default App;

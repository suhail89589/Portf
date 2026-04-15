import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import BuildTogetherSection from "./components/BuildTogetherSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-zinc-800 selection:text-white">
      <Nav />

      <main>
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Projects />
        <Achievements />
        <Skills />
        <BuildTogetherSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer"

export default function App() {
  return (
    <main className="text-red-900 bg-pink-200 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact/>
      <Footer />
    </main>
  );
}

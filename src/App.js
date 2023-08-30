import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import SoftSkills from "./components/SoftSkills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Languages />
      <SoftSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

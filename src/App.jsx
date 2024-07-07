import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Landing from "./components/landing";
import About from "./components/about";

import "./index.css";

let Nav, Footer;

try {
  Nav = require("./components/nav").default;
  Footer = require("./components/footer").default;
} catch (e) {
  console.warn("Nav and Footer components not found.");
}

function App() {
  return (
    <Router>
      {Nav && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {Footer && <Footer />}
    </Router>
  );
}

export default App;

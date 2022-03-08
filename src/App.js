import React, { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Home />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </React.Fragment>
    );
  }
}

export default App;
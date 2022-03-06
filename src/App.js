import React, { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
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
          <Projects />
          <Contact />
          <Footer />
      </React.Fragment>
    );
  }
}

export default App;
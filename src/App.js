import React, { Component } from "react";
import "./styles/App.scss"
import Nav from "./Components/Nav";
import Introduction from "./Components/Intro";
import About from "./Components/About"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
     <div>
        <Nav />
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;

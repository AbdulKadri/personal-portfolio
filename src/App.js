import "./styles/App.scss"
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";
import CreatedWith from "./Components/CreatedWith";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <CreatedWith />
      <Footer />
    </div>
  )
}

export default App;

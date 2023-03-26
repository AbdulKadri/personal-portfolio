import "./styles/App.scss"
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;

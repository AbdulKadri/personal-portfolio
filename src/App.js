import React, { Component } from "react";
import './styles/App.scss'
import Nav from "./Components/Nav";
import Introduction from "./Components/Intro";

class App extends Component {
  render() {
    return (
     <div className="Original">
        <Nav></Nav>
        <Introduction></Introduction>
      </div>
    )
  }
}

export default App;

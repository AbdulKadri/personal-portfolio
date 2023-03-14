import React, { Component } from "react";
import Nav from "./Components/Nav";
import './styles/App.scss'

class App extends Component {
  render() {
    return (
     <div className="Original">
        <Nav></Nav>
        Hello World
      </div>
    )
  }
}

export default App;

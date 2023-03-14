import React from "react";
import logo from '../Assets/personal-logo.svg'

function Nav() {
    return (
        <div className="nav sticky">
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="Personal logo"/>
                </a>
            </div>

            <div className="menu-items">
                <ul>
                    <li><a href="#home"><u>Home</u></a></li>
                    <li><a href="#about"><u>About</u></a></li>
                    <li><a href="#projects"><u>Projects</u></a></li>
                    <li><a href="#contact"><u>Contact</u></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
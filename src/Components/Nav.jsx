// import React, { useEffect, useRef, useState } from "react";
import '../styles/Nav.scss'
import logo from '../Assets/personal-logo.svg'
import { useEffect, useRef, useState } from 'react';

const Nav = () => {
    const [openNav, setOpenNav] = useState(false)
    const navRef = useRef(null)

    const handleCollapse = () => {
        setOpenNav((prevState) => !prevState)
    }

    useEffect(() => {
        // Close the Nav when the user clicks outside of it
        const closeNav = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                return;
            }

            setOpenNav(false);
        };

        document.addEventListener("mousedown", closeNav);
        return () => document.removeEventListener("mousedown", closeNav);
    }, [])

    return (
        <div className="nav sticky">
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="Personal logo" />
                </a>
            </div>

            <div className={openNav ? "menu-items open" : "menu-items close"}>
                <ul ref={navRef}>
                    <li><a href="#home"><u>Home</u></a></li>
                    <li><a href="#about"><u>About</u></a></li>
                    <li><a href="#projects"><u>Projects</u></a></li>
                    <li><a href="#contact"><u>Contact</u></a></li>
                </ul>
            </div>

            <div className="menu-button">
                <i className={openNav ? 'fas fa-times' : 'fas fa-bars'} onClick={handleCollapse}></i>
            </div>
        </div>
    )
}

export default Nav;
import React from "react";
import '../styles/Skills.scss';
import Asset from "./Assets.jsx";

function Skills() {
    return (
        <div className="skills-container">
            <div className="skill">
                <img src= { Asset.logoHTML } alt="HTML logo" />
                <p>HTML</p>
                <p className="ordered-number">1</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoCSS } alt="CSS logo" />
                <p>CSS</p>
                <p className="ordered-number">2</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoJavaScript } alt="JavaScript logo" />
                <p>JavaScript</p>
                <p className="ordered-number">3</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoReact} alt="React logo" />
                <p>React</p>
                <p className="ordered-number">4</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoNodejs } alt="Nodejs logo" />
                <p>Node.js</p>
                <p className="ordered-number">5</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoExpressjs } alt="Expressjs logo" />
                <p>Express.js</p>
                <p className="ordered-number">6</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoMongoDB } alt="MongoDB logo" />
                <p>MongoDB</p>
                <p className="ordered-number">7</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoPostgreSQL } alt="PostgreSQL logo" />
                <p>PostgreSQL</p>
                <p className="ordered-number">8</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoSass } alt="Sass logo" />
                <p>Sass</p>
                <p className="ordered-number">9</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoBootstrap } alt="Bootstrap logo" />
                <p>Bootstrap</p>
                <p className="ordered-number">10</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoTailwindcss } alt="Tailwindcss logo" />
                <p>Tailwind CSS</p>
                <p className="ordered-number">11</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoFigma } alt="Figma logo" />
                <p>Figma</p>
                <p className="ordered-number">12</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoPython } alt="Python logo" />
                <p>Python</p>
                <p className="ordered-number">13</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoJest } alt="Jest logo" />
                <p>Jest</p>
                <p className="ordered-number">14</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoNpm } alt="Npm logo" />
                <p>npm</p>
                <p className="ordered-number">15</p>
            </div>
            <div className="skill">
                <img src= { Asset.logoGit } alt="Git logo" />
                <p>Git</p>
                <p className="ordered-number">16</p>
            </div>
            <div style={{width: "60px"}}>
            </div>
        </div>
    )
}

export default Skills
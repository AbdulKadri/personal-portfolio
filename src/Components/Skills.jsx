import '../styles/Skills.scss';
import Asset from "./Assets.jsx";

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skill">
                <img src={Asset.logoHTML} alt="HTML logo" />
                <p>HTML</p>
                <p className="ordered-number">1</p>
            </div>
            <div className="skill">
                <img src={Asset.logoCSS} alt="CSS logo" />
                <p>CSS</p>
                <p className="ordered-number">2</p>
            </div>
            <div className="skill">
                <img src={Asset.logoJavaScript} alt="JavaScript logo" />
                <p>JavaScript</p>
                <p className="ordered-number">3</p>
            </div>
            <div className="skill">
                <img src={Asset.logoTypeScript} alt="TypeScript logo" />
                <p>TypeScript</p>
                <p className="ordered-number">4</p>
            </div>
            <div className="skill">
                <img src={Asset.logoReact} alt="React logo" />
                <p>React</p>
                <p className="ordered-number">5</p>
            </div>
            <div className="skill">
                <img src={Asset.logoRedux} alt="Redux logo" />
                <p>Redux</p>
                <p className="ordered-number">6</p>
            </div>
            <div className="skill">
                <img src={Asset.logoNextjs} alt="Next.js logo" />
                <p>Next.js</p>
                <p className="ordered-number">7</p>
            </div>
            <div className="skill">
                <img src={Asset.logoNodejs} alt="Nodejs logo" />
                <p>Node.js</p>
                <p className="ordered-number">8</p>
            </div>
            <div className="skill">
                <img src={Asset.logoExpressjs} alt="Expressjs logo" />
                <p>Express.js</p>
                <p className="ordered-number">9</p>
            </div>
            <div className="skill">
                <img src={Asset.logoMongoDB} alt="MongoDB logo" />
                <p>MongoDB</p>
                <p className="ordered-number">10</p>
            </div>
            <div className="skill">
                <img src={Asset.logoPostgreSQL} alt="PostgreSQL logo" />
                <p>PostgreSQL</p>
                <p className="ordered-number">11</p>
            </div>
            <div className="skill">
                <img src={Asset.logoThreejs} alt="Threejs logo" />
                <p>Three.js</p>
                <p className="ordered-number">12</p>
            </div>
            <div className="skill">
                <img src={Asset.logoGSAP} alt="GSAP logo" />
                <p>GSAP</p>
                <p className="ordered-number">13</p>
            </div>
            <div className="skill">
                <img src={Asset.logoSass} alt="Sass logo" />
                <p>Sass</p>
                <p className="ordered-number">14</p>
            </div>
            <div className="skill">
                <img src={Asset.logoBootstrap} alt="Bootstrap logo" />
                <p>Bootstrap</p>
                <p className="ordered-number">15</p>
            </div>
            <div className="skill">
                <img src={Asset.logoTailwindcss} alt="Tailwindcss logo" />
                <p>Tailwind CSS</p>
                <p className="ordered-number">16</p>
            </div>
            <div className="skill">
                <img src={Asset.logoFigma} alt="Figma logo" />
                <p>Figma</p>
                <p className="ordered-number">17</p>
            </div>
            <div className="skill">
                <img src={Asset.logoMaterialUI} alt="Material UI logo" />
                <p>Material UI</p>
                <p className="ordered-number">18</p>
            </div>
            <div className="skill">
                <img src={Asset.logoWordpress} alt="Wordpress logo" />
                <p>Wordpress</p>
                <p className="ordered-number">19</p>
            </div>
            <div className="skill">
                <img src={Asset.logoPython} alt="Python logo" />
                <p>Python</p>
                <p className="ordered-number">20</p>
            </div>
            <div className="skill">
                <img src={Asset.logoPostman} alt="Postman logo" />
                <p>Postman</p>
                <p className="ordered-number">21</p>
            </div>
            <div className="skill">
                <img src={Asset.logoJest} alt="Jest logo" />
                <p>Jest</p>
                <p className="ordered-number">22</p>
            </div>
            <div className="skill">
                <img src={Asset.logoNpm} alt="Npm logo" />
                <p>npm</p>
                <p className="ordered-number">23</p>
            </div>
            <div className="skill">
                <img src={Asset.logoGit} alt="Git logo" />
                <p>Git</p>
                <p className="ordered-number">24</p>
            </div>
            <div className='hidden-skill'>
            </div>
        </div>
    )
}

export default Skills
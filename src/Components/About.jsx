import '../styles/About.scss';
import Carousel from './Carousel';

function About() {
    return (
        <div className="About" id="about">
            <h2> <u>About</u> </h2>

            <p>Hi there! My name is Abdul-Rahime Kadri and I'm a web developer with a passion for creating beautiful and functional websites.
                <br />
                <br />
                Although I studied biological sciences in university, I discovered my love for coding during a computer science elective course. Since then, I've been honing my skills as a self-taught developer and have worked on a variety of projects, from simple landing pages to complex e-commerce sites.
                <br />
                <br />
                Im a big fan of all kinds of sports so i always try to find a way to incoprate some type of sports related content into my projects.
                If you're interested in collaborating, don't hesitate to get in touch. I'm always looking for new projects and collaborations. Thanks for checking out my portfolio!
            </p>

            <Carousel />
        </div>
    )
}

export default About;
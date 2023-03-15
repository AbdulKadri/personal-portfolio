import React from "react";
import '../styles/About.scss';
import EmblaCarousel from "./Carousel";

function About() {
    return (
        <div className="About">
            <h2> <u>About</u> </h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio non voluptatem, aut dolorem quibusdam sint iusto minus dolores suscipit cum. Commodi debitis error molestias deleniti dolorem magnam consequuntur eum provident?</p>

            <EmblaCarousel />
        </div>
    )
}

export default About;
import React from "react";
import '../styles/About.scss';
import Skills from "./Skills";

function About() {
    return (
        <div className="About">
            <h2> <u>About</u> </h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio non voluptatem, aut dolorem quibusdam sint iusto minus dolores suscipit cum. Commodi debitis error molestias deleniti dolorem magnam consequuntur eum provident?</p>

            <div className="carousel">
                <button className="slide-arrow" id="slide-arrow-next">
                    &#8249;
                </button>

                <Skills></Skills>

                <button className="slide-arrow" id="slide-arrow-prev">
                    &#8250;
                </button>

            </div>
        </div>
    )
}

export default About;
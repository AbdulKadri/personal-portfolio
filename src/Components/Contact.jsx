import React from "react";
import Asset from "./Assets";
import '../styles/Contact.scss'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2>Contact</h2>

            <div className="contact-container">
                <form action="">
                    <fieldset>
                        <legend>Send me an Email</legend>
                        <div className="name-container">
                            <input type="text" id="userName" placeholder="Name" required />
                        </div>

                        <div className="email-container">
                            <input type="text" id="userEmail" placeholder="Email" required />
                        </div>

                        <div className="text-container">
                            <textarea name="userText" id="userText" rows="10" placeholder="Text" required></textarea>
                        </div>

                        <button>Send <img src={ Asset.Arrow } alt="arrow" /></button>
                    </fieldset>
                </form>
            </div>

            <div className="social-container">
                <a href="https://github.com/AbdulKadri" target="_blank" rel="noreferrer"><img src={ Asset.logoGithub } alt="Github logo" /></a>
                <a href="https://linkedin.com/in/abdul-rahime-kadri-bb8935178" target="_blank" rel="noreferrer"><img src={ Asset.logoLinkedIn } alt="LinkedIn logo" /></a>
            </div>
        </div>
    )
}

export default Contact
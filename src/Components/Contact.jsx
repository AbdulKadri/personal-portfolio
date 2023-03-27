import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import Asset from "./Assets";
import '../styles/Contact.scss'

const Contact = () => {
    const form = useRef()
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_vllsmxj', 'template_2bb0yqg', form.current, 'fKBdg7i_NYWLk0db1')
        setInputs({})
    }

    return (
        <div className="contact" id="contact">
            <h2><u>Contact</u></h2>

            <div className="contact-container">
                <form ref={form} onSubmit={sendEmail}>
                    <fieldset>
                        <legend>Send me an Email</legend>
                        <div className="name-container">
                            <input
                                type="text"
                                id="userName"
                                placeholder="Name"
                                name='name'
                                value={inputs.name || ""}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="email-container">
                            <input
                                type="email"
                                id="userEmail"
                                placeholder="Email"
                                name='email'
                                value={inputs.email || ""}
                                onChange={handleChange}
                                required />
                        </div>

                        <div className="text-container">
                            <textarea
                                id="userText"
                                rows="10"
                                placeholder="Message"
                                name="message"
                                value={inputs.message || ""}
                                onChange={handleChange}
                                required>
                            </textarea>
                        </div>

                        <button type='submit'>Send <img src={Asset.Arrow} alt="arrow" /></button>
                    </fieldset>
                </form>
            </div>

            <div className="social-container">
                <a href="https://github.com/AbdulKadri" target="_blank" rel="noreferrer"><img src={Asset.logoGithub} alt="Github logo" /></a>
                <a href="https://linkedin.com/in/abdul-rahime-kadri-bb8935178" target="_blank" rel="noreferrer"><img src={Asset.logoLinkedIn} alt="LinkedIn logo" /></a>
            </div>
        </div>
    )
}

export default Contact
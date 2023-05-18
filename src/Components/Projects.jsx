import '../styles/Projects.scss'

const Projects = () => {
    return (
        <div className="project-container" id="projects">
            <h2> <u>Projects</u> </h2>

            <div className="project">
                <div className="project-text">
                    <h3>Sports Nexus (Social Media App)</h3>
                    <br />

                    <p className='project-description'>A full stack MERN project that allows you to make an account, create and delete posts, add friends and check out profiles! Includes a dark mode feature, toasts for succesful register/login, and is authenticated with JWT Auth. (Search Capability is still under work)</p>

                    <br />

                    <p className='created-with'><u>Frontend:</u> React, Material UI, Redux Toolkit, React Router Dom, Formik, Yup, Dropzone...</p>
                    <p className='created-with'><u>Backend:</u> Node/Express, MongoDB/Mongoose, JWT, Postman, Bcrypt, Multer, Helmet, Morgan...</p>
                    <p className='created-with'><u>Hosting:</u> ...</p>

                    <br />

                    <a href="https://github.com/AbdulKadri" target="_blank" rel="noreferrer">Live site</a>
                    <a href="https://github.com/AbdulKadri/social-media" target="_blank" rel="noreferrer"> Repository </a>
                </div>

                <div className="project-preview">
                    <div className="project-front">
                        <p>Temp Front</p>
                    </div>
                    <div className="project-back">
                        <p>Temp back</p>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-preview">
                    <div className="project-front">
                        <p>Temp Front</p>
                    </div>
                    <div className="project-back">
                        <p>Temp back</p>
                    </div>
                </div>

                <div className="project-text">
                    <h3>Apex Weather (Weather App)</h3>
                    <br />

                    <p className='project-description'>A Next.js project that allows you to search for any city's weather, forecast and air quality index. Includes a heat weather map, image of cities, and ability to switch units for metric and imperial. Also has a 3D model of the globe with animation features.</p>

                    <br />

                    <p className='created-with'><u>Frontend:</u> React, Next, Three.js, GSAP, TailwindCSS, react-toastify, async-paginate, axios...</p>
                    <p className='created-with'><u>Hosting:</u> Vercel</p>

                    <br />

                    <a href="https://github.com/AbdulKadri" target="_blank" rel="noreferrer">Live site</a>
                    <a href="https://github.com/AbdulKadri/next-weather-app" target="_blank" rel="noreferrer"> Repository </a>
                </div>
            </div>

            <div className="project">
                <div className="project-text">
                    <h3>Yeg Dealership (Car dealership)</h3>
                    <br />

                    <p className='project-description'>A Wordpress project that includes a car inventory page to check out all the cars and details. also has testimonials, reviews, about section, contact section and more to simulate a real world car dealership website.</p>

                    <br />

                    <p className='created-with'><u>Frontend:</u> Wordpress, Elementor and CSS.</p>
                    <p className='created-with'><u>Hosting:</u> Hostinger</p>

                    <br />

                    <br />

                    <a href="https://yegdealership.shop/" target="_blank" rel="noreferrer">Live site</a>
                </div>

                <div className="project-preview">
                    <div className="project-front">
                        <p>Temp Front</p>
                    </div>
                    <div className="project-back">
                        <p>Temp back</p>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-preview">
                    <div className="project-front">
                        <p>Temp Front</p>
                    </div>
                    <div className="project-back">
                        <p>Temp back</p>
                    </div>
                </div>

                <div className="project-text">
                    <h3>ECommerce Site (Coming Soon...)</h3>
                    <br />

                    <p className='project-description'>A full stack project that gives you all the features of a real world eCommerece store. Includes Stripe API for payment and Auth0 for login and signup.</p>

                    <br />

                    <p className='created-with'><u>Frontend:</u> Vite, React, TypeScript...</p>
                    <p className='created-with'><u>Hosting:</u> Vercel</p>

                    <br />

                    <a href="https://github.com/AbdulKadri" target="_blank" rel="noreferrer">Live site</a>
                    <a href="https://github.com/AbdulKadri" target="_blank" rel="noreferrer"> Repository </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
import '../styles/Projects.scss'
import projects from './projectsData'

const Projects = () => {
    return (
        <div className="project-container" id="projects">
            <h2> <u>Projects</u> </h2>
            {
                projects.map((project, index) => (
                    <div className="project" key={index}>
                        {index % 2 === 0 ?
                            <>
                                <div className="project-text">
                                    <h3>{project.title}</h3>
                                    <br />
                                    <p className='project-description'>{project.description}</p>
                                    <br />
                                    <p className='created-with'><u>Frontend:</u> {project.frontend}</p>
                                    {project.backend && <p className='created-with'><u>Backend:</u> {project.backend}</p>}
                                    {project.cms && <p className='created-with'><u>CMS:</u> {project.cms}</p>}
                                    <p className='created-with'><u>Hosting:</u> {project.hosting}</p>
                                    <br />
                                    <a href={project.liveLink} target="_blank" rel="noreferrer">Live site</a>
                                    {project.repositoryLink && <a href={project.repositoryLink} target="_blank" rel="noreferrer"> Repository </a>}
                                </div>
                                <div className="project-preview">
                                    <p className="hover-instructions">Hover to see more</p>
                                    <div className="project-front">
                                        <img src={project.imageURL} alt={project.title}></img>
                                    </div>
                                    <div className="project-back">
                                        <img src={project.gifURL} alt={project.title}></img>
                                    </div>
                                </div>
                            </> :
                            <>
                                <div className="project-preview">
                                    <p className="hover-instructions">Hover to see more</p>
                                    <div className="project-front">
                                        <img src={project.imageURL} alt={project.title}></img>
                                    </div>
                                    <div className="project-back">
                                        <img src={project.gifURL} alt={project.title}></img>
                                    </div>
                                </div>
                                <div className="project-text">
                                    <h3>{project.title}</h3>
                                    <br />
                                    <p className='project-description'>{project.description}</p>
                                    <br />
                                    <p className='created-with'><u>Frontend:</u> {project.frontend}</p>
                                    {project.backend && <p className='created-with'><u>Backend:</u> {project.backend}</p>}
                                    {project.cms && <p className='created-with'><u>CMS:</u> {project.cms}</p>}
                                    <p className='created-with'><u>Hosting:</u> {project.hosting}</p>
                                    <br />
                                    <a href={project.liveLink} target="_blank" rel="noreferrer">Live site</a>
                                    {project.repositoryLink && <a href={project.repositoryLink} target="_blank" rel="noreferrer"> Repository </a>}
                                </div>
                            </>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Projects
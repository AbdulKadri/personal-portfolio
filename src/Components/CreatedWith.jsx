import asset from "./assets"
import "../styles/CreatedWith.scss"

const CreatedWith = () => {
    return (
        <div className="created-with-container">
            <h2>Created with</h2>
            <div className="created-with-logos">
                <img src={asset.logoReact} alt="React logo" />
                <img src={asset.logoSass} alt="Sass logo" />
            </div>
        </div>
    )
}

export default CreatedWith
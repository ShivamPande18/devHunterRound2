import videoBg from "./Videos/death.mp4"

const TitleSection = () => {
    return(
        <div className="titleSection">
            <video src = {videoBg} autoPlay loop muted/>
            <div className="titleOverlay">
            </div>
            <div className="titleContent">
                <h1>Welcome</h1>
                <p>Anime</p>
            </div>
        </div>
    );
}


export default TitleSection;
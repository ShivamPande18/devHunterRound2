import TempImg from "./Images/TempAnime.jpeg"

const AnimeData = ({name,desc,imgSrc}) => {
    return (
        <div className="animeData">
            <div className="animeDataLeft">
                <img src= {imgSrc} alt=""/>
                <button>Download</button>
                <button>Watch Now</button>

            </div>

            <div className="animeDataRight">
                <h1>{name}</h1>
                <h3>Genre</h3>
                <p>{desc}</p>

            </div>
        </div>
    );
}

export default AnimeData;
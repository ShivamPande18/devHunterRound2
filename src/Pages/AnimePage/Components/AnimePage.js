import AnimeData from "./AnimeData.js"
import {useState,useEffect} from "react"
import AnimeCmt from "./AnimeCmt";

const AnimePage = () =>{

    const [animeName, setAnimeName] = useState("");
    const [animeDesc, setAnimeDesc] = useState("");
    const [animeImg, setAnimeImg] = useState("");
    const getData = async () => {
        const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=naruto`)
        const resData = await res.json();
        const animeData = (resData["data"][0]["attributes"]);
        setAnimeName(animeData["titles"]["en"])
        setAnimeDesc(animeData["synopsis"])
        setAnimeImg(animeData["posterImage"]["large"])
    }

    useEffect(() => {
        getData();
    }, [])

    return(
        <div className="animePage">
            <AnimeData name={animeName} desc={animeDesc} imgSrc={animeImg}/>
            <AnimeCmt/>
        </div>
    );
}

export default AnimePage;
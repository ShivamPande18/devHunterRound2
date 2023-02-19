import {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = () =>{

    let query = "Baki";

    const [searchList, setSearchList] = useState([]);

    const getInput = (e) => {
        query = e.target.value.toLowerCase();
        getData();
    }

    const getData = async () => {
        const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}`)
        const resData = await res.json();
        const animeData = resData["data"];

        const animeSearchList = [];

        for(let i=0;i<animeData.length;i++)
        {

            console.log();
            if (animeData[i]["attributes"]["titles"]["en"] != null)
            {
                animeSearchList.push(animeData[i]["attributes"]["titles"]["en"]);
            }
        }
        setSearchList(animeSearchList);
    }

    const goToPage = (e) =>{
        console.log(e);
    }

    return(
        <div className="search">
            <h1>Search Anime</h1>
            <input type="text" className="searchInput" placeholder="Search Anime" onChange={getInput} onFocus={getData} />

            <ul>
                {
                    searchList.map((item)=>(
                        <li onClick = {goToPage(item)}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Search;
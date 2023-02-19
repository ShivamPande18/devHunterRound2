import {useEffect} from "react"

const Demo = () =>{

    const getData = async() =>{
        const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=naruto`)
        const resData = await res.json();
        console.log(resData["data"][0]["attributes"]["posterImage"]["large"]);
    }

    useEffect(() => {
        getData();
    },[])
    return(
        <div>

        </div>
    );
}  

export default Demo;
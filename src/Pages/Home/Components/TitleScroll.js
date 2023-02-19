import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css"
import NarutoImg from "./Images/naruto.png"
import SanjiImg from "./Images/sanji.png"
import VegitaImg from "./Images/vegita.png"
import ErinImg from "./Images/erin.png"


const TitleScroll = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return (
        <div className= "titleScroll">
            <div className="titleScrollContainer" >
                <div className="titleScrollTxt" data-aos="fade-right">
                    <h1>“Somebody told me I’m a failure, I’ll prove them wrong.” </h1>
                </div>
                <div className="titleScrollImg"
                    data-aos="fade-left">
                    <img src={NarutoImg} alt="" />
                </div>
            </div>


            <div className="titleScrollContainer" >
                <div className="titleScrollImg"
                    data-aos="fade-right">
                    <img src={SanjiImg} alt="" />
                </div>
                <div className="titleScrollTxt" data-aos="fade-left">
                    <h1>“Don’t start a fight if you can’t end it.” </h1>
                </div>
            </div>

            <div className="titleScrollContainer" >
                <div className="titleScrollTxt" data-aos="fade-right">
                    <h1>“I do not fear this new challenge, rather like a true warrior I will rise to meet it” </h1>
                </div>
                <div className="titleScrollImg"
                    data-aos="fade-left">
                    <img src={VegitaImg} alt="" />
                </div>
            </div>

            <div className="titleScrollContainer" >
                <div className="titleScrollImg"
                    data-aos="fade-right">
                    <img src={ErinImg} alt="" />
                </div>
                <div className="titleScrollTxt" data-aos="fade-left">
                    <h1>“If you win you live. If you lose you die. If you don’t fight, you can’t win.” </h1>
                </div>
            </div>
        </div>

    );
}

export default TitleScroll;
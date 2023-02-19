import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TempImg2 from "./Images/TempImg2.jpg"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"
import { Form } from "react-router-dom";
import { Link } from "react-router-dom"


const TitleCorosel = () => {
    
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <div className="titleCorosel">

            <div className="coroselCont" data-aos="fade-up">
                <h1>Romance</h1>
                <Carousel responsive={responsive}>
                    <div className="coroselCard">
                        <Link to = "/anime">
                            <img src={TempImg2} alt="" />
                        </Link>
                    </div>

                    <div className="coroselCard">
                        <Link to="/anime">
                            <img src={TempImg2} alt="" />
                        </Link>
                    </div>

                    <div className="coroselCard">
                        <Link to="/anime">
                            <img src={TempImg2} alt="" />
                        </Link>
                    </div>
                </Carousel>
            </div>

            <div className="coroselCont" data-aos="fade-up">
                <h1>Adventure</h1>
                <Carousel responsive={responsive}>
                    <div className="coroselCard">
                        <Link to="/anime">
                            <img src={TempImg2} alt="" />
                        </Link>
                    </div>

                    <div className="coroselCard">
                        <Link to="/anime">
                            <img src={TempImg2} alt="" />
                        </Link>
                    </div>

                    <div className="coroselCard">
                        <Link to="/anime">
                            <img src={TempImg2} alt="" />
                        </Link>
                    </div>
                </Carousel>
            </div>



        </div>
    );
}

export default TitleCorosel;
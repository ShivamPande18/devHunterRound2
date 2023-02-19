import NavBar from "./Components/NavBar";
import TitleSection from "./Components/TitleSection";
import TitleScroll from "./Components/TitleScroll";
import TitleCorosel from "./Components/TitleCorosel";

const HomePage = () =>{

    return(
        <div className = "homePage">
            <NavBar/>
            <TitleSection/>
            <TitleScroll />
            <TitleCorosel/>
        </div>
    );
}

export default HomePage;
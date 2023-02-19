import { Link } from "react-router-dom"
import Logo from "./Images/logo2.png"

const NavBar = () => {

    return(
        <nav className = "navbar">
            <ul>
                <li><a className="logo">
                    <img src={Logo} alt="" srcset=""/>
                    {/* LOGO */}
                </a></li>
                <div class="right">
                    <li>
                        <Link to = "/search"><a className="servicesId">Search</a>
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );

}

export default NavBar;
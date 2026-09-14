// Navbar.jsx

import { NavLink} from "react-router-dom";

function Navbar() {
    return (

        <nav className="navbar">

            <ul>
                <li><Navlink to="/" end>Accueil</Navlink></li>
                <li><Navlink to="/" backend>Backend</Navlink></li>
                <li><Navlink to="/" frontend>Frontend</Navlink></li>
                <li><Navlink to="/" javascript>JavaScript</Navlink></li>
                <li><Navlink to="/" bdd>BaseDeDonnes</Navlink></li>
               < li><Navlink to="/" quiz>Quiz</Navlink></li>
               <li><Navlink to="/" lexique>Lexique</Navlink></li>

            </ul>

        </nav>
    )
}

export default Navbar;
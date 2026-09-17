// Navbar.jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" end>Accueil</NavLink></li>
        <li><NavLink to="/backend">Backend</NavLink></li>
        <li><NavLink to="/frontend">Frontend</NavLink></li>
        <li><NavLink to="/javascript">JavaScript</NavLink></li>
        <li><NavLink to="/bdd">Base de données</NavLink></li>
        <li><NavLink to="/quiz">Quiz</NavLink></li>
        <li><NavLink to="/lexique">Lexique</NavLink></li>
        <li><NavLink to="/css">CSS</NavLink></li>
        <li><NavLink to="/html">HTML</NavLink></li>
        <li><NavLink to="/anglais">Anglais pro</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
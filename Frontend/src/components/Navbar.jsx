// Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <img src="/revision.png" alt="Logo Révisions DWWM" className="navbar-logo" />
        <button className="burger" onClick={() => setOuvert(!ouvert)} aria-label="Ouvrir le menu">
          ☰
        </button>
      </div>

      <ul className={ouvert ? "nav-liste ouverte" : "nav-liste"}>
        <li><NavLink to="/" end onClick={() => setOuvert(false)}>Accueil</NavLink></li>
        <li><NavLink to="/frontend" onClick={() => setOuvert(false)}>Frontend</NavLink></li>
        <li><NavLink to="/backend" onClick={() => setOuvert(false)}>Backend</NavLink></li>
        <li><NavLink to="/javascript" onClick={() => setOuvert(false)}>JavaScript</NavLink></li>
        <li><NavLink to="/bdd" onClick={() => setOuvert(false)}>Base de données</NavLink></li>
        <li><NavLink to="/css" onClick={() => setOuvert(false)}>CSS</NavLink></li>
        <li><NavLink to="/html" onClick={() => setOuvert(false)}>HTML</NavLink></li>
        <li><NavLink to="/anglais" onClick={() => setOuvert(false)}>Anglais pro</NavLink></li>
        <li><NavLink to="/quiz" onClick={() => setOuvert(false)}>Quiz</NavLink></li>
        <li><NavLink to="/lexique" onClick={() => setOuvert(false)}>Lexique</NavLink></li>
        <li><NavLink to="/progression" onClick={() => setOuvert(false)}>Progression</NavLink></li>
         <li><NavLink to="/exercices" onClick={() => setOuvert(false)}>Exercices</NavLink></li>

      </ul>
    </nav>
  );
}

export default Navbar;
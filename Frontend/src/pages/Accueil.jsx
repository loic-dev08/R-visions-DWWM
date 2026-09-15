// pages/Accueil.jsx
import { Link } from "react-router-dom";
import "../css/Accueil.css";

const COMPETENCES = [
  { nom: "Frontend", route: "/frontend" },
  { nom: "Backend", route: "/backend" },
  { nom: "JavaScript", route: "/javascript" },
  { nom: "Base de données", route: "/bdd" },
  { nom: "CSS", route: "/css" },
  { nom: "HTML", route: "/html" },
  { nom: "Anglais professionnel", route: "/anglais" },
];

function Accueil() {
  return (
    <div className="accueil">
      <h1>Révisions DWWM</h1>
      <p className="accueil-sous-titre">Compétences REAC à réviser</p>

      <div className="cards-container">
        {COMPETENCES.map((competence) => (
          <div className="card" key={competence.nom}>
            <h2>{competence.nom}</h2>
            <Link to={competence.route}>
              <button className="card-bouton">Accéder</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
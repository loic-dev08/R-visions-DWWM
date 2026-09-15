// pages/BaseDeDonnees.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";

function BaseDeDonnees() {
  const { progression, mettreAJour } = useContext(ProgressContext);

  return (
    <div className="page-competence">
      <h2>Base de données : {progression.bdd}%</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={progression.bdd}
        onChange={(e) => mettreAJour("bdd", Number(e.target.value))}
      />

      <div className="page-competence-liens">
        <Link to="/quiz">Faire le quiz Base de données</Link>
        <Link to="/lexique">Voir le lexique Base de données</Link>
      </div>
    </div>
  );
}

export default BaseDeDonnees;
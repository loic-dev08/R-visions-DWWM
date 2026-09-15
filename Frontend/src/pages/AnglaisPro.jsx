// pages/AnglaisPro.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";

function AnglaisPro() {
  const { progression, mettreAJour } = useContext(ProgressContext);

  return (
    <div className="page-competence">
      <h2>Anglais professionnel : {progression.anglaisPro}%</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={progression.anglaisPro}
        onChange={(e) => mettreAJour("anglaisPro", Number(e.target.value))}
      />

      <div className="page-competence-liens">
        <Link to="/quiz">Faire le quiz Anglais pro</Link>
        <Link to="/lexique">Voir le lexique Anglais pro</Link>
      </div>
    </div>
  );
}

export default AnglaisPro;
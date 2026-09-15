// pages/Frontend.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";

function Frontend() {
  const { progression, mettreAJour } = useContext(ProgressContext);

  return (
    <div className="page-competence">
      <h2>Frontend : {progression.frontend}%</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={progression.frontend}
        onChange={(e) => mettreAJour("frontend", Number(e.target.value))}
      />

      <div className="page-competence-liens">
        <Link to="/quiz">Faire le quiz Frontend</Link>
        <Link to="/lexique">Voir le lexique Frontend</Link>
      </div>
    </div>
  );
}

export default Frontend;
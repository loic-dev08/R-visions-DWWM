// pages/Backend.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";

function Backend() {
  const { progression, mettreAJour } = useContext(ProgressContext);

  return (
    <div className="page-competence">
      <h2>Backend : {progression.backend}%</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={progression.backend}
        onChange={(e) => mettreAJour("backend", Number(e.target.value))}
      />

      <div className="page-competence-liens">
        <Link to="/quiz">Faire le quiz Backend</Link>
        <Link to="/lexique">Voir le lexique Backend</Link>
      </div>
    </div>
  );
}

export default Backend;

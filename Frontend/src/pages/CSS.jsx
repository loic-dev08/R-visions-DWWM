// pages/CSS.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";

function CSS() {
  const { progression, mettreAJour } = useContext(ProgressContext);

  return (
    <div className="page-competence">
      <h2>CSS : {progression.css}%</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={progression.css}
        onChange={(e) => mettreAJour("css", Number(e.target.value))}
      />

      <div className="page-competence-liens">
        <Link to="/quiz">Faire le quiz CSS</Link>
        <Link to="/lexique">Voir le lexique CSS</Link>
      </div>
    </div>
  );
}

export default CSS;
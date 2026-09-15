// pages/HTML.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";

function HTML() {
  const { progression, mettreAJour } = useContext(ProgressContext);

  return (
    <div className="page-competence">
      <h2>HTML : {progression.html}%</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={progression.html}
        onChange={(e) => mettreAJour("html", Number(e.target.value))}
      />

      <div className="page-competence-liens">
        <Link to="/quiz">Faire le quiz HTML</Link>
        <Link to="/lexique">Voir le lexique HTML</Link>
      </div>
    </div>
  );
}

export default HTML;
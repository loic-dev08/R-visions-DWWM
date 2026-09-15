// pages/JavaScript.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";

function JavaScript() {
  const { progression, mettreAJour } = useContext(ProgressContext);

  return (
    <div className="page-competence">
      <h2>JavaScript : {progression.javascript}%</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={progression.javascript}
        onChange={(e) => mettreAJour("javascript", Number(e.target.value))}
      />

      <div className="page-competence-liens">
        <Link to="/quiz">Faire le quiz JavaScript</Link>
        <Link to="/lexique">Voir le lexique JavaScript</Link>
      </div>
    </div>
  );
}

export default JavaScript;
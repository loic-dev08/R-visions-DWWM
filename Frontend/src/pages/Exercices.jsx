// pages/Exercices.jsx
import { useState } from "react";
import { exercices } from "../data/exercices";

const CATEGORIES = ["frontend", "backend", "javascript", "bdd", "css", "html", "anglaisPro"];

const LABELS = {
  frontend: "Frontend",
  backend: "Backend",
  javascript: "JavaScript",
  bdd: "Base de données",
  css: "CSS",
  html: "HTML",
  anglaisPro: "Anglais pro",
};

function Exercices() {
  const [categorie, setCategorie] = useState("javascript");
  const [indexExercice, setIndexExercice] = useState(0);
  const [reponse, setReponse] = useState("");
  const [correctionVisible, setCorrectionVisible] = useState(false);

  const listeExercices = exercices[categorie] || [];
  const exerciceActuel = listeExercices[indexExercice];

  function changerCategorie(nouvelleCategorie) {
    setCategorie(nouvelleCategorie);
    setIndexExercice(0);
    setReponse("");
    setCorrectionVisible(false);
  }

  function exerciceSuivant() {
    setIndexExercice((i) => (i + 1) % listeExercices.length);
    setReponse("");
    setCorrectionVisible(false);
  }

  return (
    <div className="page-competence">
      <h2>Exercices</h2>

      <div className="exercices-selecteur">
        <select value={categorie} onChange={(e) => changerCategorie(e.target.value)}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{LABELS[cat]}</option>
          ))}
        </select>
      </div>

      {exerciceActuel ? (
        <div className="exercice-carte">
          <p className="exercice-progression">
            Exercice {indexExercice + 1} / {listeExercices.length}
          </p>

          <pre className="exercice-enonce">{exerciceActuel.enonce}</pre>

          <textarea
            className="exercice-reponse"
            placeholder="Écris ta réponse ici..."
            value={reponse}
            onChange={(e) => setReponse(e.target.value)}
            rows={6}
          />

          <div className="exercice-actions">
            <button className="exercice-bouton" onClick={() => setCorrectionVisible(true)}>
              Voir la correction
            </button>
            {listeExercices.length > 1 && (
              <button className="exercice-bouton secondaire" onClick={exerciceSuivant}>
                Exercice suivant
              </button>
            )}
          </div>

          {correctionVisible && (
            <div className="exercice-correction">
              <p className="exercice-correction-titre">Correction proposée</p>
              <pre>{exerciceActuel.correction}</pre>
            </div>
          )}
        </div>
      ) : (
        <p>Pas encore d'exercices pour cette catégorie.</p>
      )}
    </div>
  );
}

export default Exercices;
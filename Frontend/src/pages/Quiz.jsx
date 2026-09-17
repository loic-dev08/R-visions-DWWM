// pages/Quiz.jsx
import { useState, useContext } from "react";
import { quiz } from "../data/quiz";
import { ProgressContext } from "../context/ProgressContext";
import PopupExplication from "../components/PopupExplication";

const CATEGORIES = ["frontend", "backend", "javascript", "bdd", "css", "html", "anglaisPro"];

function Quiz() {
  const [categorie, setCategorie] = useState("javascript");
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [termine, setTermine] = useState(false);
  const [popup, setPopup] = useState(null); // { correct: bool } ou null
  const { mettreAJour } = useContext(ProgressContext);

  const questions = quiz[categorie] || [];
  const questionActuelle = questions[indexQuestion];

  function repondre(option) {
    const bonneReponse = option === questionActuelle.reponse;
    if (bonneReponse) setScore((s) => s + 1);
    setPopup({ correct: bonneReponse });
  }

  function fermerPopup() {
    setPopup(null);

    if (indexQuestion + 1 < questions.length) {
      setIndexQuestion((i) => i + 1);
    } else {
      const scoreFinal = popup.correct ? score + 1 : score;
      const pourcentage = Math.round((scoreFinal / questions.length) * 100);
      mettreAJour(categorie, pourcentage);
      setTermine(true);
    }
  }

  function recommencer(nouvelleCategorie) {
    setCategorie(nouvelleCategorie);
    setIndexQuestion(0);
    setScore(0);
    setTermine(false);
    setPopup(null);
  }

  return (
    <div className="page-competence">
      <h2>Quiz</h2>
      <select value={categorie} onChange={(e) => recommencer(e.target.value)}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {termine ? (
        <p>Score : {score}/{questions.length}</p>
      ) : questionActuelle ? (
        <div>
          <p>{questionActuelle.question}</p>
          {questionActuelle.options.map((option) => (
            <button key={option} onClick={() => repondre(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <p>Pas encore de questions pour cette catégorie.</p>
      )}

      {popup && (
        <PopupExplication
          categorie={categorie}
          termeLie={questionActuelle.termeLie}
          correct={popup.correct}
          onFermer={fermerPopup}
        />
      )}
    </div>
  );
}

export default Quiz;
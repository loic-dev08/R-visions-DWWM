// pages/Quiz.jsx — uniquement le JSX à ajuster, la logique ne change pas
return (
  <div className="page-competence">
    <h2>Quiz</h2>

    <div className="quiz-selecteur">
      <select value={categorie} onChange={(e) => recommencer(e.target.value)}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>

    <div className="quiz-carte">
      {termine ? (
        <div className="quiz-resultat">
          <p className="quiz-score">Score : {score}/{questions.length}</p>
          <button className="quiz-bouton" onClick={() => recommencer(categorie)}>
            Recommencer
          </button>
        </div>
      ) : questionActuelle ? (
        <div>
          <p className="quiz-progression-texte">
            Question {indexQuestion + 1} / {questions.length}
          </p>
          <p className="quiz-question">{questionActuelle.question}</p>
          <div className="quiz-options">
            {questionActuelle.options.map((option) => (
              <button
                key={option}
                className="quiz-bouton-option"
                onClick={() => repondre(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Pas encore de questions pour cette catégorie.</p>
      )}
    </div>

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
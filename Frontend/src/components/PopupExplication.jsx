// components/PopupExplication.jsx
import { lexique } from "../data/lexique";

function PopupExplication({ categorie, termeLie, correct, onFermer }) {
  const entree = (lexique[categorie] || []).find((item) => item.terme === termeLie);

  return (
    <div className="popup-overlay" onClick={onFermer}>
      <div className="popup-contenu" onClick={(e) => e.stopPropagation()}>
        <p className={correct ? "popup-verdict correct" : "popup-verdict incorrect"}>
          {correct ? "Bonne réponse !" : "Pas tout à fait."}
        </p>

        {entree ? (
          <>
            <h3>{entree.terme}</h3>
            <p>{entree.definition}</p>
          </>
        ) : (
          <p>Pas d'explication détaillée disponible pour cette question pour le moment.</p>
        )}

        <button className="popup-bouton" onClick={onFermer}>
          Continuer
        </button>
      </div>
    </div>
  );
}

export default PopupExplication;
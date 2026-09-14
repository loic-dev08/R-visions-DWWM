// Footer.jsx
import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

// À modifier dès que la date est fixée
const DATE_EXAMEN = "2027-01-27"; // format AAAA-MM-JJ

function joursRestants(dateCible) {
  const aujourdhui = new Date();
  const cible = new Date(dateCible);
  const diffMs = cible - aujourdhui;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

function Footer() {
  const { progression } = useContext(ProgressContext);

  const jours = joursRestants(DATE_EXAMEN);

  // Compétences en dessous d'un seuil = à revoir
  const aRevoir = Object.entries(progression)
    .filter(([, valeur]) => valeur < 50)
    .map(([nom]) => nom);

  return (
    <footer className="site-footer">
      <div className="footer-countdown">
        {jours > 0 ? (
          <p>Plus que <strong>{jours} jours</strong> avant l'examen</p>
        ) : (
          <p>Date de l'examen dépassée ou non confirmée</p>
        )}
      </div>

      <div className="footer-links">
        <a href="https://francecompetences.fr" target="_blank" rel="noreferrer">
          Référentiel REAC
        </a>
        <a href="https://github.com/loic-dev08/r-visions-DWWM" target="_blank" rel="noreferrer">
          Dépôt GitHub
        </a>
      </div>

      {aRevoir.length > 0 && (
        <div className="footer-reminder">
          <p>À revoir en priorité :</p>
          <ul>
            {aRevoir.map((competence) => (
              <li key={competence}>{competence}</li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
}

export default Footer;
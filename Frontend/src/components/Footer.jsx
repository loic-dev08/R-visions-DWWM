// Footer.jsx
import { useContext, useState, useEffect } from "react";
import { ProgressContext } from "../context/ProgressContext";

// À modifier dès que la date est fixée
const DATE_EXAMEN = "2027-01-27T09:00:00";
const SEUIL_ALERTE_JOURS = 7;

function calculerRestant(dateCible) {
  const maintenant = new Date();
  const cible = new Date(dateCible);
  const diffMs = cible - maintenant;

  if (diffMs <= 0) return null;

  const jours = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const heures = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);

  return { jours, heures, minutes };
}

function Footer() {
  const { progression } = useContext(ProgressContext);
  const [restant, setRestant] = useState(() => calculerRestant(DATE_EXAMEN));

  useEffect(() => {
    const intervalle = setInterval(() => {
      setRestant(calculerRestant(DATE_EXAMEN));
    }, 60000); // mise à jour chaque minute

    return () => clearInterval(intervalle);
  }, []);

  const aRevoir = Object.entries(progression)
    .filter(([, valeur]) => valeur < 50)
    .map(([nom]) => nom);

  const alerteActive = restant && restant.jours <= SEUIL_ALERTE_JOURS;

  return (
    <footer className="site-footer">
      <div className="footer-countdown">
        {restant ? (
          <p>
            Plus que <strong>{restant.jours}j {restant.heures}h {restant.minutes}min</strong> avant l'examen
          </p>
        ) : (
          <p>Date de l'examen dépassée ou non confirmée</p>
        )}
      </div>

      {alerteActive && (
        <div className="footer-alerte">
          ⚠️ L'examen approche ! Plus que {restant.jours} jour(s), intensifie tes révisions.
        </div>
      )}

      <div className="footer-links">
        <a href="https://www.francecompetences.fr" target="_blank" rel="noreferrer">
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
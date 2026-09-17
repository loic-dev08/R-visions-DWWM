// context/ProgressContext.jsx
import { createContext, useState, useEffect } from "react";

export const ProgressContext = createContext();

const CLE_STOCKAGE = "dwwm-progression";

const HISTORIQUE_INITIAL = {
  frontend: [],
  backend: [],
  javascript: [],
  bdd: [],
  css: [],
  html: [],
  anglaisPro: [],
};

function chargerHistorique() {
  try {
    const donnees = localStorage.getItem(CLE_STOCKAGE);
    return donnees ? JSON.parse(donnees) : HISTORIQUE_INITIAL;
  } catch {
    return HISTORIQUE_INITIAL;
  }
}

export function ProgressProvider({ children }) {
  const [historique, setHistorique] = useState(chargerHistorique);

  useEffect(() => {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(historique));
  }, [historique]);

  // Ajoute un nouveau score horodaté pour une compétence
  function mettreAJour(competence, valeur) {
    const score = Math.max(0, Math.min(100, valeur));
    const entree = { date: new Date().toISOString().slice(0, 10), score };

    setHistorique((prev) => ({
      ...prev,
      [competence]: [...(prev[competence] || []), entree],
    }));
  }

  function reinitialiser() {
    setHistorique(HISTORIQUE_INITIAL);
  }

  // Valeur actuelle = dernier score enregistré (pour compatibilité avec le footer, les sliders, etc.)
  const progression = Object.fromEntries(
    Object.entries(historique).map(([competence, entrees]) => [
      competence,
      entrees.length > 0 ? entrees[entrees.length - 1].score : 0,
    ])
  );

  return (
    <ProgressContext.Provider value={{ progression, historique, mettreAJour, reinitialiser }}>
      {children}
    </ProgressContext.Provider>
  );
}
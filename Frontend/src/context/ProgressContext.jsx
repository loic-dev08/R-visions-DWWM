// context/ProgressContext.jsx

import { createContext,useState,useEffect, Children} from "react";

export const ProgressContext = createContext ();

const CLE_STOCKAGE = "dwmm-progression";

// Compétences de départ, à ajuster selon ton REAC
const PROGRESSION_INITIALE = {
    "frontend": 0,
    "backend": 0,
    "javascript": 0,
    "bdd": 0,
    "css": 0,
    "html": 0,
    "anglaisPro": 0,
};

function chargerProgression() {
    try {
        const donnees = localStorage.getItem(CLE_STOCKAGE) ;
        return donnees ? JSON.parse (donnees) : PROGRESSION_INITIALE;
    } catch {
        return PROGRESSION_INITIALE ;
    }
}

export function ProgressProvider ({children}) {
    const [progression, setProgression] = useState(chargerProgression);

    useEffect (() => {
        localStorage.setItem(CLE_STOCKAGE, JSON.stringify(progression));
    }, [progression]);

    function mettreAJour(competence, valeur) {
        setProgression((prev) => ({
            ...prev,
            [competence]: Math.max(0, Math.min(100, valeur)),
        }));
    }

    function reinitialiser() {
        setProgression(PROGRESSION_INITIALE);
    }

    return (
        <ProgressContext.Provider value={{progression, mettreAJour,reinitialiser}}>
        {children}
        </ProgressContext.Provider>


        
    );
}
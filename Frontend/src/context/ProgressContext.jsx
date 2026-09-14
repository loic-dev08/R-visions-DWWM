// context/ProgressContext.jsx

import { createContext,useState,useEffect, Children} from "react";

export const Progre = createContext ();

const CLE_STOCKAGE = "dwmm-progression";

// Compétences de départ, à ajuster selon ton REAC
const PROGRESSION_INITIALE = {
    "REACT_ROUTER": 0,
    "CONTEXT_API": 0,
    "Express": 0,
    "Sequelize": 0,
    "Base de données": 0,
    "Tests": 0,
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
            [competence]: math.max(0, math.min(100, valeur)),
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
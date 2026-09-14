// pages/Lexique.jsx

import { useState } from "react";
import { Lexique} from "../data/Lexique";

const CATEGORIES = ["frontend", "backend", "javascript", "bdd", "css", "html", "anglaisPro"];

function Lexique () {
    const [categorie, setCategorie] = useState("javascript");
    const [recherche, setRecherche] = useState ("");

    const termes = (lexique[categorie] || []) .filter((item) =>
    item.terme.toLowerCase().includes(recherche. toLowerCase())
);

return (
    <div>
        <h2>Lexique</h2>
        <select value={categorie} onChange= {(e) =>setCategorie(e.target.value)} >
        {CATEGORIES.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
        ))}

        </select>
        <input 
        type="text" 
        placeholder="Rechercher un thème..."
        value = {recherche}
        onChange={(e) => setRecherche(e.target.value)}
        />
        <dl>
            { termes.map(({terme, definition}) => (
                <div key={terme}>
                    <dt>{terme}</dt>
                    <dd>{definition}</dd>

                </div>
            ))}
            
        </dl>
    </div>
);
}

export default Lexique;
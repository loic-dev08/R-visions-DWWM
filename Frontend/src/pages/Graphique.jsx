// pages/Graphique.jsx
import { useState, useContext } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ProgressContext } from "../context/ProgressContext";

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

function Graphique() {
  const { historique } = useContext(ProgressContext);
  const [categorie, setCategorie] = useState("frontend");

  const donnees = historique[categorie] || [];

  return (
    <div className="page-competence">
      <h2>Évolution : {LABELS[categorie]}</h2>

      <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{LABELS[cat]}</option>
        ))}
      </select>

      {donnees.length === 0 ? (
        <p>Pas encore de données pour cette compétence — fais un quiz pour commencer le suivi.</p>
      ) : (
        <div style={{ width: "100%", height: 350, marginTop: "1.5rem" }}>
          <ResponsiveContainer>
            <LineChart data={donnees}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#006994" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default Graphique;
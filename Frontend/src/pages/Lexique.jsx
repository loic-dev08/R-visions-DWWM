// pages/Lexique.jsx — uniquement le JSX à ajuster
return (
  <div className="page-competence">
    <h2>Lexique</h2>

    <div className="lexique-filtres">
      <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Rechercher un terme..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
    </div>

    <div className="lexique-grille">
      {termes.length > 0 ? (
        termes.map(({ terme, definition }) => (
          <div className="lexique-carte" key={terme}>
            <h3>{terme}</h3>
            <p>{definition}</p>
          </div>
        ))
      ) : (
        <p>Aucun terme trouvé pour cette recherche.</p>
      )}
    </div>
  </div>
);
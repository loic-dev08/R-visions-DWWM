// Fichier généré automatiquement à partir de quiz.js — vérifie avant de committer
export const exercices = {
  css: [
    {
      enonce: "Écris le CSS pour qu'un texte soit centré horizontalement dans son conteneur, en gras, et de couleur bleu foncé (#1565c0).",
      correction: `.mon-texte {
  text-align: center;
  font-weight: bold;
  color: #1565c0;
}`
    },
    {
      enonce: "Écris une grille CSS (Grid) à 3 colonnes égales avec un espace de 1rem entre les éléments.",
      correction: `.grille {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`
    },
    {
      enonce: `Corrige l'erreur dans ce code qui devrait ajouter une ombre portée à une carte :

.carte {
  box-shadow: 0 2px 6px, rgba(0,0,0,0.1);
}`,
      correction: `.carte {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
// Le bug : une virgule en trop séparait le décalage de la couleur, alors qu'ils doivent être dans la même valeur, séparés par des espaces.`
    },
    {
      enonce: "Écris le CSS pour qu'un bouton change de couleur de fond au survol (hover), avec une transition douce de 0.2 seconde.",
      correction: `.bouton {
  background-color: #2196f3;
  transition: background-color 0.2s ease;
}

.bouton:hover {
  background-color: #1565c0;
}`
    },
    {
      enonce: "Écris le CSS pour masquer un élément visuellement mais le garder accessible aux lecteurs d'écran (technique sr-only).",
      correction: `.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`
    }
  ],
  javascript: [
    {
      enonce: "Écris une fonction qui prend un tableau et retourne uniquement les nombres pairs.",
      correction: `function nombresPairs(tableau) {
  return tableau.filter((n) => n % 2 === 0);
}`
    },
    {
      enonce: "Écris une fonction qui vérifie si un mot est un palindrome (se lit pareil dans les deux sens).",
      correction: `function estPalindrome(mot) {
  const motInverse = mot.split("").reverse().join("");
  return mot === motInverse;
}`
    },
    {
      enonce: `Corrige le bug : la fonction doit additionner deux nombres passés en paramètres.

function additionner(a, b) {
  return a + b
  console.log("Calcul terminé");
}`,
      correction: `function additionner(a, b) {
  console.log("Calcul terminé");
  return a + b;
}
// Le bug : le code après un "return" n'est jamais exécuté, il fallait déplacer le console.log avant.`
    },
    {
      enonce: "Écris une fonction asynchrone qui simule un appel API avec setTimeout, et retourne \"Données reçues\" après 1 seconde.",
      correction: `function recupererDonnees() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Données reçues"), 1000);
  });
}

async function afficherDonnees() {
  const resultat = await recupererDonnees();
  console.log(resultat);
}`
    },
    {
      enonce: "Écris une fonction qui prend un objet et retourne un tableau de ses clés uniquement.",
      correction: `function obtenirCles(objet) {
  return Object.keys(objet);
}`
    }
  ],
  frontend: [
    {
      enonce: "Écris un composant React Compteur avec un état initial à 0, un bouton qui incrémente, et l'affichage de la valeur actuelle.",
      correction: `import { useState } from "react";

function Compteur() {
  const [valeur, setValeur] = useState(0);

  return (
    <div>
      <p>{valeur}</p>
      <button onClick={() => setValeur(valeur + 1)}>Incrémenter</button>
    </div>
  );
}`
    },
    {
      enonce: "Écris un composant React ListeFruits qui affiche une liste à partir d'un tableau de fruits reçu en prop.",
      correction: `function ListeFruits({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}`
    },
    {
      enonce: `Corrige le bug dans ce composant qui ne met jamais à jour l'affichage au clic :

function Bouton() {
  let compteur = 0;
  return <button onClick={() => compteur++}>{compteur}</button>;
}`,
      correction: `import { useState } from "react";

function Bouton() {
  const [compteur, setCompteur] = useState(0);
  return <button onClick={() => setCompteur(compteur + 1)}>{compteur}</button>;
}
// Le bug : une variable locale (let) ne déclenche pas de re-render. Il faut utiliser useState.`
    },
    {
      enonce: "Écris un composant React qui utilise useEffect pour afficher \"Composant monté\" dans la console au premier rendu uniquement.",
      correction: `import { useEffect } from "react";

function MonComposant() {
  useEffect(() => {
    console.log("Composant monté");
  }, []);

  return <div>Contenu</div>;
}`
    }
  ],
  backend: [
    {
      enonce: "Écris une route Express POST qui reçoit un nom d'utilisateur dans le corps de la requête et retourne un message de bienvenue personnalisé.",
      correction: `app.post('/bienvenue', (req, res) => {
  const { nom } = req.body;
  res.json({ message: \`Bienvenue \${nom} !\` });
});`
    },
    {
      enonce: "Écris un middleware Express qui vérifie la présence d'un token dans les headers, et bloque la requête (401) s'il est absent.",
      correction: `function verifierToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ erreur: "Token manquant" });
  }
  next();
}`
    },
    {
      enonce: "Écris une route Express qui retourne un utilisateur par son id, ou une erreur 404 s'il n'existe pas.",
      correction: `app.get('/utilisateurs/:id', (req, res) => {
  const utilisateur = utilisateurs.find((u) => u.id === parseInt(req.params.id));
  if (!utilisateur) {
    return res.status(404).json({ erreur: "Utilisateur non trouvé" });
  }
  res.json(utilisateur);
});`
    },
    {
      enonce: "Écris le code pour se connecter à une base de données MySQL avec Sequelize (configuration simple).",
      correction: `const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nom_bdd', 'utilisateur', 'mot_de_passe', {
  host: 'localhost',
  dialect: 'mysql',
});`
    }
  ],
  bdd: [
    {
      enonce: "Écris une requête SQL qui insère un nouveau client (nom : 'Durand', email : 'durand@mail.com') dans la table clients.",
      correction: "INSERT INTO clients (nom, email) VALUES ('Durand', 'durand@mail.com');"
    },
    {
      enonce: "Écris une requête SQL qui met à jour l'email du client dont l'id est 5.",
      correction: "UPDATE clients SET email = 'nouveau@mail.com' WHERE id = 5;"
    },
    {
      enonce: "Écris une requête SQL avec une jointure (INNER JOIN) entre les tables commandes et clients pour afficher le nom du client et la date de chaque commande.",
      correction: `SELECT clients.nom, commandes.date_commande
FROM commandes
INNER JOIN clients ON commandes.client_id = clients.id;`
    },
    {
      enonce: "Écris une requête SQL qui supprime tous les clients qui n'ont jamais passé de commande (aucune correspondance dans la table commandes).",
      correction: `DELETE FROM clients
WHERE id NOT IN (SELECT client_id FROM commandes);`
    },
    {
      enonce: "Écris la commande SQL pour créer une table produits avec un id auto-incrémenté, un nom (texte) et un prix (décimal).",
      correction: `CREATE TABLE produits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prix DECIMAL(10, 2) NOT NULL
);`
    }
  ],
  anglaisPro: [
    {
      enonce: "Traduis en anglais : \"Pourriez-vous me confirmer la disponibilité de ce poste ?\"",
      correction: "\"Could you confirm the availability of this position?\""
    },
    {
      enonce: "Rédige une phrase professionnelle en anglais pour remercier un recruteur après un entretien.",
      correction: "\"Thank you for taking the time to meet with me today. I really enjoyed learning more about the role.\""
    },
    {
      enonce: "Traduis en anglais : \"Le projet a pris du retard en raison de contraintes techniques imprévues.\"",
      correction: "\"The project has been delayed due to unforeseen technical constraints.\""
    },
    {
      enonce: "Rédige une phrase en anglais pour demander des précisions sur une tâche à un collègue.",
      correction: "\"Could you clarify what's expected for this task? I want to make sure I understand the requirements correctly.\""
    }
  ]
};

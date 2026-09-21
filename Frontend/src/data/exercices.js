// data/exercices.js
export const exercices = {
  javascript: [
    {
      enonce: "Écris une fonction qui prend un tableau de nombres et retourne la somme de tous les éléments.",
      correction: `function somme(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}`,
    },
    {
      enonce: "Écris une fonction qui inverse une chaîne de caractères sans utiliser .reverse().",
      correction: `function inverser(chaine) {
  let resultat = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat += chaine[i];
  }
  return resultat;
}`,
    },
    {
      enonce: "Corrige le bug : la fonction doit retourner true si le nombre est pair.\n\nfunction estPair(n) {\n  return n % 2 = 0;\n}",
      correction: `function estPair(n) {
  return n % 2 === 0;
}
// Le bug : "=" est une affectation, il fallait "===" pour comparer.`,
    },

    {
  enonce: "Écris une fonction qui prend un tableau et retourne uniquement les nombres pairs.",
  correction: `function nombresPairs(tableau) {
  return tableau.filter((n) => n % 2 === 0);
}`,
},
{
  enonce: "Écris une fonction qui vérifie si un mot est un palindrome (se lit pareil dans les deux sens).",
  correction: `function estPalindrome(mot) {
  const motInverse = mot.split("").reverse().join("");
  return mot === motInverse;
}`,
},
{
  enonce: "Corrige le bug : la fonction doit additionner deux nombres passés en paramètres.\n\nfunction additionner(a, b) {\n  return a + b\n  console.log(\"Calcul terminé\");\n}",
  correction: `function additionner(a, b) {
  console.log("Calcul terminé");
  return a + b;
}
// Le bug : le code après un "return" n'est jamais exécuté, il fallait déplacer le console.log avant.`,
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
}`,
},
{
  enonce: "Écris une fonction qui prend un objet et retourne un tableau de ses clés uniquement.",
  correction: `function obtenirCles(objet) {
  return Object.keys(objet);
}`,
},
  ],

  css: [
    {
      enonce: "Écris le CSS pour centrer horizontalement et verticalement un élément .box à l'intérieur de son parent .container, en utilisant Flexbox.",
      correction: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    },
    {
      enonce: "Écris une media query qui passe la couleur de fond du body en bleu clair (#e3f2fd) sur les écrans de moins de 600px.",
      correction: `@media (max-width: 600px) {
  body {
    background-color: #e3f2fd;
  }
}`,
    },

    {
  enonce: "Écris le CSS pour qu'un texte soit centré horizontalement dans son conteneur, en gras, et de couleur bleu foncé (#1565c0).",
  correction: `.mon-texte {
  text-align: center;
  font-weight: bold;
  color: #1565c0;
}`,
},
{
  enonce: "Écris une grille CSS (Grid) à 3 colonnes égales avec un espace de 1rem entre les éléments.",
  correction: `.grille {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`,
},
{
  enonce: "Corrige l'erreur dans ce code qui devrait ajouter une ombre portée à une carte :\n\n.carte {\n  box-shadow: 0 2px 6px, rgba(0,0,0,0.1);\n}",
  correction: `.carte {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
// Le bug : une virgule en trop séparait le décalage de la couleur, alors qu'ils doivent être dans la même valeur, séparés par des espaces.`,
},
{
  enonce: "Écris le CSS pour qu'un bouton change de couleur de fond au survol (hover), avec une transition douce de 0.2 seconde.",
  correction: `.bouton {
  background-color: #2196f3;
  transition: background-color 0.2s ease;
}

.bouton:hover {
  background-color: #1565c0;
}`,
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
}`,
},
  ],

  html: [
    {
      enonce: "Écris le squelette HTML d'un formulaire de contact avec un champ nom, un champ email et un bouton d'envoi, en utilisant des balises sémantiques.",
      correction: `<form>
  <label for="nom">Nom</label>
  <input type="text" id="nom" name="nom" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Envoyer</button>
</form>`,
    },
    {
      enonce: "Écris le HTML d'une carte produit simple contenant : une image, un titre (h3), un prix, et un bouton \"Ajouter au panier\".",
      correction: `<div class="carte-produit">
  <img src="produit.jpg" alt="Nom du produit">
  <h3>Nom du produit</h3>
  <p>29,99 €</p>
  <button>Ajouter au panier</button>
</div>`,
    },
    {
      enonce: "Écris une table HTML avec un en-tête (Nom, Âge, Ville) et deux lignes de données.",
      correction: `<table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Âge</th>
      <th>Ville</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dupont</td>
      <td>28</td>
      <td>Lyon</td>
    </tr>
    <tr>
      <td>Martin</td>
      <td>34</td>
      <td>Nantes</td>
    </tr>
  </tbody>
</table>`,
    },
    {
      enonce: "Corrige les erreurs sémantiques et d'accessibilité dans ce code :\n\n<div class=\"titre\">Bienvenue</div>\n<div class=\"image\"><img src=\"photo.jpg\"></div>",
      correction: `<h1>Bienvenue</h1>
<img src="photo.jpg" alt="Description de la photo">

// Erreurs corrigées :
// - un titre visuel doit être une vraie balise de titre (h1 à h6), pas un <div>
// - une image doit toujours avoir un attribut alt pour l'accessibilité`,
    },
    {
      enonce: "Écris le HTML d'une liste déroulante (select) permettant de choisir un pays parmi France, Belgique, Suisse.",
      correction: `<label for="pays">Pays</label>
<select id="pays" name="pays">
  <option value="france">France</option>
  <option value="belgique">Belgique</option>
  <option value="suisse">Suisse</option>
</select>`,
    },
    {
      enonce: "Écris la structure HTML sémantique complète d'une page simple : en-tête, navigation, contenu principal, et pied de page.",
      correction: `<body>
  <header>
    <h1>Nom du site</h1>
  </header>

  <nav>
    <ul>
      <li><a href="#accueil">Accueil</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <main>
    <p>Contenu principal de la page.</p>
  </main>

  <footer>
    <p>© 2026 Mon site</p>
  </footer>
</body>`,
    },
    {
      enonce: "Écris le HTML d'un champ de formulaire pour uploader un fichier, avec un label associé.",
      correction: `<label for="fichier">Choisir un fichier</label>
<input type="file" id="fichier" name="fichier">`,
    },
  ],

  bdd: [
    {
      enonce: "Écris une requête SQL qui sélectionne le nom et l'email de tous les clients situés à Paris.",
      correction: `SELECT nom, email FROM clients WHERE ville = 'Paris';`,
    },
    {
      enonce: "Écris une requête SQL qui compte le nombre de commandes par client, triée du plus grand au plus petit nombre de commandes.",
      correction: `SELECT client_id, COUNT(*) AS nombre_commandes
FROM commandes
GROUP BY client_id
ORDER BY nombre_commandes DESC;`,
    },

    {
  enonce: "Écris une requête SQL qui insère un nouveau client (nom : 'Durand', email : 'durand@mail.com') dans la table clients.",
  correction: `INSERT INTO clients (nom, email) VALUES ('Durand', 'durand@mail.com');`,
},
{
  enonce: "Écris une requête SQL qui met à jour l'email du client dont l'id est 5.",
  correction: `UPDATE clients SET email = 'nouveau@mail.com' WHERE id = 5;`,
},
{
  enonce: "Écris une requête SQL avec une jointure (INNER JOIN) entre les tables commandes et clients pour afficher le nom du client et la date de chaque commande.",
  correction: `SELECT clients.nom, commandes.date_commande
FROM commandes
INNER JOIN clients ON commandes.client_id = clients.id;`,
},
{
  enonce: "Écris une requête SQL qui supprime tous les clients qui n'ont jamais passé de commande (aucune correspondance dans la table commandes).",
  correction: `DELETE FROM clients
WHERE id NOT IN (SELECT client_id FROM commandes);`,
},
{
  enonce: "Écris la commande SQL pour créer une table produits avec un id auto-incrémenté, un nom (texte) et un prix (décimal).",
  correction: `CREATE TABLE produits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prix DECIMAL(10, 2) NOT NULL
);`,
},
  ],

  backend: [
    {
      enonce: "Complète cette route Express qui doit retourner tous les utilisateurs au format JSON.\n\napp.get('/utilisateurs', (req, res) => {\n  // à compléter\n});",
      correction: `app.get('/utilisateurs', (req, res) => {
  res.json(utilisateurs);
});`,
    },
    {
      enonce: "Écris un middleware Express simple qui log la méthode et l'URL de chaque requête dans la console.",
      correction: `function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`);
  next();
}
app.use(logger);`,
    },

    {
  enonce: "Écris une route Express POST qui reçoit un nom d'utilisateur dans le corps de la requête et retourne un message de bienvenue personnalisé.",
  correction: `app.post('/bienvenue', (req, res) => {
  const { nom } = req.body;
  res.json({ message: \`Bienvenue \${nom} !\` });
});`,
},
{
  enonce: "Écris un middleware Express qui vérifie la présence d'un token dans les headers, et bloque la requête (401) s'il est absent.",
  correction: `function verifierToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ erreur: "Token manquant" });
  }
  next();
}`,
},
{
  enonce: "Écris une route Express qui retourne un utilisateur par son id, ou une erreur 404 s'il n'existe pas.",
  correction: `app.get('/utilisateurs/:id', (req, res) => {
  const utilisateur = utilisateurs.find((u) => u.id === parseInt(req.params.id));
  if (!utilisateur) {
    return res.status(404).json({ erreur: "Utilisateur non trouvé" });
  }
  res.json(utilisateur);
});`,
},
{
  enonce: "Écris le code pour se connecter à une base de données MySQL avec Sequelize (configuration simple).",
  correction: `const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nom_bdd', 'utilisateur', 'mot_de_passe', {
  host: 'localhost',
  dialect: 'mysql',
});`,
},
  ],

  frontend: [
    {
      enonce: "Écris un composant React simple Bouton qui affiche un texte reçu en prop et log \"Cliqué\" dans la console au clic.",
      correction: `function Bouton({ texte }) {
  return <button onClick={() => console.log("Cliqué")}>{texte}</button>;
}`,
    },

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
}`,
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
}`,
},
{
  enonce: "Corrige le bug dans ce composant qui ne met jamais à jour l'affichage au clic :\n\nfunction Bouton() {\n  let compteur = 0;\n  return <button onClick={() => compteur++}>{compteur}</button>;\n}",
  correction: `import { useState } from "react";

function Bouton() {
  const [compteur, setCompteur] = useState(0);
  return <button onClick={() => setCompteur(compteur + 1)}>{compteur}</button>;
}
// Le bug : une variable locale (let) ne déclenche pas de re-render. Il faut utiliser useState.`,
},
{
  enonce: "Écris un composant React qui utilise useEffect pour afficher \"Composant monté\" dans la console au premier rendu uniquement.",
  correction: `import { useEffect } from "react";

function MonComposant() {
  useEffect(() => {
    console.log("Composant monté");
  }, []);

  return <div>Contenu</div>;
}`,
},
  ],

  anglaisPro: [
    {
      enonce: "Traduis en anglais : \"Nous devons livrer le projet avant la fin du mois, en respectant le cahier des charges.\"",
      correction: `"We need to deliver the project by the end of the month, in line with the requirements document."`,
    },
    {
      enonce: "Rédige une phrase professionnelle en anglais pour reporter une réunion.",
      correction: `"I'm writing to let you know that I need to reschedule our meeting. Would next Tuesday at 2pm work for you?"`,
    },

    {
  enonce: "Traduis en anglais : \"Pourriez-vous me confirmer la disponibilité de ce poste ?\"",
  correction: `"Could you confirm the availability of this position?"`,
},
{
  enonce: "Rédige une phrase professionnelle en anglais pour remercier un recruteur après un entretien.",
  correction: `"Thank you for taking the time to meet with me today. I really enjoyed learning more about the role."`,
},
{
  enonce: "Traduis en anglais : \"Le projet a pris du retard en raison de contraintes techniques imprévues.\"",
  correction: `"The project has been delayed due to unforeseen technical constraints."`,
},
{
  enonce: "Rédige une phrase en anglais pour demander des précisions sur une tâche à un collègue.",
  correction: `"Could you clarify what's expected for this task? I want to make sure I understand the requirements correctly."`,
},
  ],
};
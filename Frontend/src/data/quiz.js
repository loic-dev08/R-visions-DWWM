// data/quiz.js
export const quiz = {
  html: [
    {
      question: "Quelle balise définit le contenu principal d'une page ?",
      options: ["<section>", "<main>", "<div>", "<body>"],
      reponse: "<main>",
    },
    {
      question: "L'attribut alt sur une balise <img> est obligatoire pour l'accessibilité.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
      termeLie: "Attribut ARIA",
    },
    {
      question: "Quelle balise permet de créer un formulaire ?",
      options: ["<form>", "<input>", "<field>", "<data>"],
      reponse: "<form>",
    },
    {
      question: "La balise <article> peut contenir plusieurs <section>.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
      termeLie: "Sémantique",
    },

    {
  question: "Quelle balise permet d'insérer une image ?",
  options: ["<picture>", "<image>", "<img>", "<src>"],
  reponse: "<img>",
},
{
  question: "L'attribut lang sur la balise <html> sert à indiquer la langue du document.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quelle balise sémantique représente l'en-tête d'une page ou d'une section ?",
  options: ["<top>", "<header>", "<head>", "<title>"],
  reponse: "<header>",
  termeLie: "Sémantique",
},
{
  question: "Le DOM est une représentation en arbre du document HTML.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "DOM",
},
{
  question: "Quel attribut permet de rendre un champ de formulaire obligatoire ?",
  options: ["mandatory", "required", "obligatory", "must"],
  reponse: "required",
},
{
  question: "La balise <br> nécessite une balise fermante </br>.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
  termeLie: "Balise auto-fermante",
},
{
  question: "Quelle balise permet de créer une liste numérotée ?",
  options: ["<ul>", "<ol>", "<li>", "<dl>"],
  reponse: "<ol>",
},
{
  question: "Les attributs ARIA améliorent l'accessibilité pour les lecteurs d'écran.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Attribut ARIA",
},
{
  question: "Quelle balise permet d'intégrer une vidéo native en HTML5 ?",
  options: ["<media>", "<video>", "<embed>", "<film>"],
  reponse: "<video>",
},
{
  question: "Le type d'input <input type=\"email\"> valide automatiquement le format email.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quelle balise regroupe les éléments de navigation d'un site ?",
  options: ["<navigation>", "<nav>", "<menu>", "<links>"],
  reponse: "<nav>",
},
{
  question: "L'attribut alt sur une image sert uniquement à des fins esthétiques.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Quelle balise permet d'afficher du contenu alternatif si le navigateur ne supporte pas une fonctionnalité ?",
  options: ["<noscript>", "<alt>", "<fallback>", "<backup>"],
  reponse: "<noscript>",
},
{
  question: "Un document HTML5 valide doit commencer par <!DOCTYPE html>.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quelle balise sémantique représente un contenu indépendant et réutilisable, comme un article de blog ?",
  options: ["<section>", "<article>", "<div>", "<content>"],
  reponse: "<article>",
  termeLie: "Sémantique",
},
  ],

  css: [
    {
      question: "Quelle propriété CSS gère l'espacement interne d'un élément ?",
      options: ["margin", "padding", "gap", "border"],
      reponse: "padding",
      termeLie: "Box-sizing",
    },
    {
      question: "Flexbox et Grid font exactement la même chose.",
      options: ["Vrai", "Faux"],
      reponse: "Faux",
      termeLie: "Flexbox",
    },
    {
      question: "Quelle unité CSS est relative à la taille de la police racine ?",
      options: ["em", "rem", "px", "vh"],
      reponse: "rem",
    },
    {
      question: "position: absolute positionne un élément par rapport à son parent le plus proche ayant une position autre que static.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
    },

    {
  question: "Quelle règle CSS détermine quelle déclaration s'applique en cas de conflit ?",
  options: ["L'ordre alphabétique", "La spécificité", "La taille du fichier", "Le nom de la classe"],
  reponse: "La spécificité",
  termeLie: "Spécificité",
},
{
  question: "display: none et visibility: hidden ont exactement le même effet.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Quelle propriété permet de définir l'espace entre les éléments d'un conteneur flex ou grid ?",
  options: ["margin", "gap", "spacing", "padding"],
  reponse: "gap",
},
{
  question: "Une media query permet d'adapter le style selon la taille de l'écran.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Media query",
},
{
  question: "Quelle propriété permet de faire pivoter un élément ?",
  options: ["rotate", "transform", "translate", "skew"],
  reponse: "transform",
},
{
  question: "En CSS Grid, grid-template-columns définit le nombre et la taille des colonnes.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Grid",
},
{
  question: "Quelle pseudo-classe cible un élément au survol de la souris ?",
  options: [":focus", ":hover", ":active", ":visited"],
  reponse: ":hover",
},
{
  question: "Les variables CSS (custom properties) se déclarent avec le préfixe --.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quelle valeur de position permet de fixer un élément par rapport à la fenêtre, même au scroll ?",
  options: ["relative", "absolute", "fixed", "static"],
  reponse: "fixed",
},
{
  question: "z-index ne fonctionne que sur les éléments ayant une position autre que static.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quelle unité est relative à la taille de l'élément parent direct ?",
  options: ["rem", "em", "vh", "px"],
  reponse: "em",
},
{
  question: "flex-direction: column organise les éléments d'un conteneur flex en colonne.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Flexbox",
},
{
  question: "Quelle propriété permet d'ajouter une ombre à un élément ?",
  options: ["shadow", "box-shadow", "drop-shadow", "text-shadow uniquement"],
  reponse: "box-shadow",
},
{
  question: "box-sizing: border-box inclut le padding et la bordure dans la largeur totale de l'élément.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Box-sizing",
},
{
  question: "Quelle propriété permet de masquer le débordement d'un conteneur ?",
  options: ["overflow", "hidden", "clip-path", "display"],
  reponse: "overflow",
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

  javascript: [
    {
      question: "Que retourne typeof null en JavaScript ?",
      options: ["null", "undefined", "object", "number"],
      reponse: "object",
    },
    {
      question: "const empêche de modifier les propriétés d'un objet.",
      options: ["Vrai", "Faux"],
      reponse: "Faux",
      termeLie: "Destructuring",
    },
    {
      question: "Quelle méthode transforme un tableau sans modifier l'original ?",
      options: ["push", "splice", "map", "sort"],
      reponse: "map",
    },
    {
      question: "Une closure permet à une fonction de garder accès aux variables de son contexte de création.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
      termeLie: "Closure",
    },
    {
      question: "Que fait l'opérateur === que === ne fait pas ?",
      options: ["Rien de différent", "Compare aussi le type", "Compare seulement la valeur", "Convertit les types avant de comparer"],
      reponse: "Compare aussi le type",
    },

    // À insérer dans le tableau javascript: [ ... ] existant, à la suite des questions actuelles
{
  question: "Que fait la méthode Array.prototype.filter() ?",
  options: [
    "Elle modifie le tableau original",
    "Elle retourne un nouveau tableau avec les éléments qui passent un test",
    "Elle trie le tableau",
    "Elle transforme chaque élément",
  ],
  reponse: "Elle retourne un nouveau tableau avec les éléments qui passent un test",
},
{
  question: "let et const ont la même portée (scope) que var.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Que retourne une fonction asynchrone (async function) par défaut ?",
  options: ["Une valeur brute", "Une Promise", "Un objet Callback", "undefined toujours"],
  reponse: "Une Promise",
  termeLie: "Promise",
},
{
  question: "Le mot-clé await ne peut être utilisé qu'à l'intérieur d'une fonction async.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Que fait JSON.stringify() ?",
  options: [
    "Convertit une chaîne JSON en objet JavaScript",
    "Convertit un objet JavaScript en chaîne JSON",
    "Valide un objet JSON",
    "Supprime les propriétés vides d'un objet",
  ],
  reponse: "Convertit un objet JavaScript en chaîne JSON",
},
{
  question: "Quelle méthode permet d'ajouter un élément à la fin d'un tableau ?",
  options: ["shift()", "unshift()", "push()", "pop()"],
  reponse: "push()",
},
{
  question: "En JavaScript, this fait toujours référence à l'objet où la fonction est définie.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Quelle syntaxe permet de définir une fonction fléchée (arrow function) ?",
  options: ["function() => {}", "() => {}", "=> function() {}", "function => () {}"],
  reponse: "() => {}",
},
{
  question: "Le spread operator (...) permet de copier ou fusionner des tableaux et objets.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Spread operator",
},
{
  question: "Quelle méthode permet d'écouter un événement sur un élément du DOM ?",
  options: ["addEventListener()", "onEvent()", "listenTo()", "catchEvent()"],
  reponse: "addEventListener()",
},
{
  question: "Un tableau (Array) en JavaScript est un type d'objet.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quelle méthode permet de convertir une chaîne de caractères en nombre entier ?",
  options: ["Number.toString()", "parseInt()", "String.toInt()", "toFixed()"],
  reponse: "parseInt()",
},
{
  question: "Une classe (class) en JavaScript est une nouvelle façon de créer des objets, différente des prototypes.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Que fait la méthode Array.prototype.reduce() ?",
  options: [
    "Elle réduit la taille d'un tableau",
    "Elle accumule les valeurs d'un tableau en une seule valeur",
    "Elle supprime les doublons",
    "Elle inverse l'ordre du tableau",
  ],
  reponse: "Elle accumule les valeurs d'un tableau en une seule valeur",
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

  frontend: [
    {
      question: "Dans React, un composant fonctionnel doit toujours retourner un seul élément racine.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
      termeLie: "Composant",
    },
    {
      question: "Quel hook permet de mémoriser une valeur entre les rendus sans provoquer de re-render ?",
      options: ["useState", "useRef", "useEffect", "useMemo"],
      reponse: "useRef",
      termeLie: "Hook",
    },
    {
      question: "useEffect s'exécute avant que le DOM soit mis à jour.",
      options: ["Vrai", "Faux"],
      reponse: "Faux",
    },
    {
      question: "Quel package est utilisé pour gérer les routes côté client dans React ?",
      options: ["redux", "react-router-dom", "axios", "react-query"],
      reponse: "react-router-dom",
    },

    {
  question: "Un composant React doit toujours commencer par une majuscule.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Composant",
},
{
  question: "Que sont les props dans un composant React ?",
  options: [
    "Des données internes modifiables par le composant",
    "Des données passées par le parent, en lecture seule",
    "Des styles CSS uniquement",
    "Des méthodes de cycle de vie",
  ],
  reponse: "Des données passées par le parent, en lecture seule",
  termeLie: "Props",
},
{
  question: "Modifier directement le state avec une affectation (state = ...) déclenche un re-render.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
  termeLie: "State",
},
{
  question: "Quel hook permet d'exécuter du code après le rendu d'un composant ?",
  options: ["useState", "useEffect", "useRef", "useContext"],
  reponse: "useEffect",
  termeLie: "Hook",
},
{
  question: "Le Virtual DOM permet à React d'optimiser les mises à jour du DOM réel.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Virtual DOM",
},
{
  question: "Quelle méthode permet de transmettre des données d'un composant enfant vers son parent ?",
  options: [
    "Via les props directement",
    "Via une fonction callback passée en prop",
    "Ce n'est pas possible en React",
    "Uniquement via Redux",
  ],
  reponse: "Via une fonction callback passée en prop",
},
{
  question: "Le hook useContext permet d'éviter de faire descendre des props sur plusieurs niveaux.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quelle balise JSX doit envelopper plusieurs éléments retournés par un composant ?",
  options: ["<div> uniquement", "Un fragment (<>...</>) ou un élément unique", "<group>", "Aucun besoin"],
  reponse: "Un fragment (<>...</>) ou un élément unique",
},
{
  question: "Le prop key est obligatoire lorsqu'on affiche une liste d'éléments avec .map().",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Que permet de faire React Router dans une application React ?",
  options: [
    "Gérer l'état global",
    "Gérer la navigation entre les pages sans recharger",
    "Optimiser les performances CSS",
    "Faire des appels API",
  ],
  reponse: "Gérer la navigation entre les pages sans recharger",
},
{
  question: "Un composant fonctionnel peut utiliser des hooks, contrairement à un composant de classe.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quel hook permet de mémoriser le résultat d'un calcul coûteux entre les rendus ?",
  options: ["useMemo", "useState", "useEffect", "useCallback uniquement"],
  reponse: "useMemo",
},
{
  question: "Le Context API remplace complètement Redux dans tous les cas d'usage.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Que fait la fonction useState au premier rendu d'un composant ?",
  options: [
    "Elle initialise l'état avec la valeur passée en argument",
    "Elle supprime l'état précédent",
    "Elle ne fait rien",
    "Elle déclenche un appel API",
  ],
  reponse: "Elle initialise l'état avec la valeur passée en argument",
},
{
  question: "Vite est un outil de build plus rapide que Webpack pour le développement React.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
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

  backend: [
    {
      question: "Quel code HTTP indique une ressource créée avec succès ?",
      options: ["200", "201", "204", "400"],
      reponse: "201",
      termeLie: "Endpoint",
    },
    {
      question: "Un middleware Express peut interrompre la chaîne de traitement d'une requête.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
      termeLie: "Middleware",
    },
    {
      question: "Quelle méthode HTTP est idempotente ?",
      options: ["POST", "PUT", "PATCH seulement", "Aucune"],
      reponse: "PUT",
    },
    {
      question: "Une API REST doit obligatoirement retourner du JSON.",
      options: ["Vrai", "Faux"],
      reponse: "Faux",
      termeLie: "API REST",
    },

    {
  question: "Qu'est-ce qu'un endpoint dans une API ?",
  options: [
    "Un fichier de configuration",
    "Une URL spécifique à laquelle on peut envoyer une requête",
    "Une base de données",
    "Un middleware",
  ],
  reponse: "Une URL spécifique à laquelle on peut envoyer une requête",
  termeLie: "Endpoint",
},
{
  question: "Une API REST utilise obligatoirement le format XML pour ses réponses.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
  termeLie: "API REST",
},
{
  question: "Quel code HTTP indique que la ressource demandée n'existe pas ?",
  options: ["200", "301", "404", "500"],
  reponse: "404",
},
{
  question: "Un middleware Express s'exécute entre la requête et la réponse.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Middleware",
},
{
  question: "Que signifie l'acronyme ORM ?",
  options: [
    "Object-Relational Mapping",
    "Online Resource Manager",
    "Object Request Method",
    "Operational Route Module",
  ],
  reponse: "Object-Relational Mapping",
  termeLie: "ORM",
},
{
  question: "Un token JWT contient des informations encodées mais pas forcément chiffrées.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Token JWT",
},
{
  question: "Quelle méthode HTTP est utilisée pour supprimer une ressource ?",
  options: ["GET", "POST", "DELETE", "PUT"],
  reponse: "DELETE",
},
{
  question: "Node.js est mono-thread par défaut pour l'exécution du JavaScript.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quel package permet de gérer les variables d'environnement dans une app Node.js ?",
  options: ["dotenv", "cors", "express", "bcrypt"],
  reponse: "dotenv",
},
{
  question: "CORS sert à sécuriser les mots de passe stockés en base de données.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Quel package est couramment utilisé pour hacher les mots de passe en Node.js ?",
  options: ["bcrypt", "cors", "helmet", "morgan"],
  reponse: "bcrypt",
},
{
  question: "Sequelize est un ORM utilisé pour interagir avec des bases de données SQL en Node.js.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "ORM",
},
{
  question: "Quel code HTTP indique une erreur côté serveur ?",
  options: ["400", "401", "404", "500"],
  reponse: "500",
},
{
  question: "Une API RESTful doit être sans état (stateless) entre chaque requête.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quel package Express permet de gérer les logs des requêtes HTTP ?",
  options: ["morgan", "dotenv", "nodemon", "cors"],
  reponse: "morgan",
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

  bdd: [
    {
      question: "Quelle clause SQL filtre les résultats après un GROUP BY ?",
      options: ["WHERE", "HAVING", "FILTER", "ON"],
      reponse: "HAVING",
    },
    {
      question: "Une clé étrangère peut référencer la clé primaire d'une autre table.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
      termeLie: "Clé étrangère",
    },
    {
      question: "Quel type de jointure retourne uniquement les lignes correspondant dans les deux tables ?",
      options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
      reponse: "INNER JOIN",
      termeLie: "Jointure",
    },
    {
      question: "La normalisation d'une base de données vise à réduire la redondance des données.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
      termeLie: "Normalisation",
    },

    {
  question: "Qu'est-ce qu'une clé primaire ?",
  options: [
    "Une colonne qui peut contenir des doublons",
    "Une colonne qui identifie de façon unique chaque ligne",
    "Une colonne obligatoirement de type texte",
    "Une colonne calculée automatiquement",
  ],
  reponse: "Une colonne qui identifie de façon unique chaque ligne",
  termeLie: "Clé primaire",
},
{
  question: "Une base de données peut avoir plusieurs clés primaires sur une même table.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Quelle commande SQL permet de récupérer des données ?",
  options: ["GET", "SELECT", "FETCH", "READ"],
  reponse: "SELECT",
},
{
  question: "Une jointure permet de combiner des données de plusieurs tables.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Jointure",
},
{
  question: "Quelle commande SQL permet de modifier des données existantes ?",
  options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
  reponse: "UPDATE",
},
{
  question: "Un index accélère toujours l'écriture des données dans une table.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
  termeLie: "Index",
},
{
  question: "Que signifie l'acronyme ACID en base de données ?",
  options: [
    "Un type de requête SQL",
    "Les propriétés garantissant la fiabilité des transactions",
    "Un format de stockage",
    "Une norme de sécurité réseau",
  ],
  reponse: "Les propriétés garantissant la fiabilité des transactions",
},
{
  question: "La normalisation vise à réduire la redondance des données.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Normalisation",
},
{
  question: "Quelle clause SQL permet de trier les résultats ?",
  options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
  reponse: "ORDER BY",
},
{
  question: "Une clé étrangère peut référencer la clé primaire d'une autre table.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Clé étrangère",
},
{
  question: "Quel type de relation existe entre un client et ses commandes, en général ?",
  options: ["Un-à-un", "Un-à-plusieurs", "Plusieurs-à-plusieurs uniquement", "Aucune relation"],
  reponse: "Un-à-plusieurs",
},
{
  question: "Une transaction SQL peut être annulée avec la commande ROLLBACK.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Quelle commande permet de supprimer une table entière ?",
  options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"],
  reponse: "DROP TABLE",
},
{
  question: "DELETE et TRUNCATE ont exactement le même comportement sur une table.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Que fait la clause WHERE dans une requête SQL ?",
  options: [
    "Elle trie les résultats",
    "Elle filtre les lignes selon une condition",
    "Elle regroupe les résultats",
    "Elle limite le nombre de colonnes",
  ],
  reponse: "Elle filtre les lignes selon une condition",
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

  anglaisPro: [
    {
      question: "Comment dit-on 'cahier des charges' en anglais ?",
      options: ["Specifications", "Requirements document", "Deliverable", "Both A and B are used"],
      reponse: "Both A and B are used",
      termeLie: "Requirements",
    },
    {
      question: "'Deadline' signifie une réunion de suivi de projet.",
      options: ["Vrai", "Faux"],
      reponse: "Faux",
      termeLie: "Deadline",
    },
    {
      question: "Quel terme désigne un correctif rapide en anglais technique ?",
      options: ["Patch", "Release", "Rollback", "Sprint"],
      reponse: "Patch",
      termeLie: "Bug fix / Patch",
    },
    {
      question: "'Stakeholder' désigne une partie prenante d'un projet.",
      options: ["Vrai", "Faux"],
      reponse: "Vrai",
      termeLie: "Stakeholder",
    },

    {
  question: "Comment dit-on \"réunion\" en anglais professionnel ?",
  options: ["Meeting", "Reunion", "Gathering", "Assembly"],
  reponse: "Meeting",
},
{
  question: "\"Stakeholder\" désigne une partie prenante d'un projet.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Stakeholder",
},
{
  question: "Comment dit-on \"cahier des charges\" en anglais ?",
  options: ["Specifications / Requirements document", "Charge book", "Duty sheet", "Task list"],
  reponse: "Specifications / Requirements document",
  termeLie: "Requirements",
},
{
  question: "\"Deadline\" signifie une échéance ou une date limite.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
  termeLie: "Deadline",
},
{
  question: "Comment dit-on \"livrable\" en anglais professionnel ?",
  options: ["Deliverable", "Deliverance", "Delivery item", "Output file"],
  reponse: "Deliverable",
  termeLie: "Deliverable",
},
{
  question: "\"To fix a bug\" signifie créer un nouveau bug.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
  termeLie: "Bug fix / Patch",
},
{
  question: "Comment dit-on \"réunion de suivi\" en anglais ?",
  options: ["Follow-up meeting", "Tracking session", "Check event", "Report call"],
  reponse: "Follow-up meeting",
},
{
  question: "\"Feedback\" signifie un retour d'information ou un avis.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Comment dit-on \"entretien d'embauche\" en anglais ?",
  options: ["Job interview", "Hiring talk", "Work meeting", "Employment call"],
  reponse: "Job interview",
},
{
  question: "\"To scope a project\" signifie définir le périmètre d'un projet.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Comment dit-on \"CV\" en anglais britannique ?",
  options: ["Resume", "CV (Curriculum Vitae)", "Bio sheet", "Job sheet"],
  reponse: "CV (Curriculum Vitae)",
},
{
  question: "\"Onboarding\" désigne le processus de départ d'un employé.",
  options: ["Vrai", "Faux"],
  reponse: "Faux",
},
{
  question: "Comment dit-on \"lettre de motivation\" en anglais ?",
  options: ["Cover letter", "Motivation letter", "Application note", "Job letter"],
  reponse: "Cover letter",
},
{
  question: "\"Milestone\" désigne une étape clé dans un projet.",
  options: ["Vrai", "Faux"],
  reponse: "Vrai",
},
{
  question: "Comment dit-on \"compétences\" en anglais professionnel ?",
  options: ["Skills", "Competences", "Abilities only", "Knowledges"],
  reponse: "Skills",
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
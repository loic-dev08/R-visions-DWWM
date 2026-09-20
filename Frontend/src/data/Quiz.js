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
  ],
};
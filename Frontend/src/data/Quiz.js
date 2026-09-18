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
  ],
};
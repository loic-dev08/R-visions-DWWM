// data/Lexique.js

export const Lexique = {
    javascript: [
        { terme: "Closure", definition: "Fonction qui conserve l'accès aux variables de son contexte de création même que ce contexte a été détruit."},
        { terme: "Hoisting", definition: "Comportement JS qui remonte les déclarations de variables/fonctions en haut de leur portée avant éxécution."},
    ],

    bdd: [
        { terme: "Clé étrangère", definition: "Colonne qui référence la clé primaire d'une autre table pour établir une relation."},
    ],

    anglaisPro: [
        { terme: "Deadline", definition: "Date limite pour rendre un livrable."},
    ],

    // Front, Backend, HTML, CSS, à compléter pareil

    // data/lexique.js

  html: [
    { terme: "Sémantique", definition: "Utilisation de balises HTML qui décrivent le sens du contenu (ex : <nav>, <article>) plutôt que juste sa mise en forme." },
    { terme: "DOM", definition: "Document Object Model — représentation en arbre du document HTML manipulable en JavaScript." },
    { terme: "Attribut ARIA", definition: "Attribut ajouté au HTML pour améliorer l'accessibilité pour les lecteurs d'écran." },
    { terme: "Balise auto-fermante", definition: "Balise qui ne contient pas d'enfant et se ferme elle-même, comme <img /> ou <br />." },
  ],

  css: [
    { terme: "Spécificité", definition: "Règle qui détermine quelle déclaration CSS s'applique quand plusieurs règles ciblent le même élément." },
    { terme: "Flexbox", definition: "Modèle de mise en page CSS unidimensionnel pour aligner des éléments sur un axe (ligne ou colonne)." },
    { terme: "Grid", definition: "Modèle de mise en page CSS bidimensionnel pour organiser des éléments en lignes et colonnes." },
    { terme: "Media query", definition: "Règle CSS qui applique des styles différents selon les caractéristiques de l'écran (largeur, orientation...)." },
    { terme: "Box-sizing", definition: "Propriété qui définit si padding et border sont inclus dans la largeur/hauteur totale d'un élément." },
  ],

  javascript: [
    { terme: "Closure", definition: "Fonction qui conserve l'accès aux variables de son contexte de création même après que ce contexte a été détruit." },
    { terme: "Hoisting", definition: "Comportement JS qui remonte les déclarations de variables/fonctions en haut de leur portée avant exécution." },
    { terme: "Promise", definition: "Objet représentant l'issue future (réussie ou échouée) d'une opération asynchrone." },
    { terme: "Callback", definition: "Fonction passée en argument à une autre fonction, exécutée après un traitement ou un événement." },
    { terme: "Destructuring", definition: "Syntaxe permettant d'extraire des valeurs d'un tableau ou d'un objet dans des variables distinctes." },
    { terme: "Spread operator", definition: "Opérateur (...) qui déploie les éléments d'un tableau ou les propriétés d'un objet." },
  ],

  frontend: [
    { terme: "Composant", definition: "Bloc réutilisable d'interface, indépendant, qui encapsule sa logique et son rendu." },
    { terme: "Props", definition: "Données passées d'un composant parent à un composant enfant, en lecture seule." },
    { terme: "State", definition: "Donnée interne à un composant qui déclenche un re-render quand elle change." },
    { terme: "Virtual DOM", definition: "Représentation en mémoire du DOM utilisée par React pour optimiser les mises à jour réelles du DOM." },
    { terme: "Hook", definition: "Fonction spéciale (useState, useEffect...) permettant d'utiliser l'état et d'autres fonctionnalités React dans un composant fonctionnel." },
  ],

  backend: [
    { terme: "API REST", definition: "Interface qui expose des ressources via des URL et des méthodes HTTP standard (GET, POST, PUT, DELETE)." },
    { terme: "Middleware", definition: "Fonction qui s'exécute entre la requête et la réponse dans un serveur, pour du traitement intermédiaire (auth, logs...)." },
    { terme: "ORM", definition: "Object-Relational Mapping — outil qui permet de manipuler une base de données via des objets plutôt que du SQL brut (ex : Sequelize)." },
    { terme: "Endpoint", definition: "URL spécifique d'une API à laquelle on peut envoyer une requête." },
    { terme: "Token JWT", definition: "Jeton signé utilisé pour authentifier un utilisateur sans session côté serveur." },
  ],

  bdd: [
    { terme: "Clé primaire", definition: "Colonne (ou ensemble de colonnes) qui identifie de façon unique chaque ligne d'une table." },
    { terme: "Clé étrangère", definition: "Colonne qui référence la clé primaire d'une autre table pour établir une relation." },
    { terme: "Normalisation", definition: "Processus d'organisation des données pour réduire la redondance et améliorer l'intégrité." },
    { terme: "Jointure", definition: "Opération SQL qui combine des lignes de deux tables ou plus sur la base d'une colonne commune." },
    { terme: "Index", definition: "Structure qui accélère la recherche de données dans une table, au prix d'un espace de stockage supplémentaire." },
  ],

  anglaisPro: [
    { terme: "Deadline", definition: "Date limite pour rendre un livrable." },
    { terme: "Stakeholder", definition: "Partie prenante ayant un intérêt dans le projet (client, manager, utilisateur...)." },
    { terme: "Requirements", definition: "Exigences ou besoins fonctionnels/techniques d'un projet." },
    { terme: "Deliverable", definition: "Livrable — élément concret produit et remis dans le cadre d'un projet." },
    { terme: "Bug fix / Patch", definition: "Correction apportée à un dysfonctionnement du logiciel." },
  ],
};


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
  ],

  frontend: [
    {
      enonce: "Écris un composant React simple Bouton qui affiche un texte reçu en prop et log \"Cliqué\" dans la console au clic.",
      correction: `function Bouton({ texte }) {
  return <button onClick={() => console.log("Cliqué")}>{texte}</button>;
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
  ],
};
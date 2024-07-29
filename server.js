// Fichier de lancement de mon serveur
// Fichier de configuration du serveur

const express = require('express');
// Instanciation du serveur Express (on initialise un nouveau serveur Express et on le place dans une variable "app")
const app = express();
const port = 3000;

// Initialisation du moteur de rendu
app.set('views', './app/views'); // Indication du dossier contenant les fichiers .ejs
app.set('view engine', 'ejs'); // Indication du moteur de rendu (nous utilisons EJS)


/************************************************/
/*** Mise en place de la gestion des requêtes ***/
/************************************************/

// public
// /css/style.css
app.use(express.static('public'));

// Import du router
const router = require("./app/router.js");
// Association de mon router avec mon serveur Express
app.use(router);

/************************************************/
/************************************************/
/************************************************/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
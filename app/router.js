// Fichier de routage
// gestion des URLs
const controller = require("./controller.js");
const helperModule = require("./helper.js");

// Instanciation d'un Router Express
const { Router } = require('express');
const router = Router();

// middleware that is specific to this router
router.use(helperModule.log);

// middleware qui initialise la liste des jeux (pour les vues)
const games = require("../games.json");
router.use((req,res,next)=>{
    res.locals.games = games;
    
    next();
});

// Cette route va répondre favorable à une requête sur "/" avec le verbe http "get"
router.get('/',controller.displayHomepage);
router.get('/game/:name', controller.displayGame);

// Gestion de la 404
// Aucune réponse n'a été apportée à la requête
router.use(helperModule.notFound);

module.exports = router;
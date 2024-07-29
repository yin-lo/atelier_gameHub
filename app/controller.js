// Fichier qui retourne la réponse
// Couche logique ou couche business
// Un controller va être responsable de retourner la réponse à une requête dans le cas où tout va bien
// c'est ici que nous allons placer "l'intelligence de notre code"

const controller = {
    displayHomepage(req, res) {
        res.render("index");
    },
    displayGame(req, res, next) {
        // Quel jeu dois-je afficher ?
        const gameName = req.params.name;
        //console.log(gameName);

        // Récupération du jeu dans la liste de jeux
        const foundGame = res.locals.games.find(game => game.name == gameName);

        // Si je n'ai pas trouvé le jeu, alors je retourne une 404
        if (!foundGame) {
            next(); // je passe au middleware suivant
            //return; // je quitte la fonction (attention le return; est nécessaire ici car le next() ne fait pas quitter la fonction)
        }
        else {
            // Les locals permettent d'envoyer des informations à la vue
            // Les locals ne servent qu'à envoyer des informations à une vue
            // à la base "res.locals" est un objet vide {}
            res.locals.game = foundGame;
            // res.locals va donner { game : "diceRoller" }
            // console.log(res.locals);

            res.render("game");
        }
    }
};

module.exports = controller;
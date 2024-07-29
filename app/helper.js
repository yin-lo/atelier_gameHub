// Ce fichier n'est pas un controller
// Ce fichier va contenir des méthodes utilitaires

const helperModule = {
    notFound(_,res){
        res.status(404).render("404");
    },
    log(req, res, next){
        console.log(`[${new Date().toISOString()} ${req.ip}] ${req.path}`);
      
        // on passe au middleware suivant
        next();
    }
};

module.exports = helperModule;
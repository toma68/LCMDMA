

const TokenController = require('../src/controllers/token.controller');
const UserService = require('../src/services/user.service');


const authVerify = function authVerify(authRequired) {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            TokenController.verifyToken(token, req.ip).then((token) => {
                if (token != null && token.length > 0) {
                    UserService.findById(token[0].userId).then((user) => {

                        if (user) {
                            console.log("User authentifié : " + user.login)
                            console.log("COMPARAISON DES ROLES : " + user.roleId + " VS " + authRequired);
                            if (user.roleId >= authRequired) {
                                next();
                            } else {
                                res.status(401).json({ error: 'Unauthorized' });
                            }
                        } else {
                            console.log("User non trouvé")
                            res.status(401).json({ error: 'Unauthorized' });
                        }
                    }).catch(error => res.status(500).json({ "error": error, message: "Erreur lors de la récupération de l'utilisateur" }));
                } else {
                    console.log("Token non trouvé");
                    res.status(401).json({ error: 'Unauthorized' });
                }
            });


        } //recuperer l'erreur et l'envoyer
        catch (error) {
            res.status(401).json({error: error | 'Requête non authentifiée !'});
        }
    }
}

module.exports = authVerify;

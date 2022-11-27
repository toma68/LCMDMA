const User = require('../models/User.model');
const TokenController = require('./token.controller');

const bcrypt = require('bcrypt');

exports.login = (req, res) => {
    User.findOne({ login: req.body.login }).
        then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password).
                then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        token: TokenController.createToken(user.id, req.ip),
                        userId: user.id,
                        userRole: user.roleId
                    });
                }).catch(error => res.status(500).json({ error }));
        }).catch(error => res.status(500).json({ error }));
}


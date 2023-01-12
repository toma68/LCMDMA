const User = require('../models/user.model');
const infoPrestataire = require('../models/infoPrestataire.model');
const TokenController = require('./token.controller');

const bcrypt = require('bcrypt');
const {where} = require("sequelize");

exports.login = (req, res) => {
    User.findOne({where: {login: req.body.login}})
        .then(user => {
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(500).json({error, message: 'Mot de passe invalide !'});
                    }
                    res.status(200).json({
                        token: TokenController.createToken(user.id, req.ip),
                        userId: user.id,
                        userRole: user.roleId
                    })
                }).catch(error => res.status(500).json({error, message: 'Mot de passe invalide !'}));
        }).catch(error => res.status(500).json({error, message: 'Utilisateur invalide !'}));
}

exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        User.create({
            login: req.body.login,
            password: hash,
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            roleId: 1,
        })
            .then(user => {
                if (req.body.siret) {
                    infoPrestataire.create({
                        userId: user.id,
                        numeroSiret: req.body.siret,
                        nomEntreprise: req.body.nomEntreprise,
                        description: req.body.description,
                        contenuPage: req.body.description
                    }).then(() => {
                        res.status(201).json({message: 'Prestataire créé, veuillez attendre la validation d\'un administrateur !'});
                    }).catch(
                        error => res.status(500).json({error: error, message: 'Numéro SIRET déjà utilisé !'})
                    );
                }
                else {
                    res.status(201).json({message: 'Utilisateur créé !'});
                }
            }).catch(error => res.status(500).json({error, message: 'Login déjà utilisé !'}));
    }).catch(error => res.status(500).json({error, message: 'Erreur, veuillez reessayer !'}));
}


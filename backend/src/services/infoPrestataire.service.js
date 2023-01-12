const InfoPrestataire = require('../models/infoPrestataire.model');
const User = require("../models/user.model");
const Activite = require("../models/activite.model");
const Services = require("../models/services.model");


const findAll = () => InfoPrestataire.findAll({
    order: [
        ['userId']
    ],
});

const findById = (id) => InfoPrestataire.findOne({
    where: {userId: id},
    include: [
        {
            model: User,
            attributes: ['id', 'nom', 'prenom']
        },
        {
            model: Activite,
            attributes: ['id', 'nom', 'heureDebut', 'heureFin', 'description'],

        },
        {
            model: Services,
        }
    ]
});


const deleteByid = (id) => InfoPrestataire.destroy({where: {numeroSiret: id}});


const create = (infoPrestataire) => {
    var newInfoPrestataire = new InfoPrestataire(infoPrestataire);
    return newInfoPrestataire.save();
};

const update = (id, infoPrestataire) => {
    if  (infoPrestataire.contenuPage) {
        infoPrestataire.contenuPage = infoPrestataire.contenuPage.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    }
    return InfoPrestataire.update(infoPrestataire, {where: {userId: id}});
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update
};


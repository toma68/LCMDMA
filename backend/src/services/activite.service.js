const Activite = require('../models/activite.model');
const organise = require('../models/organise.model');
const infoPrestataire = require('../models/infoPrestataire.model');
const {Sequelize} = require("sequelize");

const findAll = () => Activite.findAll();

const findById = (id) => Activite.findByPk(id);

const deleteByid = (id) => Activite.destroy({where: {id: id}});


const create = (activite) => {
    var newActivite = new Activite(activite);
    return newActivite.save();
};

const update = (id, activite) => {
    var updateActivite = {
        nom: activite.nom,
        heureDebut: activite.heureDebut,
        heureFin: activite.heureFin,
        description: activite.description
    }
    return Activite.update(updateActivite, {where: {id: id}});
}

// requete en version sql : SELECT a.nom as nom_activite, a."heureDebut", a."heureFin", iP.description as Stand FROM activites a JOIN organise o on a.id = o."activiteId" JOIN "infoPrestataires" iP on iP."numeroSiret" = o."infoPrestataireNumeroSiret"
const activiteStand = () => {
    return Activite.findAll({
    attributes: ['nom', 'heureDebut', 'heureFin', 'description'],
        include: [
            {
                model: organise,
                as: 'organise',
                attributes: [],
                required: true,
                where: { activiteId: Sequelize.col('activite.id') },
                include: [
                    {
                        model: infoPrestataire,
                        as: 'infoPrestataires',
                        attributes: ['description'],
                        required: true,
                        where: { numeroSiret: Sequelize.col('organise.infoPrestataireNumeroSiret') }
                    }
                ]
            }
        ],
        raw: true
    });
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update,
    activiteStand
};


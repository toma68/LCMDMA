const Activite = require('../models/activite.model');
const infoPrestataire = require('../models/infoPrestataire.model');
const User = require('../models/user.model');

const findAll = () => Activite.findAll({
    include: [{
        model: infoPrestataire,
    }]
});

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

const activiteStand = () => {
    return Activite.findAll({
        attributes: ['nom', 'heureDebut', 'heureFin'],
        include: [{
            model: infoPrestataire,
            attributes: ['description'],
        }]
    });
}

const activiteByPrestataire = (id) => {
    return Activite.findAll({
        include: [{
            model: infoPrestataire,
            where: {userId: id},
        },
            {
                all: true
            }]
    });
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update,
    activiteStand,
    activiteByPrestataire
};


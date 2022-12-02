const InfoPrestataire = require('../models/infoPrestataire.model');

const findAll = () => InfoPrestataire.findAll();

const findById = (id) => InfoPrestataire.findByPk(id);

const deleteByid = (id) => InfoPrestataire.destroy({where: {id: id}});


const create = (infoPrestataire) => {
    var newInfoPrestataire = new InfoPrestataire(infoPrestataire);
    return newInfoPrestataire.save();
};

const update = (id, infoPrestataire) => {
    var updateInfoPrestataire = {
        numeroSiret: infoPrestataire.numeroSiret,
        userId: infoPrestataire.userId,
        contenuPage: infoPrestataire.contenuPage,
        pageMasque: infoPrestataire.pageMasque,
        nomEntreprise: infoPrestataire.nomEntreprise,
        infoPrestataire: infoPrestataire.infoPrestataire
    }
    return InfoPrestataire.update(updateInfoPrestataire, {where: {id: id}});
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update
};


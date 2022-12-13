const InfoPrestataire = require('../models/infoPrestataire.model');

const findAll = () => InfoPrestataire.findAll();

const findById = (id) => InfoPrestataire.findByPk(id);

const deleteByid = (id) => InfoPrestataire.destroy({where: {numeroSiret: id}});


const create = (infoPrestataire) => {
    var newInfoPrestataire = new InfoPrestataire(infoPrestataire);
    return newInfoPrestataire.save();
};

const update = (id, infoPrestataire) => {
    var updateInfoPrestataire = {
        userId: infoPrestataire.userId,
        contenuPage: infoPrestataire.contenuPage,
        pageMasque: infoPrestataire.pageMasque,
        nomEntreprise: infoPrestataire.nomEntreprise,
        description: infoPrestataire.description
    }
    return InfoPrestataire.update(updateInfoPrestataire, {where: {numeroSiret: id}});
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update
};


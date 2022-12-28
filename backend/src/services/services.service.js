const Services = require('../models/services.model');
const Offre = require('../models/offre.model');

const findAll = () => Services.findAll();

const findById = (id) => Services.findByPk(id);


const update = (numeroSiret, service,bool) => {
    //ajout d'une ligne dans la table de jointure entre services et prestataires
    if (bool) {
        return Offre.create({
            infoPrestataireNumeroSiret: numeroSiret,
            serviceId: service
        })}
    //suppression d'une ligne dans la table de jointure entre services et prestataires
    else {
        return Offre.destroy({
            where: {
                infoPrestataireNumeroSiret: numeroSiret,
                serviceId: service
            }
        })
    }
}

module.exports = {
    findAll,
    findById,
    update
}
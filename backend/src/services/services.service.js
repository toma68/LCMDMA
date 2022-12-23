const Services = require('../models/services.model');


const findAll = () => Services.findAll();

const findById = (id) => Services.findByPk(id);


const update = (id, service) => {
    var updateService = {
        id: service.id,
        libelle: service.libelle,
        prix: service.prix
    }
    return Services.update(updateService, {where: {id: id}});
}

module.exports = {
    findAll,
    findById,
    update
}
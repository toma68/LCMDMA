const TarifService = require('../models/tarif.model');

const findAll = () => TarifService.findAll();

const findById = (id) => TarifService.findByPk(id);

const deleteByid = (id) => TarifService.destroy({where: {id: id}});

const create = (tarif) => {
    var newTarif = new TarifService(tarif);
    return newTarif.save();
}

const update = (id, tarif) => {
    var updateTarif = {
        id: tarif.id,
        libelle: tarif.libelle,
        prix: tarif.prix
    }
    return TarifService.update(updateTarif, {where: {id: id}});
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update
}
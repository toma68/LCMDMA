const Stand = require('../models/stand.model');

const findAll = () => Stand.findAll();

const findById = (id) => Stand.findByPk(id);

const deleteByid = (id) => Stand.destroy({where: {id: id}});

const create = (stand) => {
    var newStand = new Stand(stand);
    return newStand.save();
}

const update = (id, stand) => {
    var updateStand = {
        surface: stand.surface,
        logistique: stand.logistique
    }
    return Stand.update(updateStand, {where: {id: id}});
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update
}
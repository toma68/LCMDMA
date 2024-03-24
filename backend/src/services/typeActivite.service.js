const TypeActiviteModel = require('../models/typeActivite.model');

const findAll = () => TypeActiviteModel.findAll();

const findById = (id) => TypeActiviteModel.findByPk(id);

const deleteByid = (id) => TypeActiviteModel.destroy({where: {id: id}});

const create = (typeActivite) => {
    var newTypeActivite = new TypeActiviteModel(typeActivite);
    return newTypeActivite.save();
}

const update = (id, typeActivite) => {
    var updateTypeActivite = {
        libelle: typeActivite.libelle
    }
    return TypeActiviteModel.update(updateTypeActivite, {where: {id: id}});
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update
}
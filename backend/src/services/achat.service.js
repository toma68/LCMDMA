const Achat = require('../models/achat.model');

const findAll = () => Achat.findAll();

const findById = (id) => Achat.findByPk(id);

const deleteByid = (id) => Achat.destroy({where: {id: id}});

const create = (achat) => {
    var newAchat = new Achat(achat);
    return newAchat.save();
}

const update = (id, achat) => {
    var updateAchat = {
        id: achat.id,
        tarifId: achat.tarifId,
        dateAchat: achat.dateAchat,
        qrCode: achat.qrCode
    }
    return Achat.update(updateAchat, {where: {id: id}});
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update
}
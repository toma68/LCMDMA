const Achat = require('../models/achat.model');

const findAll = () => Achat.findAll();

const findById = (id) => Achat.findByPk(id);

const deleteByid = (id) => Achat.destroy({where: {id: id}});

const create = (achat) => {
    //achat = [{id:1, quantite:2}, {id:2, quantite:3}]
    var achats = [];
    for (var i = 0; i < achat.length; i++) {
        achats.push({
            tarifId: achat[i].id,
            dateAchat: new Date(),
            qrCode: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            quantite: achat[i].quantite
        });
    }
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
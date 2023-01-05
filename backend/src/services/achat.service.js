const Achat = require('../models/achat.model');
const Token = require('../controllers/token.controller');

const findAll = () => Achat.findAll();

const findById = (id) => Achat.findByPk(id);

const deleteByid = (id) => Achat.destroy({where: {id: id}});

const create = async (achat, token,ip) => {
    //achat = [{id:1, quantite:2}, {id:2, quantite:3}]
    var achats = [];
    userId = await Token.verifyToken(token,ip).then((token) => {
        return token[0].userId;
    });
    for (var i = 0; i < achat.length; i++) {
        achats.push({
            tarifId: achat[i].id,
            dateAchat: new Date(),
            qrCode: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            available: achat[i].quantite,
            userId:  userId
        });
    }

    return Achat.bulkCreate(achats);
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

const findByUserId = (id) => Achat.findAll({where: {userId: id}, include: ['tarif']});

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update,
    findByUserId
}
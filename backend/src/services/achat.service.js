const Achat = require('../models/achat.model');
const Token = require('../controllers/token.controller');

const findAll = () => Achat.findAll({include: [{all:true}]});

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
            quantite: achat[i].quantite,
            userId:  userId
        });
    }

    return Achat.bulkCreate(achats);
}

const update = (id, achat) => {
    return Achat.update(achat, {where: {id: id}});
}

const findByUserId = (id) => Achat.findAll({where: {userId: id}, include: ['tarif']});

const findAchatByQrCode = (qrCode) => Achat.findOne({where: {qrCode: qrCode}, include: ['user','tarif']});

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update,
    findByUserId,
    findAchatByQrCode}
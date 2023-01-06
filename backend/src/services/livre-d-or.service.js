const LivreDOrMessages = require('../models/livre-d-or.model');
const User = require("../models/user.model");
const {INTEGER} = require("sequelize");

const findAll = () => LivreDOrMessages.findAll();

const findById = (receiverSiret) => LivreDOrMessages.findAll({
    where: {receiverSiret: receiverSiret},
    order: [
        ['dateCreation', 'DESC']
    ],
    include: [{
        model: User,
        attributes: ['id', 'nom', 'prenom', 'roleId']

    }]
});

const deleteByid = (posterid, receiverid) => LivreDOrMessages.destroy({
    where: {
        posterId: posterid, receiverSiret: receiverid
    }
});

const create = (livreDOrMessage) => {
    livreDOrMessage.contenuMessage = livreDOrMessage.contenuMessage.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    let newLivreDOrMessage = new LivreDOrMessages(livreDOrMessage);
    return newLivreDOrMessage.save();
}

const update = (posterid, receiverid, livreDOrMessage) => {
    livreDOrMessage.contenuMessage = livreDOrMessage.contenuMessage.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    return LivreDOrMessages.update(livreDOrMessage, {where: {posterId: posterid, receiverSiret: receiverid}});
}

module.exports = {
    findAll, findById, deleteByid, create, update
};
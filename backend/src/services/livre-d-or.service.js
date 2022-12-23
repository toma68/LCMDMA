const LivreDOrMessages = require('../models/livre-d-or.model');

const findAll = () => LivreDOrMessages.findAll();

const findById = (posterid, receiverid) => LivreDOrMessages.findOne({
    where: {
        posterId: posterid, receiverId: receiverid
    }
});

const deleteByid = (posterid, receiverid) => LivreDOrMessages.destroy({
    where: {
        posterId: posterid, receiverId: receiverid
}
    });

const create = (id, livreDOrMessage) => {
    livreDOrMessage.contenuMessage = livreDOrMessage.contenuMessage.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    let newLivreDOrMessage = new LivreDOrMessages({
        contenuMessage: livreDOrMessage.contenuMessage,
        noteMessage: livreDOrMessage.noteMessage,
        posterId: id,
        receiverId: livreDOrMessage.receiverId,
        dateCreation: new Date(),
        dateModification: new Date()
    });
    return newLivreDOrMessage.save();
}

const update = (posterid, receiverid, livreDOrMessage) => {
    livreDOrMessage.contenuMessage = livreDOrMessage.contenuMessage.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    return LivreDOrMessages.update(livreDOrMessage, {where: {posterId: posterid, receiverId: receiverid}});
}

module.exports = {
    findAll, findById, deleteByid, create, update
};
const LivreDOrService = require('../services/livre-d-or.service');
const {getUserByToken} = require("./token.controller");

const getAllLivreDOrMessages = (req, res) => {
    LivreDOrService.findAll().then((livreDOrMessages) => {
        res.status(200).json(livreDOrMessages);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getLivreDOrMessageById = (req, res) => {
    let receiverid = req.params.id;
    LivreDOrService.findById(receiverid).then((livreDOrMessage) => {
        res.status(200).json(livreDOrMessage);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const deleteLivreDOrMessageById = (req, res) => {
    let posterid = getUserByToken(req.headers.authorization.split(' ')[1]).id;
    let receiverid = req.body.receiverid;
    LivreDOrService.deleteByid(posterid,receiverid).then((livreDOrMessage) => {
        res.status(200).json(livreDOrMessage);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const createLivreDOrMessage = async (req, res) => {
    let livreDOrMessage = req.body;
    livreDOrMessage.posterId = await getUserByToken(req.headers.authorization.split(' ')[1])
    livreDOrMessage = {
        contenuMessage: livreDOrMessage.contenuMessage,
        noteMessage: livreDOrMessage.noteMessage,
        posterId: livreDOrMessage.posterId.userId,
        receiverSiret: parseInt(livreDOrMessage.prestataire),
        dateCreation: new Date(),
        dateModification: new Date()
    }
    LivreDOrService.create(livreDOrMessage).then((livreDOrMessage) => {
        res.status(200).json(livreDOrMessage);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const updateLivreDOrMessage = (req, res) => {
    let posterid = getUserByToken(req.headers.authorization.split(' ')[1]).id;
    let receiverid = req.body.receiverid;
    let livreDOrMessage = req.body;
    LivreDOrService.update(posterid, receiverid, livreDOrMessage).then((livreDOrMessage) => {
        res.status(200).json(livreDOrMessage);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllLivreDOrMessages,
    getLivreDOrMessageById,
    deleteLivreDOrMessageById,
    createLivreDOrMessage,
    updateLivreDOrMessage
}
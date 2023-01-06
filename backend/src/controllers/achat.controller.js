const AchatService = require('../services/achat.service');

const getAllAchats = (req, res) => {
    AchatService.findAll().then((achats) => {
        res.status(200).json(achats);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getAchatById = (req, res) => {
    let id = req.params.id;
    AchatService.findById(id).then((achat) => {
        res.status(200).json(achat);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const deleteAchatById = (req, res) => {
    let id = req.params.id;
    AchatService.deleteByid(id).then((achat) => {
        res.status(200).json(achat);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const createAchat = (req, res) => {
    let achat = req.body;
    AchatService.create(achat,req.headers.authorization.split(' ')[1], req.ip).then((achat) => {
        res.status(200).json(achat);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const updateAchat = (req, res) => {
    let id = req.params.id;
    let achat = req.body;
    AchatService.update(id, achat).then((achat) => {
        res.status(200).json(achat);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const getAchatsByUserId = (req, res) => {
    let id = req.params.id;
    AchatService.findByUserId(id).then((achat) => {
        res.status(200).json(achat);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const getAchatByQrCode = (req, res) => {
    let code = req.params.code;
    console.log("1")
    AchatService.findAchatByQrCode(code).then((achat) => {
        res.status(200).json(achat);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllAchats,
    getAchatById,
    deleteAchatById,
    createAchat,
    updateAchat,
    getAchatsByUserId,
    getAchatByQrCode
}
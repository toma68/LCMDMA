const InfoPrestataireController = require('../controllers/infoPrestataire.controller');

const GetAllInfoPrestataires = (req, res) => {
    InfoPrestataireController.findAll().then((infoPrestataires) => {
        res.status(200).json(infoPrestataires);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const GetInfoPrestataireById = (req, res) => {
    let id = req.params.id;
    InfoPrestataireController.findById(id).then((infoPrestataire) => {
        res.status(200).json(infoPrestataire);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const DeleteInfoPrestataireById = (req, res) => {
    let id = req.params.id;
    InfoPrestataireController.deleteByid(id).then((infoPrestataire) => {
        res.status(200).json(infoPrestataire);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const CreateInfoPrestataire = (req, res) => {
    let infoPrestataire = req.body;
    InfoPrestataireController.create(infoPrestataire).then((infoPrestataire) => {
        res.status(200).json(infoPrestataire);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const UpdateInfoPrestataire = (req, res) => {
    let id = req.params.id;
    let infoPrestataire = req.body;
    InfoPrestataireController.update(id, infoPrestataire).then((infoPrestataire) => {
        res.status(200).json(infoPrestataire);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    GetAllInfoPrestataires,
    GetInfoPrestataireById,
    DeleteInfoPrestataireById,
    CreateInfoPrestataire,
    UpdateInfoPrestataire
}
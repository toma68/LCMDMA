const InfoPrestataireController = require('../services/infoPrestataire.service');

const getAllInfoPrestataires = (req, res) => {
    InfoPrestataireController.findAll().then((infoPrestataires) => {
        res.status(200).json(infoPrestataires);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getInfoPrestataireById = (req, res) => {
    let id = req.params.id;
    InfoPrestataireController.findById(id).then((infoPrestataire) => {
        res.status(200).json(infoPrestataire);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const deleteInfoPrestataireById = (req, res) => {
    let id = req.params.id;
    InfoPrestataireController.deleteByid(id).then((infoPrestataire) => {
        res.status(200).json(infoPrestataire);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const createInfoPrestataire = (req, res) => {
    let infoPrestataire = req.body;
    InfoPrestataireController.create(infoPrestataire).then((infoPrestataire) => {
        res.status(200).json(infoPrestataire);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const updateInfoPrestataire = (req, res) => {
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
    getAllInfoPrestataires: getAllInfoPrestataires,
    getInfoPrestataireById: getInfoPrestataireById,
    deleteInfoPrestataireById: deleteInfoPrestataireById,
    createInfoPrestataire: createInfoPrestataire,
    updateInfoPrestataire: updateInfoPrestataire
}
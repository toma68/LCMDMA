const ActiviteService = require('../services/activite.service.js');

const getAllActivites = (req, res) => {
    ActiviteService.findAll().then((activites) => {
        res.status(200).json(activites);
    }).catch((err) => {
        res.status(500).json(err);
    });
};

const getActiviteById = (req, res) => {
    let id = req.params.id;
    ActiviteService.findById(id).then((activite) => {
        res.status(200).json(activite);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
};

const deleteActiviteById = (req, res) => {
    let id = req.params.id;
    ActiviteService.deleteByid(id).then((activite) => {
        res.status(200).json(activite);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
};

const createActivite = (req, res) => {
    let activite = req.body;
    ActiviteService.create(activite).then((activite) => {
        res.status(200).json(activite);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const updateActivite = (req, res) => {
    let id = req.params.id;
    let activite = req.body;
    ActiviteService.update(id, activite).then((activite) => {
        res.status(200).json(activite);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const getActiviteStand = (req, res) => {
    ActiviteService.activiteStand().then((activites) => {
        res.status(200).json(activites);
    }).catch((err) => {
        res.status(500).json(err);
    });
};

const getActiviteByPrestataire = (req, res) => {
    let id = req.params.id;
    ActiviteService.activiteByPrestataire(id).then((activites) => {
        res.status(200).json(activites);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllActivites,
    getActiviteById,
    deleteActiviteById,
    createActivite,
    updateActivite,
    getActiviteStand,
    getActiviteByPrestataire
}
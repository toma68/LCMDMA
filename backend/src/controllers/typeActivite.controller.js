const typeActiviteService = require('../services/typeActivite.service');

const getAllTypeActivites = (req, res) => {
    typeActiviteService.findAll().then((typeActivites) => {
        res.status(200).json(typeActivites);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getTypeActiviteById = (req, res) => {
    let id = req.params.id;
    typeActiviteService.findById(id).then((typeActivite) => {
        res.status(200).json(typeActivite);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const deleteTypeActiviteById = (req, res) => {
    let id = req.params.id;
    typeActiviteService.deleteByid(id).then((typeActivite) => {
        res.status(200).json(typeActivite);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const createTypeActivite = (req, res) => {
    let typeActivite = req.body;
    typeActiviteService.create(typeActivite).then((typeActivite) => {
        res.status(200).json(typeActivite);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const updateTypeActivite = (req, res) => {
    let id = req.params.id;
    let typeActivite = req.body;
    typeActiviteService.update(id, typeActivite).then((typeActivite) => {
        res.status(200).json(typeActivite);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllTypeActivites,
    getTypeActiviteById,
    deleteTypeActiviteById,
    createTypeActivite,
    updateTypeActivite
}
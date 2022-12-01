const TarifService = require('../services/tarif.service');

const getAllTarifs = (req, res) => {
    TarifService.findAll().then((tarifs) => {
        res.status(200).json(tarifs);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getTarifById = (req, res) => {
    let id = req.params.id;
    TarifService.findById(id).then((tarif) => {
        res.status(200).json(tarif);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const deleteTarifById = (req, res) => {
    let id = req.params.id;
    TarifService.deleteByid(id).then((tarif) => {
        res.status(200).json(tarif);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const createTarif = (req, res) => {
    let tarif = req.body;
    TarifService.create(tarif).then((tarif) => {
        res.status(200).json(tarif);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const updateTarif = (req, res) => {
    let id = req.params.id;
    let tarif = req.body;
    TarifService.update(id, tarif).then((tarif) => {
        res.status(200).json(tarif);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllTarifs,
    getTarifById,
    deleteTarifById,
    createTarif,
    updateTarif

}
const StandService = require('../services/stand.service.js');

const getAllStands = (req, res) => {
    StandService.findAll().then((stands) => {
        res.status(200).json(stands);
    }).catch((err) => {
        res.status(500).json(err);
    });
};

const getStandById = (req, res) => {
    let id = req.params.id;
    StandService.findById(id).then((stand) => {
        res.status(200).json(stand);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const deleteStandById = (req, res) => {
    let id = req.params.id;
    StandService.deleteByid(id).then((stand) => {
        res.status(200).json(stand);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const createStand = (req, res) => {
    let stand = req.body;
    StandService.create(stand).then((stand) => {
        res.status(200).json(stand);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const updateStand = (req, res) => {
    let id = req.params.id;
    let stand = req.body;
    StandService.update(id, stand).then((stand) => {
        res.status(200).json(stand);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllStands,
    getStandById,
    deleteStandById,
    createStand,
    updateStand
}


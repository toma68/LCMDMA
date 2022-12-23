const ServicesService = require('../services/services.service');

const updateServices = (req, res) => {
    let id = req.params.id;
    let services = req.body;
    ServicesService.update(id, services).then((services) => {
        res.status(200).json(services);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const getServicesById = (req, res) => {
    let id = req.params.id;
    ServicesService.findById(id).then((services) => {
        res.status(200).json(services);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const getAllServices = (req, res) => {
    ServicesService.findAll().then((services) => {
        res.status(200).json(services);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllServices,
    getServicesById,
    updateServices
}
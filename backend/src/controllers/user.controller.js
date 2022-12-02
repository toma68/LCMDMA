const UserService = require('../services/user.service');

const getAllUsers = (req, res) => {
    UserService.findAll().then((users) => {
        res.status(200).json(users);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getUserById = (req, res) => {
    let id = req.params.id;
    UserService.findById(id).then((user) => {
        res.status(200).json(user);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const deleteUserById = (req, res) => {
    let id = req.params.id;
    UserService.deleteByid(id).then((user) => {
        res.status(200).json(user);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const createUser = (req, res) => {
    let user = req.body;
    UserService.create(user).then((user) => {
        res.status(200).json(user);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

const updateUser = (req, res) => {
    let id = req.params.id;
    let user = req.body;
    UserService.update(id, user).then((user) => {
        res.status(200).json(user);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    createUser,
    updateUser
}
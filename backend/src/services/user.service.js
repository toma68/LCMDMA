const UserService = require('../models/user.model');

const findAll = () => UserService.findAll({include: [{all:true}]});

const findById = (id) => UserService.findByPk(id);

const deleteByid = (id) => UserService.destroy({where: {id: id}});

const create = (user) => {
    var newUser = new UserService(user);
    return newUser.save();
}

const update = (id, user) => {
    var updateUser = {
        id: user.id,
        login: user.login,
        password: user.password,
        roleId: user.roleId,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email
    }
    return UserService.update(updateUser, {where: {id: id}});
}

module.exports = {
    findAll,
    findById,
    deleteByid,
    create,
    update
}
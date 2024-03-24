const Token = require('../models/token.model');
const {Op} = require("sequelize");

exports.createToken = (id, ip) => {
    const newToken = new Token({
        token: Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2),
        userId: id,
        ip: ip,
        dateCreation: Date.now(),
        dateExpiration: Date.now() + 3600000
    });
    newToken.save().then();
    return newToken.token;
}
async function verifyToken(token, ip) {
    if (token == undefined) {
        return null;
    }
    try {
        return Token.findAll(
            {
                where: {
                    token: token,
                    ip: ip,

                    dateExpiration: {
                        [Op.gt]: Date.now()
                    }
                }
            }
        );
    } catch (e) {
        return null;
    }
}

async function getUserByToken(token) {
    return Token.findOne({
        where: {
            token: token
        }
    });

}

exports.verifyToken = verifyToken;
exports.getUserByToken = getUserByToken;
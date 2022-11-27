const Token = require('../models/token.model');

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


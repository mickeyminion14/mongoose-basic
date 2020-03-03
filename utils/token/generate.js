const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
    console.log(payload);

    return jwt.sign(payload.toJSON(), "sarthak");
}

module.exports = generateToken;
const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
    return jwt.sign(payload, "sarthak");

}

module.exports = generateToken;
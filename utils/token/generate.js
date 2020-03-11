const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
    return jwt.sign(payload.toJSON(), "sarthak", {
        expiresIn: "6h",
    });
}

module.exports = generateToken;
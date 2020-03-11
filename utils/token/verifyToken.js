const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const token = bearerHeader.split(' ')[1];
        try {
            jwt.verify(token, 'sarthak');
            next();
        } catch (e) {
            res.statusCode = 403;
            res.json({
                message: "Session expired !"
            });
        }
    } else {
        res.statusCode = 403;
        res.json({
            message: "Authorization failed !"
        });
    }
}

module.exports = verifyToken;
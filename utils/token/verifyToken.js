const verifyToken = (req, res, next) => {

    console.log("came here", req.headers);
    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
        const token = bearerHeader.split('')[1];
        req.token = token;
        next();
    } else {

        res.statusCode = 403;
        res.json({
            message: "Authorization failed !"
        });
    }

}

module.exports = verifyToken;
const genreateToken = require('../../../utils/token/generate');
const loginCtrl = async (req, res) => {
    // res.send("login  !!");
    // connect with db and authenticate the user

    let user = {
        name: "sarthak",
        id: 1, //can be mongo id
        email: "sarthakagrawal6@gmail.com"
    }

    try {
        const token = await genreateToken(user);
        const resp = {
            ...user,
            token: token
        };
        res.json({
            message: "Login Successfull !!",
            result: {
                data: resp
            }
        });
    } catch (e) {
        res.json({
            message: "Username or password incorrect !",
            result: {
                data: null
            }
        })
    }


}




module.exports = loginCtrl;
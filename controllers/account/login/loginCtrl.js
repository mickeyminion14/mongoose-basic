const genreateToken = require("../../../utils/token/generate");
const User = require("../../../models/user/user.model");
const loginCtrl = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  try {
    let document = await User.findOne({
      email: email,
      password: password
    });

    delete document.password;

    const token = genreateToken(document);
    res.json({
      message: "Login Successfull !!",
      result: {
        data: null
      },
      token: token
    });
  } catch (e) {
    res.statusCode = 400;
    res.json({
      message: "Password or email incorrect!",
      result: {
        data: null
      }
    });
  }
};

module.exports = loginCtrl;
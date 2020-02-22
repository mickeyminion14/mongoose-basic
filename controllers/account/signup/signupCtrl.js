const User = require('../../../models/user/user.model');
const insert = require('../../../db/insert')

const signupCtrl = async (req, res) => {
    console.log(req.body);


    const payload = {...req.body};

    const document = await insert(payload);

    console.log(document);
    res.send("done !!");

    
}

module.exports = signupCtrl;
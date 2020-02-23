const insert = require('../../../db/account/insert')
const signupCtrl = async (req, res) => {
    console.log(req.body);
    const payload = {...req.body};

    try {

        const document = await insert(payload);
        console.log(document);
        res.send("done !!");
    }
    catch (e) {
        res.send("something went wrong !!");
    }
    
}
module.exports = signupCtrl;
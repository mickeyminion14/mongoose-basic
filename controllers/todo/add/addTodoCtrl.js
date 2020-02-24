const insert = require('../../../db/todo/insert')
const addTodoCtrl = async (req, res) => {
    const payload = {
        ...req.body
    };
    try {

        const document = await insert(payload);
        res.json({
            message: "Todo Added SuccessFully !!",
            result: {
                data: document
            }
        })
    } catch (e) {
        res.statusCode = 400;
        res.json({
            message: "Could not add Todo !",
            result: null
        })
    }
}

module.exports = addTodoCtrl;
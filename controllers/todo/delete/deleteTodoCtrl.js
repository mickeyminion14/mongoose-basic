const deleteTodo = require('../../../db/todo/deleteTodo')
const deleteTodoCtrl = async (req, res) => {
    console.log(req.body);

    const payload = {
        ...req.body
    };

    try {
        const document = await deleteTodo(payload);
        res.json({
            "message": "Todo Deleted Successfully !!",
            result: {
                data: document
            }
        });
    } catch (e) {
        res.json({
            message: "Unable to delete Todo !!",
            result: {
                data: null
            }
        })
    }

}

module.exports = deleteTodoCtrl;
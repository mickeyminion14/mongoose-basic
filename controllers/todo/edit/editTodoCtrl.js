const editTodo = require('../../../db/todo/editTodo')
const editTodoCtrl = async (req, res) => {
    const payload = {
        ...req.body
    };

    try {
        const document = await editTodo(payload);
        res.json({
            message: "Todo Edited SuccessFully !!",
            result: {
                data: document
            }
        })
    } catch (e) {
        res.statusCode = 400;
        res.json({
            message: "There was some problem in editing the todo ! Please try again later !",
            result: {
                data: null
            }
        });
    }

}

module.exports = editTodoCtrl;
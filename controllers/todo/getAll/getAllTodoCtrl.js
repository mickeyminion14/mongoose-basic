const getAllTodos = require('../../../db/todo/getAllTodos')
const getAllTodoCtrl = async (req, res) => {

    try {

        let documents = await getAllTodos();

        if (documents.length) {

            res.json({
                message: "Success !",
                result: {
                    data: documents
                }
            });
        } else {
            res.json({
                message: "No Todos Found !!",
                result: {
                    data: []
                }
            })
        }
    } catch (e) {
        res.statusCode = 400;
        res.json({
            message: "Could not fetch Todos !!",
            result: null
        });
    }

}

module.exports = getAllTodoCtrl;
const Todo = require('../../models/todo/todo.model')

const deleteTodo = (payload) => {
    return Todo.deleteOne(payload);
}

module.exports = deleteTodo;
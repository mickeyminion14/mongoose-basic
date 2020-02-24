const Todo = require('../../models/todo/todo.model')
const insert = (paylod) => {
    const todo = new Todo(paylod);

    return todo.save();
}

module.exports = insert;
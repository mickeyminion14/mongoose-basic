const Todo = require('../../models/todo/todo.model')
const getAllTodos = () => {

    const documents = Todo.find();
    return documents;
}

module.exports = getAllTodos;
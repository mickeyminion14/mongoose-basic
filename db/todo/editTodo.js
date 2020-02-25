const Todo = require('../../models/todo/todo.model')
const editTodo = (payload) => {
    return Todo.findByIdAndUpdate(payload.id, {
        title: payload.title,
        content: payload.content
    })
}

module.exports = editTodo;
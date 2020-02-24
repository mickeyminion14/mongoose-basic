const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    content: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 1000
    },
    finished: {
        type: Boolean,
        default: false
    }

}, {
    collection: "todo",
    timestamps: true
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
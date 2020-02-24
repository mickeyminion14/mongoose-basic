const express = require("express");
const addTodoCtrl = require("../../controllers/todo/add/addTodoCtrl");
const getAllTodoCtrl = require('../../controllers/todo/getAll/getAllTodoCtrl')
const todo = express();

todo.post("/add", addTodoCtrl);
todo.get("/getAll", getAllTodoCtrl);
// todo.delete("/delete", deleteTodoCtrl);

module.exports = todo;
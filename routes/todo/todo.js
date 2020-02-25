const express = require("express");
const addTodoCtrl = require("../../controllers/todo/add/addTodoCtrl");
const getAllTodoCtrl = require("../../controllers/todo/getAll/getAllTodoCtrl");
const todo = express();
const editTodoCtrl = require("../../controllers/todo/edit/editTodoCtrl");
const deleteTodoCtrl = require('../../controllers/todo/delete/deleteTodoCtrl')
todo.post("/add", addTodoCtrl);
todo.get("/getAll", getAllTodoCtrl);
todo.post("/edit", editTodoCtrl);
todo.delete("/delete", deleteTodoCtrl);

module.exports = todo;
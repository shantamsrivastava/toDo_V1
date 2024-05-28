const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:password%40123@cluster0.5r3bxac.mongodb.net/toDos");

const toDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("model", toDoSchema);

module.exports = {
    todo: todo
}
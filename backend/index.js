const express = require("express");
const {createTodo} = require("./types");
const cors = require("cors");
const {todo} = require("./db");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload) {
        res.status(411).json({
            msg: "Wrong input"
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });

});

app.get("/todos", async (req,res) => {
    const allTodos = await todo.find();
    res.json({
        allTodos
    });
});

app.post("/completed", async (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(updatePayload);
    if(!parsedPayload) {
        res.status(411).json({
            msg: "Wrong input"
        });
        return;
    }
    await todo.update({
        _id: req.body.title
    }, {
        completed: true
    });
    res.json({
        msg: "Task completed"
    });
});

app.listen(3000);


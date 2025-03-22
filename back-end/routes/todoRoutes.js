const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Create Todo
router.post('/', async (req, res) => {
    const { task } = req.body;
    const newTodo = new Todo({ task }); // Removed userId
    await newTodo.save();
    res.json(newTodo);
});

// Get All Todos
router.get('/', async (req, res) => {
    const todos = await Todo.find(); // Removed userId filter
    res.json(todos);
});

// Update Todo
router.put('/:id', async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Todo updated" });
});

// Delete Todo
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
});

module.exports = router;

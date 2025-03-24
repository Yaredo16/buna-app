const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();


router.post('/', async (req, res) => {
    const { task } = req.body;
    try {
        const newTodo = new Todo({ task });
        await newTodo.save();
        res.status(201).json(newTodo); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating todo' }); 
    }
});


router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching todos' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' }); 
        }
        res.status(200).json({ message: "Todo updated", todo: updatedTodo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating todo' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' }); 
        }
        res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting todo' });
    }
});

module.exports = router;

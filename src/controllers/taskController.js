// src/controllers/taskController.js
const Task = require('../models/Task');

// @desc    Listar todas as tarefas
// @route   GET /api/tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefas', error });
  }
};

// @desc    Criar uma nova tarefa
// @route   POST /api/tasks
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar tarefa', error });
  }
};

// @desc    Atualizar uma tarefa
// @route   PUT /api/tasks/:id
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar tarefa', error });
  }
};

// @desc    Deletar uma tarefa
// @route   DELETE /api/tasks/:id
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar tarefa', error });
    }
};
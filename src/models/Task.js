// src/models/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true, // Cria os campos createdAt e updatedAt automaticamente
});

module.exports = mongoose.model('Task', TaskSchema);
// src/app.js
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middlewares
app.use(cors()); // Permite que o frontend acesse a API
app.use(express.json()); // Permite que o servidor entenda JSON

// Rota principal
app.get('/', (req, res) => {
  res.send('API do Gerenciador de Tarefas está no ar! 🚀');
});

// Rotas da API
app.use('/api/tasks', taskRoutes);

module.exports = app;
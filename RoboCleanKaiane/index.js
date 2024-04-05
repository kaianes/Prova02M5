const express = require('express');
const { RoboDeLimpeza } = require('./prova02.js');

const robo = new RoboDeLimpeza();

const app = express();

app.use(express.json());

// Este endpoint é responsável por solicitar a execução de todas as tarefas de limpeza pendentes na fila do Robô de Limpeza.
app.post('/executar_todas_tarefas', (req, res) => {
    const tarefa = req.body;
    robo.executarTodasTarefas(tarefa);
    res.json(tarefa);
});

// Read
app.get('/tarefas', (req, res) => {
    res.json(robo.verHistorico());
});


app.listen(3000, () => {
    console.log('Servidor está rodando: http://localhost:3000');
});

const express = require('express');
const app = express();
const PORT = 3000;
const { registrarLog } = require('./script');

app.use(express.json());

app.listen(PORT, () => 
{
  console.log(`Porta do servidor ${PORT}`);
});
const fs = require('fs');

app.get('/logs/:id', (req, res) => 
{
  const idProcurado = req.params.id;
  const logs = fs.readFileSync('logs.txt', 'utf-8');

  const logEncontrado = logs.find(log => log.startsWith(idProcurado));
  if (logEncontrado) 
  {
    return res.status(200).json({ log: logEncontrado });
  } else 
  {
    return res.status(404).json({ erro: 'Log não encontrado.' });
  }
});

app.post('/logs', (req, res) => 
{
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ erro: 'Digite o nome' });

  const id = registrarLog(nome);
  res.status(201).json({ mensagem: 'Log registrado.', id });
});

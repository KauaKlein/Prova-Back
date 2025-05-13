const express = require('express');
const app = express();
const PORT = 3000;
const { registrarLog } = require('./script');

app.use(express.json());

app.listen(PORT, () => 
{
  console.log(`Porta do servidor ${PORT}`);
});

app.post('/logs', (req, res) => 
{
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ erro: 'Informe o nome' });

  const id = registrarLog(nome);
  res.status(201).json({ mensagem: 'Log registrado.', id });
});

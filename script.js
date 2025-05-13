const fs = require('fs');

function registrarLog(nomeAluno) {
  const id = uuidv4();
  const dataHora = new Date().toISOString();
  const log = `${id} - ${dataHora} - ${nomeAluno}\n`;

  const logEncontrado = logs.find(log => log.startsWith(idProcurado));
  if (logEncontrado) {
    return res.status(200).json({ log: logEncontrado });
  } else {
    return res.status(404).json({ erro: 'Log não encontrado.' });
  }
}
app.get('/logs/:id', (req, res) => {
  const idProcurado = req.params.id;
  const logs = fs.readFileSync('logs.txt', 'utf-8').split('\n');

  const logEncontrado = logs.find(log => log.startsWith(idProcurado));
  if (logEncontrado) {
    return res.status(200).json({ log: logEncontrado });
  } else {
    return res.status(404).json({ erro: 'Log não encontrado.' });
  }
});

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
});

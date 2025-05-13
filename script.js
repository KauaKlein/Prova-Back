const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function registrarLog(nomeAluno) {
  const id = uuidv4();
  const dataHora = new Date().toISOString();
  const log = `${id} - ${dataHora} - ${nomeAluno}\n`;

  fs.appendFileSync('logs.txt', log);
  return id;
}

module.exports = { registrarLog };

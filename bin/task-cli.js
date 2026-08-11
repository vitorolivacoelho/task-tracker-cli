const { add } = require('../src/commands');

const args = process.argv.slice(2);
const command = args[0];
const commandArgs = args.slice(1);

if (command === 'add') {
  add(commandArgs[0]);
} else {
  console.log(`Comando desconhecido: ${command}`);
}
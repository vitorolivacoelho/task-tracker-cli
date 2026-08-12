const { add, list, update, deleteTask, markInProgress, markCompleted } = require('../src/commands');

const args = process.argv.slice(2);
const command = args[0];
const commandArgs = args.slice(1);

if (command === 'add') {
  add(commandArgs[0]);
} else if (command === 'list') {
  list(commandArgs[0]);
} else if (command === 'update') {
  update(commandArgs[0], commandArgs[1]);
} else if (command === 'delete') {
  deleteTask(commandArgs[0]);
} else if (command === 'mark-in-progress') {
  markInProgress(commandArgs[0]);
} else if (command === 'mark-completed') {
  markCompleted(commandArgs[0]);
} else {
  console.log(`Comando desconhecido: ${command}`);
}
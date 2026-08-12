const { readTasks, writeTasks } = require('./taskRepository');

function add(description) {
    const tasks = readTasks();

    const ids = tasks.map(task => task.id);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    const date = new Date() .toISOString();

    const newTask = {
    id: newId,
    description: description,
    status: 'todo',
    createdAt: date,
    updatedAt: date,
  };

    tasks.push(newTask);
    writeTasks(tasks);

    console.log(`Tarefa adicionada com sucesso! (ID: ${newTask.id})`);
}

function list() {
  const tasks = readTasks();

  if (tasks.length === 0) {
    console.log('Nenhuma tarefa encontrada.');
    return;
  }

  task.forEach(task => {
    console.log(`[${task.id}] ${task.description} - ${task.status}`);
  })
}

module.exports = { add, list };
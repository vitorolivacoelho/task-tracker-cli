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

  tasks.forEach(task => {
    console.log(`[${task.id}] ${task.description} - ${task.status}`);
  })
}

function update(id, newDescription) {
  const tasks = readTasks();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    console.log(`Erro: tarefa com ID ${id} não encontrada.`);
    return;
  }

  task.description = newDescription;
  task.updatedAt = new Date().toISOString();

  writeTasks(tasks);

  console.log(`Tarefa ${task.id} atualizada com sucesso!`);
}
  
module.exports = { add, list, update };
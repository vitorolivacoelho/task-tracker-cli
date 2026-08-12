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

function list(status) {
  const tasks = readTasks();

  const filteredTasks = status ? tasks.filter((task) => task.status === status) : tasks;

  if (filteredTasks.length === 0) {
    console.log('Nenhuma tarefa encontrada.');
    return;
  }

  filteredTasks.forEach((task) => {
    console.log(`[${task.id}] ${task.description} - ${task.status}`);
  });
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

function deleteTask(id) {
  const tasks = readTasks();

  const taskIndex = tasks.findIndex((task) => task.id === Number(id));

  if (taskIndex === -1) {
    console.log(`Erro: tarefa com ID ${id} não encontrada.`);
    return;
  }

  tasks.splice(taskIndex, 1);
  writeTasks(tasks);

  console.log(`Tarefa ${id} excluída com sucesso!`);
}

function markInProgress(id) {
  const tasks = readTasks();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    console.log(`Erro: tarefa com ID ${id} não encontrada.`);
    return;
  }

  task.status = 'in-progress';
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);

  console.log(`Tarefa ${task.id} marcada como "em andamento"!`);
}

function markCompleted(id) {
  const tasks = readTasks();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
      console.log(`Erro: tarefa com ID ${id} não encontrada.`);
      return;
  }

  task.status = 'completed';
  task.updatedAt = new Date().toISOString();

  writeTasks(tasks);

  console.log(`Tarefa ${task.id} marcada como "concluída"!`);
}

module.exports = { add, list, update, deleteTask, markInProgress, markCompleted };
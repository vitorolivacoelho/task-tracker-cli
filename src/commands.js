const { readTasks, writeTasks } = require('./taskRepository');

function add(description) {
    const tasks = readTasks();

    const ids = tasks.map(task => task.id);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;

    const date = new Date() .toISOString();

    const newTask = {
    id: nextId,
    description: description,
    status: 'todo',
    createdAt: date,
    updatedAt: date,
  };

    tasks.push(newTask);
    writeTasks(tasks);

    console.log(`Tarefa adicionada com sucesso! (ID: ${newTask.id})`);

    module.exports = { add };
}
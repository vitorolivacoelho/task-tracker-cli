const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, '..', 'tasks.json');

function readTasks() {
    if (!fs.existsSync(TASKS_FILE)) {
        return [];
    }

    const content = fs.readFileSync(TASKS_FILE, 'utf-8');

    try {
        return JSON.parse(content);
    } catch (error) {
        console.error('Erro: tasks.json está corrompido ou em formato inválido.');
        return [];
    }
}

function writeTasks(tasks) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };
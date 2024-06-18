const Task = require('../models/task');

const getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

const addTask = async (req, res) => {
  const { description } = req.body;
  const newTask = await Task.create({ description });
  res.json(newTask);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  await Task.update({ completed }, { where: { id } });
  res.sendStatus(200);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.sendStatus(200);
};

module.exports = { getTasks, addTask, updateTask, deleteTask };

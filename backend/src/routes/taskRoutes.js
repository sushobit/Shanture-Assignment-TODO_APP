// Example backend route configuration (taskRoutes.js)
const express = require('express');
const router = express.Router();
const { addTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/tasks', getTasks); // Example route for fetching tasks
router.post('/tasks', addTask); // Route for adding a new task
router.put('/tasks/:id', updateTask); // Example route for updating a task
router.delete('/tasks/:id', deleteTask); // Example route for deleting a task

module.exports = router;

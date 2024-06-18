const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('task', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Task;

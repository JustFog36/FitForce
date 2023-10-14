const Task = require('./task');
const Exercise = require('./exercise');

Task.hasMany(Exercise, {
  foreignKey: 'task_id',
  onDelete: 'CASCADE'
});

Exercise.belongsTo(Task, {
  foreignKey: 'task_id'
});

module.exports = { Task, Exercise };

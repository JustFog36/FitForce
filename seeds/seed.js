const sequelize = require('../config/connection');
const { Task, Exercise, Users } = require('../models');

const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const taskData = require('./taskData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const tasks = await Task.bulkCreate(taskData, {
    individualHooks: true,
    returning: true,
  });

  for (const exercises of exerciseData) {
    await Exercise.create({
      ...exercises,
      task_id: tasks[Math.floor(Math.random() * tasks.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {};

Exercise.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        exName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        equipment: {
            type: DataTypes.STRING,
        },
        instructions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        task_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'task',
              key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'exercise',
    }
);

module.exports = Exercise;
const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require('./Function')
const PossibleAnswers = connection.define(
    "PossibleAnswers",
    {
        Id:{
            type: DataTypes.STRING,
            primaryKey: true,
          },
          PossibilityOne: {
            type: DataTypes.STRING,
          },
          PossibilityTwo: {
            type: DataTypes.STRING,
          },
          PossibilityThree: {
            type: DataTypes.STRING,
          },
          PossibilityFour: {
            type: DataTypes.STRING,
          },
          PossibilityFive: {
            type: DataTypes.STRING,
          },
          TypeInput: {
            type: DataTypes.STRING,
          },
          createdAt:{
            type: 'DATETIME',
            defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
          },
          updatedAt:{
            type: 'DATETIME',
            defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
          },
    },
    { freezeTableName: true, timestamps: false }
)
module.exports = PossibleAnswers
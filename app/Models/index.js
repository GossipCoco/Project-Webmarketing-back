const { Sequelize, DataTypes, sequelize, Op } = require('sequelize');
const connection = require('../DataLayer/connection');

const Question = require('./QuestionsModel.js')
const PossibleAnswers = require('./PossibleAnswers.js')

const models = {
    Question,
    PossibleAnswers,
    sequelize: connection,
    Sequelize,
    Utils: {
      Op,
      sequelize,
    },
}
module.exports = models;
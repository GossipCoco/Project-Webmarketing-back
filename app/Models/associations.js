const {
    Question,
    PossibleAnswers,
    sequelize: connection,
    Sequelize,
    Utils: {
      Op,
      sequelize,
    },
}= require('./index');

/* Question/ PossibleAnswers */

PossibleAnswers.belongsTo(Question,  { foreignKey: 'QuestionId' })
Question.hasMany(PossibleAnswers)

module.exports = {
    Question,
    sequelize: connection,
    Sequelize,
    Utils: {
      Op,
      sequelize,
    },
}
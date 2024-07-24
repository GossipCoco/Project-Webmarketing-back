const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllQuestions = () => {
    return model.Question.findAll({        
        include:[{
            model: model.PossibleAnswers
        }]

    })
}

module.exports = {
    GetAllQuestions
}
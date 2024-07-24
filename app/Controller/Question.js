const query = require('../Queries/QuestionQueries')
const Question = {}

Question.GetAllQuestions= (req, res) => {
    query.GetAllQuestions()
        .then(w => {
            // const nbResult = Object.keys(w).length
            console.log("w", w)
            res.send({ ob: w, res: true }).status(200)
        })
        .catch(err => {
            console.log(err)
            res.send(err).status(500)
        })
}

module.exports = Question
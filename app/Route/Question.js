const express = require('express')

const router = express.Router()
const Question = require('../Controller/Question')

router
.get('/', Question.GetAllQuestions)

module.exports = router;
// post question,update question, get all questions, get question by userId, get spaces,  post answer, mark best answer, update answer, post comments
const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../utils/utils');
const questionAnswerService = require('../services/questionAnswerService');

router.post('/question',authenticateToken, async (req, res, next) => {
    const response = await questionAnswerService.postQuestion(req.body,req.user)
    res.json(response);
});

router.get('/question',authenticateToken, async (req, res, next) => {
    const response = await questionAnswerService.getQuestion(req.query.questionId)
    res.json(response);
});

router.get('/questions',authenticateToken, async (req, res, next) => {
    const response = await questionAnswerService.getAllQuestions()
    res.json(response);
});

router.get('/questions-for-space',authenticateToken, async (req, res, next) => {
    console.log('space is ',req.query.space);
    const response = await questionAnswerService.getAllQuestions(req.query.space)
    res.json(response);
});

router.post('/answer',authenticateToken, async (req, res, next) => {
    const response = await questionAnswerService.addAnswer(req.body,req.user)
    res.json(response);
});

module.exports = router;
const express = require('express');
const Question = require('./questions-model');
const { validateQuestionId } = require('../middleware/middleware');

const router = express.Router();

// Endpoints
router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.get();
    res.json(questions);
  } catch(err) { next(err) }
});

router.get('/:id', validateQuestionId, async (req, res) => {
  res.json(req.question);
});

router.use('*', (req, res) => {
  res.status(404).json({ message: "Invalid endpoint. Please check your request." })
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: "Something went wrong in the server. Please check your endpoint and the structure of your request."
  });
});

module.exports = router;
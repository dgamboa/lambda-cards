const express = require('express');
const Question = require('./questions-model');

const router = express.Router();

// Endpoints
router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.get();
    res.json(questions);
  } catch(err) { next(err) }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: "Something went wrong in the server. Please check your endpoint and the structure of your request."
  });
});

module.exports = router;
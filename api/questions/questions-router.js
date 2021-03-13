const express = require('express');
const Questions = require('./questions-model');

const router = express.Router();

// Endpoints
router.get('/', async (req, res, next) => {
  try {
    res.json({ msg: "get all questions" });
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
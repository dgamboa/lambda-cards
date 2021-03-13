const Question = require('../questions/questions-model');

async function validateQuestionId(req, res, next) {
  const { id } = req.params;
  try {
    const question = await Question.get(id);
    if (question) {
      req.question = question;
      next();
    } else {
      res.status(404).json({ message: "Question not found" })
    }
  } catch(err) { next(err) }
};

module.exports = {
  validateQuestionId
};
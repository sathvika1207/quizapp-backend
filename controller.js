const questions = require('../data/questions.json');

exports.getQuestions = (req, res) => {
  res.json(questions);
};

exports.checkAnswer = (req, res) => {
  const { questionId, selectedOption } = req.body;
  const question = questions.find(q => q.id === questionId);

  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  const isCorrect = question.answer === selectedOption;
  res.json({ isCorrect });
};
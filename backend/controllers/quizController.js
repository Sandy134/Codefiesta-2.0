const Quiz = require("../models/quizModel.js");

// Submit Quiz

const submitQuiz = async (req, res) => {
  // console.log(req.body);
  const { user, totalMarks, subject } = req.body;
  if (!user || !totalMarks || !subject) {
    return res.status(400).json({ succes: false, msg: "All Fields required" });
  }

  const quiz = await Quiz.create({
    user,
    totalMarks,
    subject,
  });

  res.status(201).json({ succes: true, quiz });
};

const getQuizResults = async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    res.status(200).json({ succes: true, quizzes });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  submitQuiz,
  getQuizResults,
};

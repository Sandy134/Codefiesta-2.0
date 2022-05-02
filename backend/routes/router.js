const express = require("express");
const { getComments, addComment } = require("../controllers/commentController");
const {
  submitQuiz,
  getIndividualUserQuiz,
  getQuizResults,
} = require("../controllers/quizController");
const {
  registerUser,
  loginUser,
  sendEmail,
} = require("../controllers/userController");

const router = express.Router();

// Routes for register
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

//Routes for quiz
router.post("/quiz", submitQuiz);
router.get("/quiz", getQuizResults);

//Routes for Comments
router.get("/comments", getComments);
router.post("/comments", addComment);

module.exports = router;

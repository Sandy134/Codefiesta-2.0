const Comment = require("../models/commentModel");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(201).json({ success: true, comments });
  } catch (error) {
    console.log(error.message);
  }
};

const addComment = async (req, res) => {
  try {
    const { question, user, answer } = req.body;
    if (!question || !user) {
      return res
        .status(400)
        .send({ success: false, msg: "Something went wrong" });
    }

    const comment = await Comment.create({
      question,
      user,
      answer,
    });
    res.status(201).json({ success: true, comment });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getComments,
  addComment,
};

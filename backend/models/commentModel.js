const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Question Required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  answer: {
    type: String,
    default:
      "Also known as coding or programming, computer programming is the process of encoding an algorithm into a notation,",
  },
});

const comment = mongoose.model("Comment", commentSchema);

module.exports = comment;

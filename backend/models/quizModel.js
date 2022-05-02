const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    totalMarks:{
        type:Number,
    },
    subject:{
        type:String,
        required:[true,"Subject Required"]
    }
});

const quiz = mongoose.model("Quiz",quizSchema);

module.exports = quiz;
const mongoose = require('mongoose');



// Define the schema for a question
// This schema includes fields for title, description, tags, author, answers, accepted answer,

const questionSchema = new mongoose.Schema({
    title : String,
    description : String,
    tags : [String],
    author : { type : mongoose.Schema.Types.ObjectId, ref: 'User' },
    answers : [{ type : mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    acceptedAnswer : { type : mongoose.Schema.Types.ObjectId, ref: 'Answer' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('Question', questionSchema);



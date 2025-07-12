const mongoose = require('mongoose');



const answerSchema = new mongoose.Schema({
    content : String,
    author : {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    question : {type : mongoose.Schema.Types.ObjectId, ref: 'Question'},
    votes : { type: Number, default: 0 },
    voters : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Answer', answerSchema);
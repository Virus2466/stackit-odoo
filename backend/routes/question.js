const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Question = require('../models/Question');
const Answer = require('../models/Answer');
const User = require('../models/Users');

// Create a new Question
router.post('/', auth, async (req, res) => {
    const {title , description , tags } = req.body;
    const question = new Question({
        title,
        description,
        tags,
        author : req.user.id
    });
    await question.save();
    res.status(201).json(question);
});

// Get all Questions 
router.get('/',async (req,res) => {
    const questions = await Question.find().populate('author' , 'username').sort({ createdAt: -1 });
    res.json(questions);
});


// Get Question byu ID
router.get('/:id', async (req, res) => {
    const question = await Question.findById(req.params.id).populate('author', 'username').populate({
        path: 'answers',
        populate: { path: 'author', select: 'username' }
    });
    res.json(question);
});


// Accept Answer
router.post('/:id/accept-answer', auth, async (req, res) => {
    const { answerId } = req.body;
    const question = await Question.findById(req.params.id);
    if(question.author.toString() !== req.user.id) {
        return res.status(403).json({ message: 'You are not authorized to accept this answer' });
    }

    question.acceptedAnswer = answerId;
    await question.save();
    res.json({ message: 'Answer accepted successfully', question });
});

module.exports = router;
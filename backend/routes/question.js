const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const Answer = require('../models/Answer');
const User = require('../models/Users');

// Create a new Question (public, no auth)
router.post('/', async (req, res) => {
    const { title, description, tags } = req.body;
    const question = new Question({
        title,
        description,
        tags,
        // author: req.user.id // remove author field since no auth
    });
    await question.save();
    res.status(201).json(question);
});

// Get all Questions (public)
router.get('/', async (req, res) => {
    const questions = await Question.find().populate('author', 'username').sort({ createdAt: -1 });
    res.json(questions);    
});

// Get Question by ID (public)
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id.trim(); // 👈 trim here
        const question = await Question.findById(id)
            .populate('author', 'username')
            .populate({
                path: 'answers',
                populate: { path: 'author', select: 'username' }
            });
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID format', error: err.message });
    }
});


// Accept Answer (public, no auth)
router.post('/:id/accept-answer', async (req, res) => {
    const { answerId } = req.body;
    const question = await Question.findById(req.params.id);

    // Remove ownership check since no auth
    // if (question.author.toString() !== req.user.id) {
    //     return res.status(403).json({ message: 'You are not authorized to accept this answer' });
    // }

    question.acceptedAnswer = answerId;
    await question.save();
    res.json({ message: 'Answer accepted successfully', question });
});

module.exports = router;

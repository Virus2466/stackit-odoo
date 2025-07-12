const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Answer = require('../models/Answer');
const Question = require('../models/Question');
const User = require('../models/Users');



// Post Answer
router.post('/:questionId', auth, async (req, res) => {
    const {content} = req.body;
    const question = await Question.findById(req.params.questionId);
    if(!question) return res.status(404).json({ message: 'Question not found' });


    const answer = new Answer({
        content,
        author: req.user.id,
        question: question._id
    });

    await answer.save();
    question.answers.push(answer._id);
    await question.save();
    
    // Add notification logic here -- 
    // We will add socket.io Later if we have time
    // For now, we will just add a notification to the question owner
    const questionOwner = await User.findById(question.author);
    questionOwner.notifications.push({
        messagge : `New answer to your Question: ${question.title}`,
        link: `/questions/${question._id}`,
    });
    await questionOwner.save();


    res.status(201).json(answer);
});


// Somehow this works :)
// Upvote Answer
router.post('/:id/upvote', auth, async (req, res) => {
    const {type } = req.body; // 'up or down'
    const answer = await Answer.findById(req.params.id);
    if(!answer) return res.status(404).json({ message: 'Answer not found' });

    if(answer.voters.includes(req.user.id)) {
        return res.status(400).json({ message: 'You have already voted on this answer' });
    }

    // Update the answer's votes
    answer.votes += tpype === 'up' ? 1 : -1;
    answer.voters.push(req.user.id);
    await answer.save();
    res.json({ message: 'Vote recorded successfully', answer });
});

module.exports = router;
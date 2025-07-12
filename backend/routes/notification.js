const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Notification = require('../models/Notification');



// Get user notifications
router.get('/', auth , async (req, res) => {
    const notifications = await Notification.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(notifications);
});


// mark as read
router.put('/:id/read', auth, async (req, res) => {
    const notification = await Notification.findById(req.params.id);
    if(!notification) return res.status(404).json({ message: 'Notification not found' });

    if(notification.user.toString() !== req.user.id) return res.status(403).json({ message: 'Access denied' });

    notification.read = true;
    await notification.save();
    res.json({ message: 'Notification marked as read' });
});

module.exports = router;
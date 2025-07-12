const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const auth = require('../middleware/auth');
const ROLES = require('../utils/roles')


// Midlleware to check admin role
const isAdmin = (req, res , next) => {
    if(req.user.role != ROLES.ADMIN) return res.status(403).json({ message: 'Access denied' });
    next();
};


// Get All Users
router.get('/users',auth , isAdmin , async (req , res) => {
    const users = await User.find();
    res.json(users)
})


// Ban or Unban user
router.put('/users/:id/ban', auth, isAdmin, async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isBanned = !user.isBanned;
    await user.save();
    res.json({ message: user.isBanned ? 'User banned' : 'User unbanned' });
});

module.exports = router;
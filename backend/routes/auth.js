const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const ROLES = require('../utils/roles');


// Register a new user
router.post('/register', async (req, res) => {
    const {username , email , password } = req.body;
    const existing = await User.findOne({ email });
    if(existing) return res.status(400).json({ message: 'User already exists' });


    const hashed = await bcrypt.hash(password, 10);
    const user = new User({username, 
        email,
        passwordHash: hashed
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
});


router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message: 'Invalid credentials' });
    if(user.banned) return res.status(403).json({ message: 'User is banned' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if(!valid) return res.status(400).json({ message: 'Invalid credentials' });


    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email, role: user.role }, roles : ROLES });

});

module.exports = router;
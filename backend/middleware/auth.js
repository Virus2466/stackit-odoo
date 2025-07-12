const jwt = require('jsonwebtoken');


module.exports = function (req , res , next){
    // Check if the request has an authorization header
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token) return res.status(401).json({ message: 'No token provided' });

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to the request object
        next();
    } catch{
        res.status(401).json({ message: 'Invalid token' });
    }
};
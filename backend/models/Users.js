const mongoose = require('mongoose');
const ROLES = require('../utils/roles');

const notificationSchema = new mongoose.Schema({
    message : String,
    link: String,
    isRead : {type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    passwordHash : String,
    role : { type : String , enum : Object.values(ROLES), default: ROLES.USER },
    notifications : [notificationSchema],
    banned : {type : Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);
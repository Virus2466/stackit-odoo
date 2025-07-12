const mongoose = require('mongoose');  
const { create } = require('./Users');


const notificationSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId , ref : 'Users' , required : true},
    message : {type : String , required : true},
    read : {type : Boolean , default : false},
    createdAt : {type : Date , default : Date.now}
});

module.exports = mongoose.model('Notification', notificationSchema);
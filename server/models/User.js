const mongoose = require('mongoose');

// User model 
const UserSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true
    },
    password: {

        type: String,
        required: true
    },
});

// Exports UserSchema so we can use it 
// at server
const User = mongoose.model('User', UserSchema);

module.exports = User;
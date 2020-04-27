const mongoose = require('mongoose');

// User model 
const PostSchema = new mongoose.Schema({

    title: {

        type: String,
        required: true
    },
    image: {

        type: String,
        required: true
    },
    text: {

        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Date: {

        type: Date,
        default: Date.now
    },


});

// Exports UserSchema so we can use it 
// at server
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
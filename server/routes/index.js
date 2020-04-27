const express = require('express');
const router = express.Router(); // Express router is a class which helps us to create router handlers
const mongoose = require('mongoose');
const Post = require('../models/Post'); // Require User Schema
const cors = require('cors');
const passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User = require('../models/User'); // Require User Schema
mongoose.set('useFindAndModify', false);
router.use(cors());
mongoose.set('useFindAndModify', false);

router.use(express.urlencoded());


// Index page
router.get('/', forwardAuthenticated, (req, res) => {

    res.render('login')
})

// Login handle 
router.post('/', passport.authenticate('local', {

    successRedirect: '/addPost',
    failureRedirect: '/',

}))

// Index page
router.get('/addPost', ensureAuthenticated, (req, res) => {

    res.render('index', {

        post: req.post,
    })
})

router.get('/api', (req, res) => {

    // If User connected send user data to client side
    Post.find({}).then((data) => {

        res.json(data);
    })
        .catch((error) => {

            console.log("error");
        });
})

router.get('/logout', (req, res) => {

    req.logout();
    res.redirect('/');

});

router.post('/sendData', (req, res) => {

    const text = req.body.text;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;

    const newPost = new Post({

        text,
        title,
        description,
        image
    });

    newPost.save().then(console.log("Post added at Database"));

    res.redirect('/');
})

module.exports = router;

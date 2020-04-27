const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function (passport) {

    // Use passport
    passport.use(

        // Search for email in database
        new LocalStrategy({ usernameField: 'name' }, (name, password, done) => {

            User.findOne({name: name}).then(User => {

                // If not return message
                if (!User) {

                    return done(null, false);
                }
           
                // Match password
                if (password !== User.password) {
                    
                    return done(null, false);
                } 

                return done(null, User);
            });
        })
    );

    // Save user.id  to session
    passport.serializeUser(function (User, done) {

        done(null, User.id);
    });

    //  In deserializeUser the user.id is 
    // matched with the in memory
    //  array / database or any data resource.
    passport.deserializeUser(function (id, done) {

        User.findById(id, function (err, User) {

            done(err, User);
        });
    });
};

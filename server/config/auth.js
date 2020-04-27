module.exports = {

    //Function which authenicate that user is signed up
    ensureAuthenticated: function (req, res, next) {

        if (req.isAuthenticated()) {

            return next();
        }

        else {


            res.redirect('/');
        }
    },

    //Function which forward user to sign up  
    forwardAuthenticated: function (req, res, next) {

        if (!req.isAuthenticated()) {

            return next();
        }

        res.redirect('/addPost');
    }

};

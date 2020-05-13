const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require("body-parser");
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const passport = require('passport');
const app = express();
require('./config/passport')(passport);
app.use('/public', express.static('public'));
app.use(

    session({

        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use(

    bodyParser.urlencoded({ extended: false })
);

app.use(bodyParser.json());
app.use('/', require('./routes/index.js'));
app.use('/addPost', require('./routes/index.js'));
app.use('/api', require('./routes/index.js'));
app.use(expressLayouts);

app.set('view engine', 'ejs');

const db = require('./config/keys').mongoURI;

const PORT = process.env.PORT || 1200;

const Mongoclient = require('mongodb').MongoClient;

var minutes = 25, the_interval = minutes * 60 * 1000; //Define in how many minutes you want interval to run 


// Loop running every 5 minutes and call Apis
setInterval(function () {
    console.log("wake up Heroku!!")
}, the_interval);

mongoose

    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

        console.log('MongoDB Connected')
    })
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
require('dotenv').config();

//Pasword to connect to mongodb is in the .env file
pass = process.env.PASS;

dbPassword = 'mongodb+srv://nickous:' + pass + '@cluster0-mohi4.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {

    mongoURI: dbPassword

};
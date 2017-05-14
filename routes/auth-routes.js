var authController = require('../controllers/authcontroller.js');
var passport = require('passport');
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signup'
    }
 
));

};


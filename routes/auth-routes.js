var authController = require('../controllers/authcontroller.js');
var passport = require('passport');
 
module.exports = function(app, passport) {


    app.get('/history', authController.history);

    app.get('/goal', authController.goal);
 
    
    app.get('/my-fitness', authController.dashboard);

 
    app.get('/logout', authController.logout);
 
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/my-fitness',
 
            failureRedirect: '/signin'
        }
 
    ));
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}
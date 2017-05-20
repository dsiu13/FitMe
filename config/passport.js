//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var db = require("../models");

module.exports = function(passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
    var secret = bCrypt.genSaltSync(8)

     passport.serializeUser(function(user, done) {
          done(null, user.id);
      });


  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      User.findById(id).then(function(user) {
        if(user){
          done(null, user.get());
        }
        else{
          done(user.errors,null);
        }
      });

  });
  
    passport.use('local-signup', new LocalStrategy(
 
        {
 
            usernameField: 'UserName',
 
            passwordField: 'Password',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },
 
 
 
        function(req, UserName, UserPassword, done) {
 
            var generateHash = function(UserPassword) {
 
                return bCrypt.hashSync(UserPassword, secret, null);
 
            };
 
 
            User.findOne({
                where: {
                    UserName: UserName
                }
            }).then(function(user) {
 
                if (user)
 
                {
 
                    return done(null, false, {
                        message: 'That Name is Already Taken.'
                    });
 
                } else
 
                {

                    var newUserPassword = generateHash(UserPassword);
 
                    var data =
 
                        {
                            UserName: UserName,
 
                            UserPassword: newUserPassword,
 
                            Height: req.body.height,
 
                            CurrentWeight: req.body.cWeight,

                            GoalWeight: req.body.gWeight
 
                        };
 
                    User.create(data).then(function(newUser, created) {
 
                        if (!newUser) {
 
                            return done(null, false);
 
                        }
 
                        if (newUser) {
 
                            return done(null, newUser);
 
                        }
 
                    });
 
                }
 
            });
 
        }
 
    ));


    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
 
    {
 
        // by default, local strategy uses username and password
 
        usernameField: 'UserName',
 
        passwordField: 'Password',
 
        passReqToCallback: true // allows us to pass back the entire request to the callback
 
    },
 
 
    function(req, UserName, Password, done) {
 
        var User = user;
 
        var isValidPassword = function(Password, UserPassword) {

            return bCrypt.compareSync(Password, UserPassword);
 
        }
        
        db.User.findAll({
            where: {
                UserName: UserName
            }
        }).then(function(Password, UserPassword) {
                
                console.log("before if")
                console.log(Password);
                console.log(user.UserPassword);


            if(isValidPassword(Password, user.UserPassword)){
                console.log("after if")
                console.log(Password);
                console.log(user.UserPassword);

                var userInfo = User.get();

                return done (null, userInfo);

            } else  { 

                return done(null, false);
            }
 
        }).catch(function(err){
            console.log(err)
            });
 
    }
 
    ));


}

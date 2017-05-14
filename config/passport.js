//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {


    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
 
  
    passport.use('local-signup', new LocalStrategy(
 
        {
 
            usernameField: 'UserName',
 
            passwordField: 'UserPassword',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },
 
 
 
        function(req, UserName, UserPassword, done) {
 
            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };
 
 
            User.findOne({
                where: {
                    UserName: UserName
                }
            }).then(function(user) {
 
                if (user)
 
                {
 
                    return done(null, false, {
                        message: 'That name is already taken'
                    });
 
                } else
 
                {
 
                    var userPassword = generateHash(password);
 
                    var data =
 
                        {
                            UserName: UserName,
 
                            UserPassword: userPassword,
 
                            Height: req.body.CurrentHeight,
 
                            CurrentWeight: req.body.CurrentWeight,

                            GoalWeight: req.body.GoalWeight
 
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

    //serialize
    passport.serializeUser(function(user, done) {
 
    done(null, user.id);
 
    });

    // deserialize user 
    passport.deserializeUser(function(id, done) {
 
        User.findById(id).then(function(user) {
 
          if (user) {
 
            done(null, user.get());
 
            } else {
 
            done(user.errors, null);
 
         }
 
      });
 
    });
 
}
//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {


    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
 
  
    passport.use('local-signup', new LocalStrategy(
 
        {
 
            usernameField: 'UserName',
 
            passwordField: 'Password',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },
 
 
 
        function(req, UserName, UserPassword, done) {
 
            var generateHash = function(Password) {
 
                return bCrypt.hashSync(Password, bCrypt.genSaltSync(8), null);
 
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
 
                            cWeight: req.body.cWeight,

                            gWeight: req.body.gWeight
 
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
 
        passwordField: 'UserPassword',
 
        passReqToCallback: true // allows us to pass back the entire request to the callback
 
    },
 
 
    function(req, UserName, UserPassword, done) {
 
        var User = user;
 
        var isValidPassword = function(userpass, UserPassword) {
 
            return bCrypt.compareSync(password, userpass);
 
        }
 
        User.findOne({
            where: {
                UserName: UserName
            }
        }).then(function(user) {
 
            if (!user) {
 
                return done(null, false, {
                    message: 'User Name Does Not Exist.'
                });
 
            }
 
            if (!isValidPassword(user.password, password)) {
 
                return done(null, false, {
                    message: 'Incorrect Password.'
                });
 
            }
 
 
            var userinfo = user.get();
            return done(null, userinfo);
 
 
        }).catch(function(err) {
 
            console.log("Error:", err);
 
            return done(null, false, {
                message: 'Something Went Wrong With Your Sign-In.'
            });
 
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

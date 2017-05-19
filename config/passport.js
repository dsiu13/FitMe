//load bcrypt
var bCrypt = require('bcrypt-nodejs');

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
 
        var isValidPassword = function(Password) {
 
            return bCrypt.compareSync(Password, userpass);
 
        }
 
        User.findOne({
            where: {
                UserName: UserName
            }
        }).then(function(UserName) {
 
            if(!isValidPassword(user.UserPassword, Password)){

                return done (null, false);

            } else if (isValidPassword(user.UserPassword, Password)) { 

                var userInfo = User.get();

                return done(null, userInfo);
            }
 
        }).catch(function(err){
            console.log(err)
            });
 
    }
 
    ));


 
}

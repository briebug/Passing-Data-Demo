var JwtStrategy = require('passport-jwt').Strategy;
var opts = {};
var passport = require('passport');

opts.secretOrKey = 'secret';
opts.issuer = "localhost:8282";
opts.audience = "localhost:8282";

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("Finding Users hit");
    //User.findOne({id: jwt_payload.sub}, function(err, user) {
    //    if (err) {
    //        return done(err, false);
    //    }
    //    if (user) {
    //        done(null, user);
    //    } else {
    //        done(null, false);
    //        // or you could create a new account
    //    }
    //});
}));
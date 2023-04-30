const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../app/models');

//Configure Local Strategy for Passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        //Find the user in the database
        const user = await db.user.findOne({ where: { email: email } });
        if (!user) {
            //If user not found, return error
            return done(null, false, { message: 'Incorrect email or password.' });
        }
        //Verify the password
        if (user.password !== password) {
            //If password not match, return error
            return done(null, false, { message: 'Incorrect email or password.' });
        }
        //If everything is OK, return the user object
        return done(null, user);
    } catch (err) {
        //If error, return error
        return done(err);
    }
}));

//Serialize and Deserialize user Object for Passport
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.user.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;

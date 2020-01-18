const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// Get the Users collection
const Users = mongoose.model("Users");

// Use Passport's "passport-local" strategy
passport.use(
	new LocalStrategy((email, password, done) => {
		Users.findOne({ email })
			.then(user => {
				// Use the validatePassword method defined in the User model
				if (!user) {
          return done(null, false, { message: 'That email is not registered'});
        } 
        if (!user.verifyPassword(password)) {
          return done(null, false, { message: 'That password is incorrect' });
        } 

				return done(null, user);
			})
			.catch(done);
	})
);
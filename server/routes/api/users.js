const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const Users = mongoose.model("Users");

/**
 * @route         POST /register
 * @description   
 * 
 * The user does NOT need to be authenticated to use this route
 */
router.post("/register", auth.optional, (req, res, next) => {
	const {
		body: { user }
	} = req;
	console.log(user);

	// Error catching if we don't get email or password fields
	if (!user.email) {
		return res.status(400).json({
			errorMessage: "No email provided"
		});
	}

	if (!user.password) {
		return res.status(400).json({
			errorMessage: "No password provided"
		});
	}
	
	if (!(user.firstName && user.lastName && user.phoneNumber)) {
		return res.status(400).json({
		errorMessage: "Please fill in all required fields!"
		})
	}

	user.accountBalance = 0;
	user.roomIDs = [];
	let email = user.email;
	Users.findOne({ email }).then(found_user => {
		// Prevent duplicate users from being created
		if (found_user) {
			return res.status(400).json({
				errorMessage: "User already exists (use a different email)"
			});
		}

		// Save new user in database
		const finalUser = new Users(user);
		console.log(user);
		finalUser.setPassword(user.password);
		finalUser.setPersonalInformation(user.firstName, user.lastName, user.accountBalance, user.phoneNumber);

		return finalUser
			.save()
			.then(() => res.json({ user: finalUser.toAuthJSON() }));
	});
});

/**
 * @route         POST /login
 * @description   
 * 
 * The user does NOT need to be authenticated to use this route
 */
router.post("/login", auth.optional, (req, res, next) => {
	const {
		body: { user }
  } = req;
  console.log("In login route");
  
	// Error catching if we don't get email or password fields
	if (!user.email) {
		return res.status(400).json({
			errorMessage: "No email provided"
		});
	}

	if (!user.password) {
		return res.status(400).json({
			errorMessage: "No password provided"
		});
  }

	return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    console.log("400 error");
    return res.status(400).send(info);
  })(req, res, next);
});

/**
 * @route         GET /current
 * @description    Gets the currently logged-in user
 * 
 * The user needs to be authenticated to use this route
 */
router.get("/current", auth.required, (req, res, next) => {
	const {
		payload: { id }
	} = req;

	return Users.findById(id).then(user => {
		if (!user) {
			console.log("hi")
			return res.status(400).send("Baddy bad");
		}

		return res.json({ user: user.toAuthJSON() });
	});
});

module.exports = router;

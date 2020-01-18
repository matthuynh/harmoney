const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const Users = mongoose.model("Users");

// POST new user route (optional, everyone has access)
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
		finalUser.setPassword(user.password);

		return finalUser
			.save()
			.then(() => res.json({ user: finalUser.toAuthJSON() }));
	});
});

// POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
	const {
		body: { user }
  } = req;
  console.log("In login route");
  
	// Error catching if we don't get email or password fields
	if (!user.email) {
    console.log("Email not given");
		return res.status(400).json({
			errorMessage: "No email provided"
		});
	}

	if (!user.password) {
    console.log("Password not given");
		return res.status(400).json({
			errorMessage: "No password provided"
		});
  }

  console.log("About to run the authenticate code");
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
    return res.status(400);
  })(req, res, next);
});

// GET current route (required, only authenticated users have access)
router.get("/current", auth.required, (req, res, next) => {
	const {
		payload: { id }
	} = req;

	return Users.findById(id).then(user => {
		if (!user) {
			return res.sendStatus(400);
		}

		return res.json({ user: user.toAuthJSON() });
	});
});

// GET current route (required, only authenticated users have access)
router.get("/current/print", auth.required, (req, res, next) => {
	const {
		payload: { id }
	} = req;
	// console.log(req);

	return Users.findById(id).then(user => {
		if (!user) {
			return res.json({ message: "User does not exist" });
		}

		return res.json({ user: "User exists" });
	});
});

module.exports = router;

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session"); // used to create sessions (like in PHP)
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("errorhandler"); // used for handling errors during development
require('dotenv').config()


// Configure isProduction variable
const isProduction = process.env.NODE_ENV === "production";

// Initiate our app
const app = express();

// Configure our app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
		secret: "harmoney-db",
		cookie: { maxAge: 60000 },
		resave: false,
		saveUninitialized: false
	})
);
// TODO: Look into storing sessions in a better way: https://www.npmjs.com/package/express-session

if (!isProduction) {
	app.use(errorHandler());
}

// Configure Mongoose
mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.set("debug", true);

// Models & routes
// Sidenote: the behaviour of 'require' is that it "executes" whatever code is in the module once it has been resolved and loaded
// https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/
require("./models/Users");
require("./config/passport");
app.use(require("./routes"));
app.use("/", require("./routes/index"));
app.use("/rooms", require("./routes/api/rooms"));

// Error handlers & middlewares
if (!isProduction) {
	app.use((err, req, res) => {
		res.status(err.status || 500);

		res.json({
			errors: {
				message: err.message,
				error: err
			}
		});
	});
}

app.use((err, req, res) => {
	res.status(err.status || 500);

	res.json({
		errors: {
			message: err.message,
			error: {}
		}
	});
});

// const PORT = process.env.PORT;
const PORT = 5000;
app.listen(PORT, function() {
	console.log(`Node server listening on port ${PORT}!`);
});

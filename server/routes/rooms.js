const express = require("express");
const router = express.Router();
const url_schema = require("../models/url");

/**
 * @route         GET /create
 * @description   A user can create a room. The user must include their user id when sending the request.
 * From the req, we can get the user id. Create a room and associate it with that user id. Assign an id
 * to this new room. Return the room id.
 */
router.get("/create", async (req, res) => {
	try {
		const url = await url_schema.findOne({ urlHash: req.params.hash });

		if (url) {
			return res.redirect(url.longUrl);
		}
		else {
			// console.log(url);
			// return res.status(404).json('No url found');
			const theHtml = `
				<html>
					<head>
						<title>404 Error</title>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1">
						<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
						<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
					</head>
					<body>
						<div id="reactele">{{{reactele}}}</div>
						<script src="/app.js" charset="utf-8"></script>
						<script src="/vendor.js" charset="utf-8"></script>
					</body>
				</html>
				`;
			const hbsTemplate = hbs.compile(theHtml);
			const reactComp = renderToString(<App error={true}/>);
			const htmlToSend = hbsTemplate({ reactele: reactComp });
			res.send(htmlToSend);
		}
	} catch (err) {
		console.error(err);
		res.status(500).json("Server error");
	}
});

/**
 * @route         GET preview/:hash
 * @description   Display a preview of the URL to the user before redirecting to the original URL
 */
router.get("/join/:room_id", async (req, res) => {
	let errorBool;
	let short;
	try {
		// Check if the short URL exists in the database
		const url = await url_schema.findOne({ urlHash: req.params.hash });
		if (url) {
			errorBool = false;
			short = url.longUrl;
		} else {
			errorBool = true;
			short = "";
		}
		const theHtml = `
		<html>
			<head>
				<title>Link Preview</title>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<style> 
					body #reactele{
						height: 100%;
						min-height: 100% ;
					}
				</style> 

				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
				<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
			</head>
			<body>
				<div id="reactele">{{{reactele}}}</div>
				<script src="/app.js" charset="utf-8"></script>
				<script src="/vendor.js" charset="utf-8"></script>
			</body>
		</html>
		`;
		const hbsTemplate = hbs.compile(theHtml);
		const reactComp = renderToString(<App error={errorBool} shortUrl={short}/>);
		const htmlToSend = hbsTemplate({ reactele: reactComp });
		res.send(htmlToSend);

	} catch (err) {
		console.error(err);
		res.status(500).json("Server error");
	}
	
});

module.exports = router;

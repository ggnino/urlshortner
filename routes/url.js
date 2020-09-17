const express = require("express");
const dns = require("dns");
const router = express.Router();
const Shorty = require("../model/shorty");

// GET route that redirects to posted URL
router.get("/:shorty", (req, res) => {
	Shorty.find({ shortUrl: req.params.shorty })
		.sort({ url: 1 })
		.then((data) => {
			res.redirect("http://" + data[0].url);
		})
		.catch((err) => console.log("Error6: " + err));
});

//POST save URL to database
router.post("/", (req, res) => {
	let url = dns.lookup(req.body.url, (err) => {
		if (err) {
			res.status(500).json({ "invaild url": err });
		} else {
			url = new Shorty({
				url: url.hostname,
				shortUrl: req.body.shortUrl,
			});

			url
				.save()
				.then((data) => res.json(data))
				.catch((err) => res.status(400).json(err));
		}
	});
});

module.exports = router;

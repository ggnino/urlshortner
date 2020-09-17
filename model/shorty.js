const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortUrlSChema = new Schema({
	url: { type: String, required: true },
	shortUrl: { type: Number },
});

module.exports = Shorty = mongoose.model("Shorty", shortUrlSChema);

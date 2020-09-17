const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/dBkey");
const mainPage = require("./routes/url");

app.use(express.json());
// Set static folder
app.use(express.static("client"));
// Set Port
const PORT = process.env.PORT || 5000;
// Connect to database
mongoose
	.connect(db.mongoURI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log("Error: " + err));

// Routes
app.use("/", mainPage);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

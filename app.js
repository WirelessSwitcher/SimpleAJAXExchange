// Initializing required libraries:
const express = require("express")
const path = require("path");
const fs = require("fs");
var bodyParser = require("body-parser");

// Initializing App:
const app = express();
const port = process.env.PORT || 3000;

// Setting path for public director
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server Setup
app.listen(port, () => {
	console.clear();
	console.log(`Server is running at ${port}\n`);
});

// Receives the message from the client
app.post("/", function(req, res){
	// Prints the content of the message from the client
	console.log(req.body);
});
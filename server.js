// ======== Require node packages ============

var express = require("express");
var path = require("path");

var app = express();

// Set up PORT:
var PORT = process.env.PORT || 3000;

// Initialize Server:
app.listen(PORT, function() {
    console.log("Server listening on port: " + PORT);
});

// Parse and handle incoming data:
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Provide server access to my public directory for serving my css and images
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.static(path.join(__dirname, "./app/public/assets")));

// Require HTML and API routing files:
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

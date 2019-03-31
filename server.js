// ======== Require node packages ============

var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server listening on port: " + PORT);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

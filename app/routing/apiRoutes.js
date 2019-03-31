var friendData = require("../data/friends.js");

module.exports = function(app) {
	console.log("hello there")
    //etc
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });

    app.post("/api/submit", function(request, response) {
        var person =  {
            name: request.name,
            photo: request.photo,
            answers: request.answers
        }
        friendData.push()
    })
}
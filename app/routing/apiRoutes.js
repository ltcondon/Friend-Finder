var friendData = require("../data/friends.js");

module.exports = function(app) {
	console.log("hello there")
    //etc
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });

    app.post("/api/friends", function(request, response) {
        friendData.push(request.body);

        function findMatch(person) {
            var totalDifference = 0;
            for (var i = 0; i < friendData.length; i++) {
                var friendScore = friendData[i].answers;
                
                for (var j = 0; j < person.answers.length; j++)
                
            }
        }

        findMatch(request.body);
    })
}
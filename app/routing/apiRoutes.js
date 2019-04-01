var friendData = require("../data/friends.js");

module.exports = function(app) {
	console.log("hello there")
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });

    app.post("/api/friends", function(request, response) {
        friendData.push(request.body);

        function findMatch(person) {
            var friendDifference = 0;
            var totalDifference = 0;
            var closestMatch = "";

            for (var i = 0; i < friendData.length; i++) {
                var friendScores = friendData[i].answers;
                
                for (var j = 0; j < person.answers.length; j++) {
                    friendDifference += Math.abs((person.answers[j] - friendScores[j]));
                } 

                if (friendDifference > totalDifference) {
                    totalDifference = friendDifference;
                    closestMatch = friendData[i].name;
                }
            }
            console.log("Total Diff: "+ totalDifference
            + "\nFriend Diff: " + friendDifference
            + "\nClosest Match: " + closestMatch);
        }

        findMatch(request.body);
    })
}
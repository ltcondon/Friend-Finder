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
            var totalDifference = 500;
            var closestMatch;

            for (var i = 0; i < friendData.length; i++) {
                var friendScores = friendData[i].answers;
                var personScores = person.answers;
            
              if (friendData[i].name !== person.name) {

                for (var j = 0; j < personScores.length; j++) {
                    friendDifference += Math.abs((personScores[j] - friendScores[j]));
                } 

                if (friendDifference < totalDifference) {
                    totalDifference = friendDifference;
                    closestMatch = friendData[i];
                }
                
                friendDifference = 0;
              }
            }
            console.log("Total Diff: " + totalDifference
            + "\nFriend Diff: " + friendDifference
            + "\nClosest Match: " + closestMatch.name);

            return closestMatch;
        }

        response.json(findMatch(request.body));

        console.log("post request made" + response)
    })
}
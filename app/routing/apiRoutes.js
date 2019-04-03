// var friendData = require("../data/friends.js");
var neighborhoods = require("../data/friends.js");

// var friendData = []

module.exports = function(app) {
    console.log("hello there")
    
    
    app.get("/api/friends", function(req, res) {
        res.json(neighborhoods);
      });

    app.post("/api/friends", function(request, response) {
        // friendData.push(request.body);

        function findMatch(person) {

            var neighborhoodDifference = 0;
            var totalDifference = 500;
            var closestMatch;

            for (var i = 0; i < neighborhoods.length; i++) {
                var neighborhoodScores = neighborhoods[i].answers;
                var personScores = person.answers;
            
              if (neighborhoods[i].name !== person.name) {

                for (var j = 0; j < personScores.length; j++) {
                    neighborhoodDifference += Math.abs((personScores[j] - neighborhoodScores[j]));
                } 

                if (neighborhoodDifference < totalDifference) {
                    totalDifference = neighborhoodDifference;
                    closestMatch = neighborhoods[i];
                }
                
                neighborhoodDifference = 0;
              }
            }
            console.log("Total Diff: " + totalDifference
            + "\nNeighborhood Diff: " + neighborhoodDifference
            + "\nClosest Match: " + closestMatch.name);

            console.log(closestMatch);

            return closestMatch;
        }

        response.json(findMatch(request.body));

    })
}
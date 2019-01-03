//takes in app as a variable and then routes
//requires the data
const startfriends = require("../data/friends")
//creates a seperate array
let friends=startfriends.slice() 
function setApiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        let newFriend = req.body
        //bestMatch value and index are used the find the most comptaible friend
        let bestMatchValue=50;
        let bestMatchIndex;
        for (let i in friends){
            let tempDifference = compareAnswers(newFriend.scores,friends[i].scores)
            //update the best match if the differnce is smaller than any before it
            if (tempDifference < bestMatchValue){
                bestMatchIndex=i;
                bestMatchValue = tempDifference;
            }   
        }
        let returObject={
            friend:friends[bestMatchIndex],
            difference:bestMatchValue
        }
        res.json(returObject)
        friends.push(newFriend)
    })
    //reset function
    app.post("/api/reset", function (req,res){
        friends=startfriends.slice()
        console.log(startfriends)
    })
}
//takes in two arrays of the same length and returns their differnce
function compareAnswers(arry1,arry2){
    totalDif=0
    for (let i in arry1){
        
        totalDif += Math.abs(Number(arry1[i]) -Number(arry2[i]))
    }
    
    return totalDif
}




module.exports=setApiRoutes
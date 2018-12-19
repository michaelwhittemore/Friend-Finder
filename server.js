//require necessary modules
let express = require("express")
let path = require("path")
//set up express
let app = express();
let PORT = 3000;
//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//---Routes------
//sends the user to the survey page
app.get("/api/friends",function(req,res){
    res.json(friends)
})
app.post("/api/friends",function(req,res){
    var newFriend = req.body
    console.log(newFriend)
    friends.push(newFriend)
})


app.get("/survey",function(req, res){
    res.sendFile(path.join(__dirname,"app/public/survey.html"))
})
//sends the user to the home page for any default
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"))
})





//Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


//dummmy data
let friends=[
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
        },
        {
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
        ]
        },
        {
        "name": "Jeremiah Scanlon",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        "scores": [
        "5",
        "2",
        "2",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
        ]
        }
]
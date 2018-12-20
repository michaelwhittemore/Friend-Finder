//require necessary modules
let express = require("express")
let apiRoutes = require("./app/routing/apiRoutes")
let htmlRoutes = require("./app/routing/htmlRoutes")
//set up express
let app = express();
let PORT = process.env.PORT || 3000;
//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//---Routes------
//set up the api routes
apiRoutes(app)
htmlRoutes(app)


//Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



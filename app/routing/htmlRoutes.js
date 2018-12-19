//takes in app as a variable and then routes
//requires path
let path = require("path")
function setHTMLRoutes(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
    //sends the user to the home page for any default
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
}
module.exports=setHTMLRoutes
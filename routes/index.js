// Michael Macari
// Index of routes
const login = require("./login")

const constructorMethod = (app) => {
    app.get("/", (req, res) => {
        
        // TODO: Check authentication
        // If user is authenticated: redirect to /private
        // If the user is not authenticated: Render a view with login for a username and password. The form used to submit the POST request to the server must have an id of login-form.
        // The input of the username must have a name / id of username; the input for password must have name/id of password
        
        // A user that is authenticated should not see login screen
        res.redirect("/login")
    })

    // Provides login route
    app.use("/login", login)
    
    // All else send 404
    app.use("*", (req, res) => {
        // 404 Not found page if we enter invalid URL
        res.sendStatus(404)
    })
}

module.exports = constructorMethod
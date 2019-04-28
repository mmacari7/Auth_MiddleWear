// Michael Macari
// Index of routes
const login = require("./login")
const private = require("./private")
const logout = require("./logout")

const constructorMethod = (app) => {

    app.get("/", (req, res) => {
        // Check authentication
        // If user is authenticated via cookie redirect to private
        if(req.cookies.AuthCookie){
            res.redirect("/private")
            return
        }
        // Otherwise redirect the user to the login page
        else{
            res.redirect("/login")
            return
        }
    })

    // Provides login route
    app.use("/login", login)
    // Provides private route
    app.use("/private", private)
    // Provides logout route
    app.use("/logout", logout)
    
    // All else send 404
    app.use("*", (req, res) => {
        // 404 Not found page if we enter invalid URL
        res.sendStatus(404)
    })
}

module.exports = constructorMethod
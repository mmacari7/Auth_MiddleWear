// Michael Macari
// Index of routes
const login = require("./login")
const private = require("./private")
const logout = require("./logout")

const constructorMethod = (app) => {

    // Middleware that will log the routes that are being accessed
    app.use(function(request, response, next){
        let curtime = new Date().toUTCString()
        let curMethod = request.method
        let routeReq = request.originalUrl
        let authString = ""
        if(request.session.loggedin){
            authString = "(Authenticated User)"  
        }
        else{
            authString = "(Non-Authenticated User)"
        }
        console.log('[' + curtime + ']: ' + curMethod + ' ' + routeReq + ' ' + authString)
        next()
    })

    app.get("/", (req, res) => {
        // Check authentication redirect to private if logged in, otherwise render the login page
        if(req.session.loggedin === true){
            res.redirect("/private")
        }
        else{
            res.render("login/login")
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
// Michael Macari
// Authentication and Middlewear

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const exphbs = require("express-handlebars")
const Handlebars = require('handlebars')
const cookieParser = require('cookie-parser')
const session = require("express-session")

const configRoutes = require("./routes")

const handlebarsInstance = exphbs.create({
    extname: 'hbs',
    defaultLayout: "main",
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
              return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
      
            return new Handlebars.SafeString(JSON.stringify(obj));
          }
    },
})

// Tells app to use the cookie parser
app.use(cookieParser())
// Downloads public directory for use of JS etc on client side
app.use("/public", express.static(__dirname + "/public"))
// Request body parser for use of the app
app.use(bodyParser.json())
// Encoded URL body parser for use of the app
app.use(bodyParser.urlencoded({extended: true}))

// Set the engine of the app
app.engine('hbs', handlebarsInstance.engine)
app.set('view engine', 'hbs')

// Initialize express-session middlewear for cookie
app.use(session({
    name: "AuthCookie",
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true
}))

configRoutes(app);

// Sets up our listener
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
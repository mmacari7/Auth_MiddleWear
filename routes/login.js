// Michael Macari
// Route to be able to login

const express = require("express")
const router = express.Router()
const users = require("../data/users")

router.get("/", async (req, res) => {
    res.render("login/login")
})

router.post("/", async (req, res) => {
    // Check if user name is in users
    for(let i=0; i < users.length; i++){
        // If the user name is in users then we set a cookie and render the private page
        if(users[i].username === req.body.username){
            console.log("Correct user name,, setting AuthCookie")
            res.cookie("AuthCookie", "True")
            res.redirect("/")
            return
        }
    }
    console.log("Incorrect Username or password")
    res.render("login/login")
})

module.exports = router

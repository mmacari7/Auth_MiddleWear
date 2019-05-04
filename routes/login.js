// Michael Macari
// Route to be able to login

const express = require("express")
const router = express.Router()
const users = require("../data/users")
const bcrypt = require("bcrypt")


router.post("/", async (req, res) => {
    // Check if user name is in users
    for(let i=0; i < users.length; i++){
        // If the user name is valid and found in the data base
        if(users[i].username === req.body.username){
            // Compare the passwords of the user to the hashedPassword that is stored
            let hashcmp = await bcrypt.compare(req.body.password, users[i].hashedPassword)
            if(hashcmp){
                // Set the cookie and authenticate the login
                req.session.userId = String(users[i]._id)
                req.session.loggedin = true
                // Redirect to private
                res.redirect("/private")
                return
            }
            // If the passwords dont match --> break the loop
            else{
                break
            }
        }
    }

    // Otherwise we display an error that the user name or password is wrong and rerender the login with status and option
    res.status(401).render("login/login", {error: "Error, incorrect user name or password"})
    return
})

module.exports = router
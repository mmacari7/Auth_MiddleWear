// Michael Macari
// Route to access private

const express = require("express")
const router = express.Router()
const users = require("../data/users")

// Checks if there is a session logged in set to true indicating user is authenticated
router.use(function(request, response, next){
    // If we are logged in fall through to the private route
    if(request.session.loggedin === true){
        next()
    }
    // Otherwise render the error page
    else{
        response.status(403).render("private/privatenoauth")
    }
})

router.get("/", async (req, res) => {
    // Route should not be reached until login authentication is checked
    // If user is logged in with AuthCookie, render view that displays details EXCEPT PASSWORD
    for(let i=0; i < users.length; i++){
        if(String(req.session.userId) === String(users[i]._id)){
            res.render("private/private", {user: users[i]})
            return
        }
    }
    
    res.send("Error")
    return
})

module.exports = router
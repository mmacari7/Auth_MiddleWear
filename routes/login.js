// Michael Macari
// Route to be able to login

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    res.render("login/login")
})

router.post("/", async (req, res) => {

    // If info is valid, set AuthCookie and redirect to private
    // Otherwise if info is incorrect reload the page
    

    console.log("ENTERED LOGIN SHIT")
    console.log(req.body)
    res.render("login/login")
})

module.exports = router

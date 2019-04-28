// Michael Macari
// Route to access private

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    // Check for AuthCookie
    // If user is logged in with AuthCookie, render view that displays details EXCEPT PASSWORD
    // Render hyperlink to log out
    res.render("private/private")
})

module.exports = router

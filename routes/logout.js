// Michael Macari
// Route to log the user out

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    res.clearCookie("AuthCookie")
    res.render("logout/logout")
    return
})

module.exports = router

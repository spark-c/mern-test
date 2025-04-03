import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to the main page!")
});

router.get("/hello", (req, res) => {
    res.send("Hello to you too!")
})

router.get("/testpage", (req, res) => {
    res.sendFile(__dirname + "/testpage.html")
})

module.exports = router
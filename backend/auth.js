const express = require('express')
const auth = express.Router()

auth.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body

        console.log(name, email, password)
        res.send('hit auth rotue')
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = auth
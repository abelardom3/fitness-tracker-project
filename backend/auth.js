const express = require('express')
const auth = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const pool = require('./conn')


auth.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const { rows } = await pool.query('SELECT * FROM fit_accounts WHERE email = $1', [email])
        if (rows.length !== 0) {
            res.send('alreayd exist')
        } else {
            const hashPassword = await bcrypt.hash(password, 10)
            await pool.query('INSERT INTO fit_accounts(name, email, password) VALUES($1,$2,$3)', [name, email, hashPassword])
        }
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = auth
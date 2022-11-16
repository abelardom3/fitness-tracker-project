const express = require('express')
const auth = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const pool = require('./conn')
const validLogin = require('./validInfo')
const { check, validationResult } = require('express-validator')
require('dotenv').config()


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





auth.post('/login', validLogin, async (req, res) => {
    const { email, password } = req.body
    const errors = validationResult(req).formatWith(({ msg }) => msg)

    try {
        if (!errors.isEmpty()) {
            res.json({ errors: errors.mapped() })
        } else {
            const { rows } = await pool.query('SELECT * FROM fit_accounts WHERE email = $1', [email])
            if (rows.length === 0) return res.send({ msg: 'Account not found' });


            const user = rows[0]
            const isAuth = await bcrypt.compare(password, user.password)

            if (!isAuth) {
                return res.send({ msg: 'Incorrect Password' })
            } else {

                const accessToken = jwt.sign({ userId: user.user_id }, process.env.ACCESS_TOKEN_SECRET)
                return res.send({ accessToken: accessToken })
            }

        }
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = auth
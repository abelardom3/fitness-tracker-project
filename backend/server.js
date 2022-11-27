const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./conn')
const authRoute = require('./auth')
require('dotenv').config()

const port = process.env.PORT || 8000


app.use(cors())
app.use(express.json())
app.use('/auth', authRoute)


app.get('/api/logs/:id', async (req, res) => {
    const { id } = req.params

    try {
        const { rows } = await pool.query("SELECT fit_id, workout, duration, TO_CHAR(date, 'Mon dd, yyyy') FROM fitness_tracker WHERE user_id=$1", [id])
        res.send(rows)
    } catch (error) {
        res.send(error.message)
    }
})


app.get('/api/logs/testing', async (req, res) => {
    const { id } = req.params
    try {
        const { rows } = await pool.query('SELECT * FROM fitness_tracker WHERE fit_id =$1;', [id])
        res.send(rows)
    } catch (error) {
        res.send(error.message)
    }
})



app.post('/api/logs', async (req, res) => {
    const { workout, duration, date, userId } = req.body
    try {
        await pool.query('INSERT INTO fitness_tracker(workout,duration,date, user_id)VALUES($1,$2,$3,$4)', [workout, duration, date, userId])
        res.send('it got add')
    } catch (error) {
        res.send(error.message)
    }
})




app.put('/api/logs/:id', async (req, res) => {
    const { workout, duration, to_char } = req.body
    const { id } = req.params

    try {
        await pool.query('UPDATE fitness_tracker SET workout=$1,duration=$2, date=$3 WHERE fit_id =$4 ', [workout, duration, to_char, id])
        res.send('it got edit')
    } catch (error) {
        res.send(error.message)
    }
})




app.delete('/api/logs/:id', async (req, res) => {
    const { id } = req.params
    try {
        await pool.query('DELETE FROM fitness_tracker WHERE fit_id=$1;', [id])
        res.send('deleted')
    } catch (error) {
        res.send(error.message)
    }

})




app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})





require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    return res.json('Ok!')
})

app.listen(3000, () => { console.log(process.env.THIAGO) })
const express = require('express')
require('dotenv').config()
const app = express()
const env = process.env
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/get', (req, res) => {
    res.send('Hello World ! ')
})

app.listen(env.PORT, () => {
    console.log(`Example app listening on port ${env.PORT}`)
})
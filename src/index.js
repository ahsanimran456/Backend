import express from 'express'
import { config } from 'dotenv';
import ConnectDB from './db/index.js';
config();
const app = express()
const env = process.env

ConnectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(env.PORT, () => {
    console.log(`Example app listening on port ${env.PORT}`)
})
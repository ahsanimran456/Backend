import express from 'express'
import { config } from 'dotenv';
import ConnectDB from './db/index.js';
import app from './app.js';
config();
const env = process.env

ConnectDB()
    .then(() => {
        app.listen(env.PORT, () => {
            console.log(`App listening on port ${env.PORT}`)
        })
    }).catch((err) => {
        console.log(`Mongodb Connection Failed error: ${err}`);
    })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

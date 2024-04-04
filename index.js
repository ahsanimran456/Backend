import express from 'express'
import { config } from 'dotenv';
config();
const app = express()
const env = process.env


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/get', (req, res) => {
    const data = [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
        "furniture",
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
        "automotive",
        "motorcycle",
        "lighting"
    ]
    res.send(data)
})

app.listen(env.PORT, () => {
    console.log(`Example app listening on port ${env.PORT}`)
})
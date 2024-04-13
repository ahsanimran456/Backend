import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

app.use(express.json({ limit: "16kb" }))


export default app;
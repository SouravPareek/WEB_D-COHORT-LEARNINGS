const express = require('express')
const cookiePareser = require('cookie-parser')
const cors = require("cors")


const app = express();
app.use(express.json())
app.use(cookiePareser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

/**
 * Routes
 */

const authRoutes = require('./routes/auth.routes')

app.use("/api/auth", authRoutes)


module.exports = app;
const express = require('express')
const cookiePareser = require('cookie-parser')

const app = express();
app.use(express.json())
app.use(cookiePareser())

/**
 * Routes
 */

const authRoutes = require('./routes/auth.routes')

app.use("/api/auth", authRoutes)


module.exports = app;
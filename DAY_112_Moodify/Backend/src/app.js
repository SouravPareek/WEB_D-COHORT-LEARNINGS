const express = require('express')
const cookiePareser = require('cookie-parser')


const app = express();

app.use(express.json())
app.use(cookiePareser())


module.exports = app;
const express = require("express");
const cookieParser = require('cookie-parser')

/*require route */
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')

const app = express();
app.use(express.json());
app.use(cookieParser())

/*using router */
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/user", userRouter)

module.exports = app;
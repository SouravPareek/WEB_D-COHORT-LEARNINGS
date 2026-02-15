/*
    --server start karna
    --db se connect karna
*/

require("dotenv").config()

const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDB() {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to Database")
        })
        .catch((err) => {
            console.error("DB connection failed:", err)
        })
}

connectToDB()

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT)
})

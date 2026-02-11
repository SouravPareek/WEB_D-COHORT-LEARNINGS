const express = require("express")

const app = express() // create instance of server

app.get('/', (req, res)=>{
    res.send("Hello there")
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})
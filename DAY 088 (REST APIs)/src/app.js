/*
- server create karna
- server config karna
*/

const express = require("express")

const app = express()/*server create ho jata ha*/


const notes = [
    {
        title : "test title 1",
        description : "test description 1"
    }
];

app.get("/", (req, res)=>{
    res.send("hello ji")
});

app.post("/notes", (req, res)=>{
    console.log(req.body);
    
    res.send("note created")
});

module.exports = app /*server export karna */
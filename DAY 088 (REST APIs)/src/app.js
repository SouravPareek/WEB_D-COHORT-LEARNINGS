/*
- server create karna
- server config karna
*/

const express = require("express")

const app = express()/*server create ho jata ha*/

app.use(express.json())

const notes = [
    // {
    //     title : "test title 1",
    //     description : "test description 1"
    // }
];

app.get("/", (req, res)=>{
    res.send("hello ji")
});

app.post("/notes", (req, res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes)
    res.send("note created")
});


app.get("/notes", (req, res)=>{
    res.send(notes)
});


//without : req.params doesnt work
app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index];

    res.send(`note ${req.params.index} deleted successfully`)
})

app.patch("/notes/:index", (req, res)=>{
    notes[req.params.index].description  = req.body.description

    res.send("note updated successfully")
})

module.exports = app /*server export karna */
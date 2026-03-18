const express = require('express')
const noteModel = require("./models/notes.model")

const app = express()
app.use(express.json())

// POST /notes
app.post("/notes", async (req, res)=>{
    const {title, description, price} = req.body

    const note = await noteModel.create({
        title, description, price
    })

    res.status(201).json({
        messgae:"Note created successfully",
        note
    })
})

//GET /notes
// fetch all the nodes data
app.get("/notes", async (req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"Note read successfully",
        notes
    })
})

module.exports = app
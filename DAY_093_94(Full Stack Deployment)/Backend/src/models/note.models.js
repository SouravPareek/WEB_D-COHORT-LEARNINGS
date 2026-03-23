const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})


const noteModel = mongoose.model("notes", noteSchema) //notes is the name of collection where our data will be stored in specified format

module.exports = noteModel
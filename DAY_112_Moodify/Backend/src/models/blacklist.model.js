const mongoose = require('mongoose')

const blackListSchema = new mongoose.Schema({
    token:{
        type: String,
        required:[true, "token is required for blacklisting"]
    }
},{
    timestamps: true //will store time at which token got blacklisted
})

const blackListModel = mongoose.model('blackList', blackListSchema)

module.exports = blackListModel
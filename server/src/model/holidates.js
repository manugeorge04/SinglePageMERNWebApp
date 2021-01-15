const mongoose = require('mongoose')

const HolidatesSchema = new mongoose.Schema({
    occasion:{
        type: String
    },
    location:{
        type: Array
    },
    date:{
        type: String
    }
})

const Holidates = mongoose.model('Holidates', HolidatesSchema)

module.exports = Holidates
const mongoose = require('mongoose')

const sergeSchema = new mongoose.Schema({
    
    name: {type: String, required: true},
    modFunction: String,
    description: String,
    img: String,
    audioOutput: String,
    voltageMax: {type: Number, required: true},
    voltageMin: {type: Number, required: true},
    acceptsNegative: {type: Boolean, default: false},
    isModule: {type: Boolean, default: true}
})

const Serge = mongoose.model('Serge', sergeSchema)

module.exports = Serge
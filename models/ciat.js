const mongoose = require('mongoose')

const ciatSchema = new mongoose.Schema({
    
    name: {type: String, required: true},
    modFunction: String,
    description: String,
    img: String,
    audioOutput: String,
    voltageMax: {type: Number, required: true},
    voltageMin: {type: Number, required: true},
    acceptsNegative: {type: Boolean, default: false},
    
})

const Ciat = mongoose.model('Ciat', ciatSchema)

module.exports = Ciat
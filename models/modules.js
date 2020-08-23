const mongoose = require('mongoose')

const moduleSchema = new mongoose.Schema({
    
    brand: {type: String, required: true},
    model: Number,
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

const Module = mongoose.model('Module', moduleSchema)

module.exports = Module
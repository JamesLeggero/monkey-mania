const mongoose = require('mongoose')

const buchlaSchema = new mongoose.Schema({
    model: {type: Number, required: true},
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

const Buchla = mongoose.model('Buchla', buchlaSchema)

module.exports = Buchla
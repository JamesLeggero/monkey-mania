const mongoose = require('mongoose')

const buchlaSchema = new mongoose.Schema({
    model: {type: Number, required: true},
    name: {type: String, required: true},
    function: String,
    description: String,
    img: String,
    voltageMax: Number,
    voltageMin: Number,
    acceptsNegative: {type: Boolean, default: false},
    isModule: {type: Boolean, default: true}
})

const Buchla = mongoose.model('Buchla', buchlaSchema)

module.exports = Buchla
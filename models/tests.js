const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isPerson: Boolean
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test
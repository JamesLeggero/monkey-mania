const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    
    moduleName: {type: String, required: true},
    commenterName: String,
    commentText: {type: String, required: true}
    
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
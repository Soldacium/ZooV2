const mongoose = require('mongoose');
const Comment =  require('./comment').schema;

//makin schemas with mongoose
const postSchema = mongoose.Schema({
    title: String,
    tags: [String],
    date: String,
    content: String,
    summary: String,
    comments: [], // comment
    hasEvent: Boolean,
    imageUrl: String

});



module.exports = mongoose.model('Post', postSchema);
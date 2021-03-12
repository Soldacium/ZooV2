const mongoose = require('mongoose');
const Comment =  require('./comment').schema;

//makin schemas with mongoose
const postSchema = mongoose.Schema({
    title: String,
    tags: [String],
    date: String,
    content: String,
    summary: String,
    comments: [Comment],
    relatedEventID: String,
});



module.exports = mongoose.model('Post', postSchema);
const mongoose = require('mongoose');

//makin schemas with mongoose
const commentSchema = mongoose.Schema({
    comment: {type: String, required: true},
    date: {type: String, required: true},
    responses: {type: [{
        comment: String,
        date: String,
    }], required: true}
});

module.exports = mongoose.model('Comment', commentSchema);
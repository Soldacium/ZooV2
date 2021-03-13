const mongoose = require('mongoose');

//makin schemas with mongoose
const eventSchema = mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    description: {type: String, required: true},
    relatedPostID: {type: String, required: true}  
});

module.exports = mongoose.model('Event', eventSchema);
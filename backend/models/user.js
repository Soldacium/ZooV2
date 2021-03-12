const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//makin schemas with mongoose
const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique:  true},
    password: {type: String, required: true},
    username: {type: String, required: true},
    fullRights: {type: Boolean, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
// import
const mongoose = require('mongoose');
// user Schema
const userSchema = mongoose.Schema({
    email: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true }, // Added username field
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema);

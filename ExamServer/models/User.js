const mongoose = require('mongoose');
const fieldsErrorMessage = 'All fields are required';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, fieldsErrorMessage],
        minLength: [4, 'Username must be at least 4 characters long'],
    },
    email: {
        type: String,
        required: [true, fieldsErrorMessage],
        validate: [/^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+/, 'Email must follow name@domain.extension format'],
    },
    password: {
        type: String,
        required: [true, fieldsErrorMessage],
        minLength: [4, 'Password must be at least 4 characters long'],
    },
});

module.exports = mongoose.model('User', userSchema);
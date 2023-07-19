const { check } = require('express-validator');

const addPostValidator = [
    check('title')
        .not().isEmpty()
        .withMessage('Post title is required!')
        .isLength({
            min: 3,
            max: 25
        })
        .withMessage('Post title must be between 3 and 15 characters long!')
        .trim()
        .escape(),

    check('content')
        .not().isEmpty({ ignore_whitespace: false })
        .withMessage('Post content is required!')
        .isLength({
            min: 10,
            max: 350
        })
        .withMessage('Post content must be between 10 and 350 characters long')
        .trim()
        .escape()
]

module.exports = {
    addPostValidator
};
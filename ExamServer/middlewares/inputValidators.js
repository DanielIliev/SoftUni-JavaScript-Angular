const { check } = require('express-validator');

const usernameValidators =
    check('username')
        .not().isEmpty().withMessage('Username is required!')
        .isLength(
            {
                min: 3,
                max: 25
            }
        ).withMessage('Username must be between 3 and 25 characters long!')
        .trim()
        .escape()

const emailValidators =
    check('email')
        .not().isEmpty().withMessage('Email is required!')
        .isEmail().withMessage('Email must be a valid email address!')
        .trim()
        .escape()

const passwordValidators =
    check('password')
        .not().isEmpty().withMessage('Password is required!')
        .isLength({
            min: 4
        }).withMessage('Passwords must be at least 4 characters long!')
        .trim()
        .escape()


const repeatPasswordValidators =
    check('repass')
        .not().isEmpty()
        .withMessage('Repeat password is required!')
        .trim()
        .escape()

const registerValidators = [
    usernameValidators,
    emailValidators,
    passwordValidators,
    repeatPasswordValidators
];

module.exports = {
    registerValidators,
};
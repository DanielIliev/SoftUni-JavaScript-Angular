// This is an example of a get request with JWT verification
const router = require('express').Router();
const authorizedUser = require('../middlewares/authorizationMiddleware');

router.get('/dummy', authorizedUser, (req, res) => {
    res.json('You are authorized');
    res.end();
});

module.exports = router;
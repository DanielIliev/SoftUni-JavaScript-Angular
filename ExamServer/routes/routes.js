const router = require('express').Router();

const authController = require('../controllers/authController.js');

router.use(authController);

module.exports = router;
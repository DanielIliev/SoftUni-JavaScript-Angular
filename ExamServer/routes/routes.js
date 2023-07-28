const router = require('express').Router();

const authController = require('../controllers/authController.js');
const dummyController = require('../controllers/dummyController.js');

router.use(authController);
router.use(dummyController);

module.exports = router;
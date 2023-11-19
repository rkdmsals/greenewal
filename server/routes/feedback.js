var express = require('express');
var router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.get('/', feedbackController.readAll);

module.exports = router;
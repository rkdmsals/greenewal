var express = require('express');
var router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.get('/', feedbackController.readAll);
router.post('/', feedbackController.write);
router.delete('/', feedbackController.delete);

module.exports = router;
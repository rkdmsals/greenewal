var express = require('express');
const FeedbackRouter = express.Router();
const feedbackController = require('../controllers/feedbackController');

FeedbackRouter.get('/read', feedbackController.readAll);
FeedbackRouter.post('/upload', feedbackController.write);
FeedbackRouter.delete('/delete', feedbackController.delete);

module.exports = FeedbackRouter;
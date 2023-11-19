const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    content: {type: String, required: true},
},
{
    timestamps: true,
    collection: 'feedbacks'
},
);

feedbackSchema.statics.findAll = function() {
    return this.find({});
};

module.exports = module.exports = mongoose.model('feedback', feedbackSchema);
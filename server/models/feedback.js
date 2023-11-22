const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    content: {type: String, required: true},
    studentID: {type: String, required: true},
},
{
    timestamps: true,
    collection: 'feedbacks'
},
);

feedbackSchema.statics.findAll = function() {
    return this.find({});
};

feedbackSchema.statics.create = function(payload){
    try {
        const feedback = new this(payload);
        return feedback.save();
    } catch (err){
        return err;
    }
};

feedbackSchema.statics.deleteById = function(payload){
    return this.deleteOne({ _id: payload._id });
};
module.exports = module.exports = mongoose.model('feedback', feedbackSchema);
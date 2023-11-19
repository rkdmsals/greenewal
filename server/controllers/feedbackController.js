const express = require('express');
const Feedback = require('../models/feedback.js');

const feedback = {
    readAll: async (req,res) => {
        const feedbacks = await Feedback.findAll();
        try {
            if (!feedbacks.length)
                return res.status(404).send({
                    err: 'feedback not found'
                });
            res.send(feedbacks);
        } catch (err) {
            res.status(500).send(err)
        }

    },
    write: async (req, res) => {
        try {
            const result = await Feedback.create(req.body);
            console.log("result : ", result);
            res.status(200).send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    }
};

module.exports = feedback;
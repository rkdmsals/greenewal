const express = require('express');
const Feedback = require('../models/feedback.js');

const feedback = {
    readAll: async (req, res) => {
        const feedbacks = await Feedback.findAll();
        try {
            if (!feedbacks)
                return;
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
    },
    delete: async (req, res) => {

        try {
            const result = await Feedback.deleteById(req.body);
            //const result = await Feedback.remove(req.body);
            console.log("result : ", result);
            res.status(200).send(result);

        } catch (err) {
            res.status(500).send(err);
        }
    }
};

module.exports = feedback;
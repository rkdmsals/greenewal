const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: Number,
    },
    quantity: {
        type: Number,
        default: 1,
    },
});

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'userInfo',
        required: true,
    },
    productList: [cartItemSchema],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart };
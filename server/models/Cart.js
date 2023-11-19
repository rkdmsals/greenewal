const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productInCartId: {
        type: Number,
    },
    quantity: {
        type: Number,
        default: 1,
    },
});

const cartSchema = new mongoose.Schema({
    cartId: {
        type: Number,
        unique: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userInfo',
        required: true,
    },
    productList: [cartItemSchema],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart };
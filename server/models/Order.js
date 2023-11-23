const mongoose = require('mongoose');

const purchaseItemSchema = new mongoose.Schema({
    productId: {
        type: Number,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    // price: {
    //     type: Number,
    // }
});

const purchaseSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'userInfo',
        required: true,
    },
    productList: [purchaseItemSchema],

    orderName: {
        type: String,
    },
    orderTime: {
        type: String,
    },
    refundBank: {
        type: String,
    },
    refundAccount: {
        type: String,
    }

});

const Order = mongoose.model('Order', purchaseSchema);

module.exports = { Order };
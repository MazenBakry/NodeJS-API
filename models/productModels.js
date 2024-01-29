const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: [true, "Please enter product quantity"]
        },
        price: {
            type: Number,
            required: [true, "Please enter product price"]
        },
    },
    {
        timestamps: true
    }
)

const product = mongoose.model('Product', productSchema);

module.exports = product;
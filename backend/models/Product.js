const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
});

module.exports = mongoose.model("Product", productSchema);

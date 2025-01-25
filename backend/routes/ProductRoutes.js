const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Search route
router.get("/search", async (req, res) => {
    const query = req.query.query;

    try {
        const products = await Product.find({
            title: { $regex: query, $options: "i" }, // Case-insensitive search
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;

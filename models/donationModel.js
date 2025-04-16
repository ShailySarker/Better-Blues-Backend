const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        amount: Number,
        paymentId: String,
        date: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);
module.exports = Donation;

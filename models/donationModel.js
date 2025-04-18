const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
    {
        name: { type: String , require:true},
        email: { type: String , require:true},
        amount: { type: Number , require:true},
        razorpay_payment_id:{ type: String , require:true},
        date: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);
module.exports = Donation;

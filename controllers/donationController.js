const Donation = require("../models/donationModel");

const saveDonation = async (req, res) => {
    try {
        const { name, email, amount, address, razorpay_payment_id } = req.body;
        const donation = new Donation({ name, email, amount, address, razorpay_payment_id });
        await donation.save();
        res.status(200).json({ success: true, message: "Donation saved successfully." });
    } catch (err) {
        res.status(500).json({ error: "Failed to save donation." });
    }
};

module.exports = {
    saveDonation
};
const Donation = require("../models/donationModel");

 const saveDonation = async (req, res) => {
  try {
    const { name, email, amount, paymentId } = req.body;

    const donation = new Donation({ name, email, amount, paymentId });
    await donation.save();

    res.status(200).json({ message: "Donation saved successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to save donation." });
  }
};

module.exports = {
    saveDonation
};
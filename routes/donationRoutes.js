const express = require("express");
const router = express.Router();
const { saveDonation } = require("../controllers/donationController");

router.post("/donate", saveDonation);

module.exports = router;
const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('ButterBlueDB Connected !!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

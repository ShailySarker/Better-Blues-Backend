const dotenv = require ('dotenv');
const express = require ('express');
const cors = require ('cors');
const database = require ('./config/connectDB');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
database.connectDB();

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log(`Better Blue running on port ${PORT}`);
});
// Load environment variables
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const connectDB = require("./configuration/dbConfig");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN || "*"  
}));

// Root route for testing
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// API routes
app.use("/api/user", userRoutes);

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

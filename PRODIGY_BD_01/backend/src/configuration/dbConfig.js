const mongoose = require("mongoose");

const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(process.env.MONGO_URI);

            console.log("MongoDB connected successfully");
        } catch (err) {
            console.error("MongoDB connection error:", err);
        }
    }
};

module.exports = connectDB;

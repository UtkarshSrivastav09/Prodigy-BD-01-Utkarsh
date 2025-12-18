const mongoose = require("mongoose"); // Import mongoose library
const db = require("../configuration/dbConfig"); // This ensures DB is connected

// Destructure Schema from mongoose
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: String }
});

// Create model
const User = model("User", userSchema);

module.exports = User;

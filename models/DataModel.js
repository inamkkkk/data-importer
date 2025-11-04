const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    // Define your data schema here based on your data structure
    // Example:
    field1: { type: String, required: true },
    field2: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Data', DataSchema);
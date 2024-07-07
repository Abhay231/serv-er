 

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    birthday: Date
});

module.exports = mongoose.model('Student', studentSchema);

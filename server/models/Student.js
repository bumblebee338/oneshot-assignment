const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    yearofbatch: Number,
    college_id:String,
    skills:String

});
module.exports = mongoose.model('Student', studentSchema);
var mongoose = require('mongoose');

var CollegeSchema = new mongoose.Schema({
    //_id : mongoose.Schema.Types.ObjectId,
    name: String,
    yearoffounded: Number,
    city:String,
    state:String,
    country:String,
    noofstudents:Number,
    courses:String,
    students:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Students"
        }
    ]
});
module.exports = mongoose.model('Colleges', CollegeSchema);
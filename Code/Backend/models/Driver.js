const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({
    
    did : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    lnumber : {
        type : String,
        required : true
    },
    experience : {
        type : Number,
        required : true
    }
})

const Driver = mongoose.model("Driver", driverSchema);
module.exports = Driver;
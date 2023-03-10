const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportSchema = new Schema({
    
    vid : {
        type : String,
        required : true
    },
    vtype : {
        type : String,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    rnumber : {
        type : String,
        required : true
    },
    capacity : {
        type : String,
        required : true
    }
})

const Transport = mongoose.model("Transport", transportSchema);
module.exports = Transport;
// ********************************************************************************************
// Modele et forma de collection MOngoDB
// ********************************************************************************************

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var roomSchema = new Schema (
    {
        captureRoom: {type: String, required: true},
        typeRoom:{type:String, required:true},
        lstReservations:[]
    }
);
roomSchema.set('collection','Rooms')

module.exports = mongoose.model('colRoom',roomSchema);


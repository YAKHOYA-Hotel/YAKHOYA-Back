const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var hotelSchema = new Schema (
    {
        nameHotel:  {type: String, required: true},
        adressHotel:{type:String, required:true},
        CPHotel:    {type: Number,required: true},
        cityHotel:  {type:String,required: true},
        nbrChambresDoubles: Number,
        nbrChambresSimple: Number,
        nbrChambresFamilliales: Number,
        nbrChambresPresidentilles: Number,
        lstReservationsHotel:[]
    }
);

hotelSchema.set('collection','Hotels')

module.exports = mongoose.model('Hotel',hotelSchema);

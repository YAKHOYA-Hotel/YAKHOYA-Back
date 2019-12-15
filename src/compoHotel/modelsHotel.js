const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var hotelSchema = new Schema (
    {
        nameHotel:  {type: String, required: true},
        adressHotel:{type:String, required:true},
        CPHotel:    {type: String,required: true},
        cityHotel:  {type:String,required: true},
        telHotel:   {type:String,required: true}
    }
);

hotelSchema.set('collection','Hotels')

module.exports = mongoose.model('Hotel',hotelSchema);

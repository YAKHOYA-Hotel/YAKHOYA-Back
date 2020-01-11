const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var reservationSchema = new Schema (
    {
        dateEntre: {type: Date, required: true},
        dateSortie:{type:Date, required:true},
        idClient:{type: String, required: true},
        idHotel:{type:String, required: true},
        typeRoom:{type:String}
    }
);
reservationSchema.set('collection','Reservations')

module.exports = mongoose.model('colReservation',reservationSchema);


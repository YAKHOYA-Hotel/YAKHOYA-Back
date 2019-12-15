const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var reservationSchema = new Schema (
    {
        dateEntre: {type: String, required: true},
        dateSortie:{type:String, required:true},
        idClient:{type: String, required: true},
        idChambre:{type:String, required: true}
    }
);
reservationSchema.set('collection','Reservations')

module.exports = mongoose.model('colReservation',reservationSchema);


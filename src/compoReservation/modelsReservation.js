const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var reservationSchema = new Schema (
    {
        dateEntre: {type: Date, required: true},
        dateSortie:{type:Date, required:true},
        idClient:{type: String, required: true},
        idChambre:{type:String, required: true}
    }
);
reservationSchema.set('collection','Reservations')

module.exports = mongoose.model('colReservation',reservationSchema);


const colReservation  = require('./modelsReservation');
const processReservation = require('./processReservation');

module.exports={
    actionShowAllReservations:(req,res)=>{
        processReservation.processShowAllReservations()
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            res.status(400).send("There was a problem finding the reservation.")
        })
    },

    actionShowOnereservation:(req,res)=>{
        processReservation.processShowOneReservation(req.params.id)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            if(err==404) res.status(err).send("Not found reservation") 
            if(err==400) res.status(err).send("There was a problem finding the reservation.")
        })
    },

    actionPostOneReservation:(req,res)=>{
        let myReservation= new colReservation({
            dateEntre: req.body.dateEntre,
            dateSortie:req.body.dateSortie,
            idClient:req.body.idClient,
            idChambre:req.body.idChambre
        });
        processReservation.processAddOneReservation(myReservation)
        .then((result)=>{
            res.status(200).send(JSON.stringify(result))
        })
        .catch((err)=>{
            res.status(err).send("There was a problem adding the informations to the database.")
        })
    },  

    actionUpdateOneReservation:(req,res)=>{
        
    },

    actionDeleteOneReservation:(req,res)=>{
        processReservation.processDeleteOneReservation(req.params.id)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            if (err==404) res.status(err).send("No reservation found.")
            if (err==400) res.status(err).send("There was a problem deleting the reservation.")
        })
    }
}
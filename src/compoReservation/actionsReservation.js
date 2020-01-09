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
            dateEntre:new Date(req.body.dateEntre),
            dateSortie:new Date(req.body.dateSortie),
            idClient:req.body.idClient,
            idHotel:req.body.idHotel,
            typeRoom:req.body.typeRoom
        });
        processReservation.processAddOneReservation(myReservation,req.body.idClient,req.body.idHotel)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            if(err=="Find reservations methode problem"){ res.status(400).send(err) }
            if(err=="Not found hotel"){ res.status(404).send(err) }
            if(err=="FindOne hotel methode problem"){ res.status(400).send(err) }
            if(err=="Not found user"){ res.status(404).send(err) }
            if(err=="Find one user methode problem"){ res.status(400).send(err) }
            if(err=="FindOne user methode problem"){ res.status(404).send(err) }
            if(err=="Save reservation methode problem"){ res.status(400).send(err) }
        })
    },  

    actionUpdateOneReservation:(req,res)=>{
        
    },

    actionDeleteOneReservation:(req,res)=>{
        processReservation.processDeleteOneReservation(req.params.id)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((errorUser)=>{
            if(errorUser=="Not found user"){  res.status(404).send(errorUser) }
            if(errorUser=='FindOne User methode problem'){ res.status(400).send(errorUser) }
            if(errorUser=="Update user methode problem"){ res.status(400).send(ererrorUser) }
            if(errorUser=="Find one reservation methode problem"){ res.status(400).send(errorUser) }
            if(errorUser=="DeleteOne reservation methode problem"){ res.status(400).send(errorUser) }
            if(errorUser=="Not found reservation"){  res.status(404).send(errorUser) }
        })
    }
}
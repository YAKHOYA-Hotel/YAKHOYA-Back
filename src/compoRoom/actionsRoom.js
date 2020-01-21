// ********************************************************************************************
// Dans ce module on : décomposer la requête reçut du front et on fait appel à notre processus 
// L'intelligence de notre API Rest 
// ********************************************************************************************

const colRoom  = require('./modelsRoom');
const processRoom = require('./processRoom');

module.exports={
    actionShowAllRooms:(req,res)=>{
        processRoom.processShowAllRooms()
        .then((allRooms)=>{
            res.status(200).send(allRooms)             
        })
        .catch((err)=>{
            res.status(err).send("There was a problem finding the room.");
        })
    },

    

    actionShowOneRoom:(req,res)=>{
        processRoom.processShowOneRoom(req.params.id)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            if(err==404) res.status(err).send("Not found room") 
            if(err==400) res.status(err).send("There was a problem finding the room.")
        })
    },

    actionPostOneRoom:(req,res)=>{
        let myRoom= new colRoom({
            captureRoom: req.body.captureRoom,
            typeRoom:req.body.typeRoom,
            lstReservations: req.body.lstReservations
        });
        processRoom.processAddOneRoom(myRoom)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            res.status(err).send("There was a problem adding the informations to the database.")
        })
    },  

    actionUpdateOneRoom:(req,res)=>{
        var id = req.params.id
        let myRoom= new colRoom({
            captureRoom: req.body.captureRoom,
            typeRoom:req.body.typeRoom,
            lstReservations: req.body.lstReservations
        });
        
        processRoom.updateRoomProcess(id,myRoom)
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((errType)=>{
            if(errType=='Not found room') res.status(404).send(errType)
            if(errType=='FindOne room methode problem') res.status(400).send(errType)
            if(errType=='Update room methode problem') res.status(400).send(errType)
        })
    },

    actionDeleteOneRoom:(req,res)=>{
        processRoom.processDeleteOneRoom(req.params.id)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            if (err==404) res.status(err).send("No room found.")
            if (err==400) res.status(err).send("There was a problem deleting the room.")
        })
    }
}


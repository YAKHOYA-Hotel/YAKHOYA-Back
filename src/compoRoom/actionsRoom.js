const colRoom  = require('./modelsRoom');
const colReservation= require('../compoReservation/modelsReservation')
const processRoom = require('./processRoom');

module.exports={
    actionShowAllRooms:(req,res)=>{
        processRoom.processShowAllRooms()
        .then((allRooms)=>{
            getResult(allRooms,req)
            .then(async(tab)=>{
                await allRooms.forEach(async element => {
                    if (element.lstReservations.length==0){
                        await tab.push(element);
                    }
                });
                res.status(200).send(tab);
            })
                        
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

function logiqueTest (lstReservations,dateDebut,dateFin){
    return new Promise((resolve)=>{
        let datesChauvauchent=false;
        for(let i=0;i<lstReservations.length;i++){
            colReservation.findOne({_id: lstReservations[i]})
            .then((coreReservation)=>{
                if(!(((dateDebut>coreReservation.dateSortie)&&(dateFin>coreReservation.dateSortie))||((dateFin<coreReservation.dateEntre)&&(dateFin<coreReservation.dateEntre)))){
                    datesChauvauchent=true;
                }                    
            })
            if(i==lstReservations.length-1){
                resolve(datesChauvauchent);
            }
            
        }
    })
}

function getResult(allRooms,req){
    let lstRoomsDispo=[];
    return new Promise(async (resolve)=>{
        for (let i = 0;i<allRooms.length;i++){
            logiqueTest(allRooms[i].lstReservations,new Date(req.params.dateDebut),new Date(req.params.dateFin))
            .then(async (res)=>{
                if(!res){
                    await lstRoomsDispo.push(allRooms[i]);
                }
                if(i===allRooms.length-1){
                    await resolve(lstRoomsDispo);
                }
            })  
        }
    })
}

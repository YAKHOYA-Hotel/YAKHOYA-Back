// ********************************************************************************************
// Module util pour les reservations
// ********************************************************************************************

const colReservation = require('./modelsReservation');
const colRoom= require('../compoRoom/modelsRoom')
const colHotel= require('../compoHotel/modelsHotel')
const processRoom = require('../compoRoom/processRoom');
const modelsUser = require('../compoUser/modelsUser');
const processUser = require('../compoUser/processUser');


module.exports={

    callbackShowRes:(id)=>{
        return new Promise((resolve,reject)=>{
            colReservation.findOne({_id: id},(err, reservation)=> {
                if (!reservation){
                    console.log("Not found reservation")
                    reject('Not found reservation')
                } else{
                    if (err){
                        console.log('Find one reservation methode problem')
                        reject('Find one reservation methode problem')
                    } else{
                        resolve(reservation)
                    }
                }    
            })
        })
    }, 

    callbackShowRoom:(id)=>{
        return new Promise((resolve,reject)=>{
            processRoom.processShowOneRoom(id)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    },

    callbackShowUser:(id)=>{
        return new Promise((resolve,reject)=>{
            modelsUser.findOne({username: id},(err, user)=> {
                if (!user){
                    reject('Not found user')
                } else{
                    if (err){
                        reject('Find one user methode problem')
                    } else{
                        resolve(user)
                    }
                }    
            })
        })
    },
    
    callbackShowAndUpdateRoom:(reservation)=>{
        return new Promise((resolve,reject)=>{
            processRoom.processShowOneRoom(reservation.idChambre)
            .then((room)=>{
                let tab= room.lstReservations
                tab.splice(tab.indexOf(reservation._id),1)
                let myRoom = new colRoom({
                    typeRoom:room.typeRoom,
                    captureRoom:room.captureRoom,
                    lstReservations:tab
                })
                processRoom.processUpdateOneRoom(room.id,myRoom)
                .then((res)=>{
                    resolve(res)
                })
                .catch((err)=>{
                    reject('we cannot update Room')
                })
            })
            .catch((err)=>{
                reject('No room founded')
            })
        })
    },

    callbackShowAndUpdateUser:(reservation)=>{
        return new Promise((resolve,reject)=>{
            // console.log(`${reservation.idClient} == ${reservation}`)
            console.log(reservation)

            modelsUser.findOne({username: reservation.idClient},(err, user)=> {
                if (!user){
                    reject('Not found user')
                } else{
                    if (err){
                        reject('FindOne User methode problem')
                    } else{               
                        let tabReservationsUser =user.lstReservations
                        tabReservationsUser.splice(tabReservationsUser.indexOf(reservation),1)
                        let myUser=new modelsUser({
                            name:user.name,
                            lastname:user.lastname,
                            age:user.age,
                            username:user.username,
                            email:user.email,
                            lstReservations:tabReservationsUser
                        })
                        console.log(user._id)
                        
                        processUser.updateUserProcess(user.username,myUser)
                        .then((res)=>{
                            resolve({"User modified ":res})
                        })
                        .catch((error)=>{
                            reject(error)
                        })
                    }
                }    
            })
        })
    },

    callbackShowResBetweenDdDfForOneHotel:(dateDebut,dateFin,typeRoom,idHotel,idReservation)=>{
        nbrReservationsDdDf=0
        return new Promise((resolve, reject)=>{
            colReservation.find((err, tabReservations)=> {
                if (err){
                    reject('Find reservations methode problem')
                } else {
                    tabReservations.forEach(reservation => {
                        if(reservation.idHotel==idHotel &&  reservation.typeRoom==typeRoom){
                            if(!(((dateDebut>reservation.dateSortie)&&(dateFin>reservation.dateSortie))||((dateFin<reservation.dateEntre)&&(dateFin<reservation.dateEntre)))){
                                nbrReservationsDdDf=nbrReservationsDdDf+1
                            }
                        }
                    });
                    resolve(nbrReservationsDdDf)
                } 
            })
        })
    }, 

    callbackFindHotel:(idHotel,typeRoom)=>{
        // console.log(typeRoom)
        return new Promise((resolve,reject)=>{
            colHotel.findOne({nameHotel: idHotel},(err, hotel)=> {
                if (!hotel){
                    reject('Not found hotel')
                } else {
                    if (err){
                        reject('FindOne hotel methode problem')
                    }else{
                        if (typeRoom.toLowerCase()=="simple"){
                            resolve(hotel.nbrChambresSimple)
                        }else{
                            if(typeRoom.toLowerCase()=="double"){
                                resolve(hotel.nbrChambresDoubles)
                            }else{
                                if(typeRoom.toLowerCase()=="familiale"){
                                    resolve(hotel.nbrChambresFamilliales)
                                }else{
                                    resolve(hotel.nbrChambresPresidentilles)
                                }
                            }
                        }
                    } 
                }    
            })
        })
    }


}



// ********************************************************************************************
// Dans ce module on : traite la demande, accède à la base en lecture écriture
// ********************************************************************************************

const colReservation = require('./modelsReservation');
const utilsReservation=require('./utilsReservation')
const modelsUser = require('../compoUser/modelsUser');
const ObjectId = require('mongodb').ObjectID
const processUser = require('../compoUser/processUser');

module.exports={
    
    processShowAllReservations:()=>{
        return new Promise((resolve,reject)=>{
            colReservation.find((err, reservation)=> {
                if (err){
                    reject(400)
                } else {
                    resolve(JSON.stringify(reservation)) 
                } 
            })
        })
    },

    processShowOneReservation:(id)=>{
        return new Promise((resolve,reject)=>{
            colReservation.findOne({_id: id},(err, reservation)=> {
                if (!reservation){
                    reject(404)
                } else{
                    if (err){
                        reject(400)
                    } else{
                        resolve(JSON.stringify(reservation))
                    }
                }    
            })
        })
    },

    processAddOneReservation:(newReservation, idUser, idHotel)=>{
        return new Promise((resolve,reject) => {
            //compter le nombre de chambres double réservées 
                
            utilsReservation.callbackShowResBetweenDdDfForOneHotel(newReservation.dateEntre,newReservation.dateSortie,newReservation.typeRoom,newReservation.idHotel)
            .then((nbrRoomsRes)=>{
                utilsReservation.callbackFindHotel(idHotel, newReservation.typeRoom)
                .then((nbrRooms)=>{
                    if(nbrRooms>nbrRoomsRes){
                        // sauver la réservation
                        newReservation.save()
                        .then((result)=>{
                            //charge liste de reservations dans user
                            utilsReservation.callbackShowUser(idUser)
                            .then((user)=>{
                                let tabResInUser=user.lstReservations
                                tabResInUser.push(result)
                                let myUser=new modelsUser({
                                    name:user.name,
                                    lastname:user.lastname,
                                    age:user.age,
                                    username:user.username,
                                    email:user.email,
                                    lstReservations:tabResInUser
                                })
                                //Mise à jour de la liste des reservation du client en question
                                processUser.updateUserProcess(idUser,myUser)
                                .then((resUserUpdate)=>{
                                    resolve({'Reservation Saved !': result, resUserUpdate})
                                })
                                .catch(errUpdateUser=>{
                                    reject(errUpdateUser)
                                })
                            })
                            .catch((errUser)=>{
                                reject(errUser)
                            })
                            // resolve('Reservation Saved !'+ result)
                        })
                        .catch((err)=>{
                            reject('Save reservation methode problem');
                        })            
                    }else{
                        resolve("All rooms reverved")
                    }
                })
                .catch((errHotel)=>{
                    reject(errHotel)
                })
            })
            .catch((err)=>{
                reject(err)
            })
            
        });
    },

    processDeleteOneReservation:(id)=>{
        let idReservation=id;
        return new Promise ((resolve,reject)=>{
            utilsReservation.callbackShowRes(id)
            .then((reservation)=>{
                utilsReservation.callbackShowAndUpdateUser(reservation)
                .then((resultCallback)=>{
                    colReservation.deleteOne({_id: ObjectId(idReservation)},(err,oneReservation)=>{
                        if(!oneReservation){
                            reject('Not found reservation')
                        } else{
                            if(err){
                                reject('DeleteOne reservation methode problem')
                            } else{
                                resolve( {'The user updated ':resultCallback,'The reservation ': 'deleted'})
                            }
                        }
                    })
                })
                .catch((errorUser)=>{
                    reject(errorUser)
                })
            })
            .catch((err)=>{
                reject(err)
            })        
        })
    }

}



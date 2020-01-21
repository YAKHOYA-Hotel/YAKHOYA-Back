// ********************************************************************************************
// Dans ce module on : traite la demande, accède à la base en lecture écriture
// ********************************************************************************************

const colRoom = require('./modelsRoom');
const ObjectId = require('mongodb').ObjectID

module.exports={
    
    processShowAllRooms:()=>{
        return new Promise((resolve,reject)=>{
            colRoom.find((err, room)=> {
                if (err){
                    reject(400)
                } else {
                    resolve(room) 
                } 
            })
        })
    },

    processShowOneRoom:(id)=>{
        return new Promise((resolve,reject)=>{
            colRoom.findOne({_id: id},(err, room)=> {
                if (!room){
                    reject(404)
                } else{
                    if (err){
                        reject(500)
                    } else{
                        resolve(room)
                    }
                }    
            })
        })
    },

    processAddOneRoom:(newRoom)=>{
        return new Promise((resolve,reject) => {
            newRoom.save()
            .then((result)=>{
                resolve({'Room Saved !': result})    
            })
            .catch((err)=>{
                reject(500);
            })
        });
    },

    updateRoomProcess:(id,myRoom)=>{
        return new Promise((resolve,reject)=>{
            colRoom.findOne({_id: ObjectId(id)},(err, room)=> {
                if (!room) reject('Not found room')
                else
                if (err) reject('FindOne room methode problem')
                else{
                    room.captureRoom= myRoom.captureRoom
                    room.typeRoom= myRoom.typeRoom
                    room.lstReservations= myRoom.lstReservations
                    
                    room.save((err,room)=>{
                        if(err){
                            reject('Update room methode problem')
                        }
                        resolve({message:'User Updated !',room})
                    });  
                }    
            });
        })    
    },

    processUpdateOneRoom:(id,myRoom)=>{
        return new Promise((resolve,reject)=>{
            colRoom.findOne({_id: ObjectId(id)},(err, room)=> {
                if (!room) reject(404)
                else
                if (err) reject(err)
                else{
                    room.lstReservations= myRoom.lstReservations
                    room.captureRoom= myRoom.captureRoom
                    room.typeRoom= myRoom.typeRoom
                    room.save((err,roomSaved)=>{
                        if(err){
                            reject(err)
                        }
                        resolve({message:'Room Updated !',roomSaved})
                    });  
                }    
            });
        })    
    },

    processDeleteOneRoom:(id)=>{
        return new Promise ((resolve,reject)=>{
            colRoom.remove({_id: ObjectId(id)},(err,room)=>{
                if(!room){
                    reject(404)
                } else{
                    if(err){
                        reject(400)
                    } else{
                        resolve('Room deleted')
                    }
                }
            })
        })
    }

}
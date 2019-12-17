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
                        reject(400)
                    } else{
                        resolve(JSON.stringify(room))
                    }
                }    
            })
        })
    },

    processAddOneRoom:(newRoom)=>{
        return new Promise((resolve,reject) => {
            newRoom.save()
            .then((result)=>{
                resolve('Room Saved !'+ result)    
            })
            .catch((err)=>{
                reject(500);
            })
        });
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
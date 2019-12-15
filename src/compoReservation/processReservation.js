const colReservation = require('./modelsReservation');
const ObjectId = require('mongodb').ObjectID

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

    processAddOneReservation:(newReservation)=>{
        return new Promise((resolve,reject) => {
            newReservation.save()
            .then((result)=>{
                
                resolve('Reservation Saved !'+ result)    
            })
            .catch((err)=>{
                reject(500);
            })
        });
    },

    processDeleteOneReservation:(id)=>{
        return new Promise ((resolve,reject)=>{
            colReservation.remove({_id: ObjectId(id)},(err,reservation)=>{
                if(!reservation){
                    reject(404)
                } else{
                    if(err){
                        reject(400)
                    } else{
                        resolve('Reservation deleted')
                    }
                }
            })
        })
    }

}
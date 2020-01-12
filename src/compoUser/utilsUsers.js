const colReservation = require('../compoReservation/modelsReservation')

module.exports={
    processShowOneReservation:(id)=>{
        return new Promise((resolve,reject)=>{
            colReservation.findOne({_id: id},(err, reservation)=> {
                if (!reservation){
                    reject('Not found reservation')
                } else{
                    if (err){
                        reject('Findone methode problem')
                    } else{
                        resolve(reservation)
                    }
                }    
            })
        })
    },
}
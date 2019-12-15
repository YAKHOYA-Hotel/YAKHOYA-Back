const colHotel = require('./modelsHotel');
const ObjectId = require('mongodb').ObjectID

module.exports={
    
    processShowAllHotels:()=>{
        return new Promise((resolve)=>{
            colHotel.find((err, hotel)=> {
                if (err) resolve(400)
                resolve(JSON.stringify(hotel))  
            })
        })
    },

    actionShowOneHotel:(id)=>{
        return new Promise((resolve)=>{
            colHotel.findOne({_id: id},(err, hotel)=> {
                if (!hotel) resolve(404)
                if (err) resolve(400)
                resolve(JSON.stringify(hotel))    
            })
        })
    },

    deleteHotelProcess:(id)=>{
        return new Promise ((resolve)=>{
            colHotel.remove({_id: ObjectId(id)},(err,hotel)=>{
                if(!hotel) resolve(404)
                if(err) resolve(400)
                resolve('hotel deleted')
            })
        })
    },

    processAddOneHotel:(newHotel)=>{
        return new Promise((resolve,reject) => {
            newHotel.save()
            .then((result)=>{
                resolve(result)
            })
            .catch((err)=>{
                reject(500)
            })

        });
    }

}
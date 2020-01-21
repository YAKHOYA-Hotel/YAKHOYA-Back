// ********************************************************************************************
// Dans ce module on : traite la demande, accède à la base en lecture écriture
// ********************************************************************************************

const colHotel = require('./modelsHotel');
const ObjectId = require('mongodb').ObjectID

module.exports={
    
    processShowAllHotels:()=>{
        return new Promise((resolve)=>{
            colHotel.find((err, hotel)=> {
                if (err) resolve(400)
                resolve(hotel)  
            })
        })
    },

    processShowOneHotel:(id)=>{
        return new Promise((resolve)=>{
            colHotel.findOne({_id: id},(err, hotel)=> {
                if (!hotel) resolve(404)
                if (err) resolve(400)
                resolve(hotel)    
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
    },

    processUpdateOneHotel:(id,myhotel)=>{
        console.log(id)
        return new Promise((resolve,reject)=>{
            colHotel.findOne({_id: id},(err, hotel)=> {
                if (!hotel){
                    reject(404)
                }else{
                    if (err){
                        reject(501)
                    } else{
                        hotel.nameHotel= myhotel.nameHotel
                        hotel.adressHotel= myhotel.adressHotel
                        hotel.CPHotel= myhotel.CPHotel
                        hotel.cityHotel= myhotel.cityHotel
                        hotel.nbrChambresDoubles=myhotel.nbrChambresDoubles
                        hotel.nbrChambresSimple=myhotel.nbrChambresSimple
                        hotel.nbrChambresFamilliales=myhotel.nbrChambresFamilliales
                        hotel.nbrChambresPresidentilles=myhotel.nbrChambresPresidentilles
    
                        hotel.save((err,hotel)=>{
                            if(err){
                                reject(500)
                            }else{
                                resolve({message:'hotel Updated !',hotel})
                            }
                            
                        });  
                    }
                }
            });
        })    
    }

}
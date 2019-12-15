const colHotel  = require('./modelsHotel');
const processHotel = require('./processHotel');

module.exports={
    actionShowAllHotels:(req,res)=>{
        processHotel.processShowAllHotels()
        .then((result)=>{
            if (result== 400) res.status(result).send("There was a problem finding the Hotel.")
            res.status(200).send(result)
        })
    },

    actionShowOneHotel:(req,res)=>{
        processHotel.processAddOneHotel(req.params.idHotel)
        .then((result)=>{
            if(result==404) res.status(result).send("Not found hotel") 
            if(result==400) res.status(result).send("There was a problem finding the Hotel.")
            res.status(200).send(result)
        })
    },

    actionPostOneHotel:(req,res)=>{
        let myHotel= new colHotel({
            nameHotel: req.body.nameHotel,
            adressHotel:req.body.adressHotel,
            CPHotel:req.body.CPHotel,
            cityHotel:req.body.cityHotel,
            telHotel:req.body.telHotel
        });
        processHotel.processAddOneHotel(myHotel)
        .then((result)=>{
            res.status(200).send(JSON.stringify(result) )
        })
        .catch((err)=>{
            res.status(err).send("There was a problem adding the informations to the database.")
        })
    },  

    actionUpdateOneHotel:(req,res)=>{

    },

    actionDeleteOneHotel:(req,res)=>{
        processUsers.deleteHotelProcess(req.params.idHotel)
        .then((result)=>{
            if (result==404) res.status(result).send("No hotel found.")
            if (result==400) res.status(result).send("There was a problem deleting the hotel.")
            res.status(200).send(result)
        })       
    }
}
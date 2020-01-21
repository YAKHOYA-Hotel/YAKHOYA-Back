// ********************************************************************************************
// Dans ce module on : décomposer la requête reçut du front et on fait appel à notre processus 
// L'intelligence de notre API Rest 
// ********************************************************************************************

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
        processHotel.processShowOneHotel(req.params.idHotel)
        .then((result)=>{
            if(result==404){
                res.status(result).send("Not found hotel")
            }else{
                if(result==400){
                    res.status(result).send("There was a problem finding the Hotel.")
                } else {
                    res.status(200).send(result)
                }
            }
        })
    },

    actionPostOneHotel:(req,res)=>{
        let myHotel= new colHotel({
            nameHotel: req.body.nameHotel,
            adressHotel:req.body.adressHotel,
            CPHotel:req.body.CPHotel,
            cityHotel:req.body.cityHotel,
            nbrChambresDoubles:req.body.nbrChambresDoubles,
            nbrChambresSimple:req.body.nbrChambresSimple,
            nbrChambresFamilliales:req.body.nbrChambresFamilliales,
            nbrChambresPresidentilles:req.body.nbrChambresPresidentilles,
        });
        processHotel.processAddOneHotel(myHotel)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            res.status(err).send("There was a problem adding the informations to the database.")
        })
    },  

    actionUpdateOneHotel:(req,res)=>{
        var id = req.params.idHotel
        console.log(id)
        let myHotel= new colHotel({
            nameHotel: req.body.nameHotel,
            adressHotel:req.body.adressHotel,
            CPHotel:req.body.CPHotel,
            cityHotel:req.body.cityHotel,
            nbrChambresDoubles:req.body.nbrChambresDoubles,
            nbrChambresSimple:req.body.nbrChambresSimple,
            nbrChambresFamilliales:req.body.nbrChambresFamilliales,
            nbrChambresPresidentilles:req.body.nbrChambresPresidentilles,
        });

        processHotel.processUpdateOneHotel(id,myHotel)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((errType)=>{
            if(errType==404) res.status(404).send("No found hotel.")
            if(errType==500) res.status(500).send('Error in the save methode')
            if(errType==501) res.status(500).send("There was a problem updating hotel.")
        })
        
    },

    actionDeleteOneHotel:(req,res)=>{
        processHotel.deleteHotelProcess(req.params.idHotel)
        .then((result)=>{
            if (result==404) res.status(result).send("No hotel found.")
            if (result==400) res.status(result).send("There was a problem deleting the hotel.")
            res.status(200).send(result)
        })       
    }
}
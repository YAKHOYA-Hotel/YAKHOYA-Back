const processUser = require('./processUser');
const modelsUser = require('./modelsUser');

module.exports = {

    actionShowAllReservationsUser:(req,res)=>{
        username=req.params.username
        processUser.processShowAllReservationsUser(username)
        .then((tabReservation)=>{
            console.log(tabReservation)
            res.status(200).send(tabReservation)
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    
    register(req, res, body) {
        processUser.register(req, res, body)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
        .catch((err) => {
            res.status(409).json(err)
        })
    },

    login(req, res) {
        processUser.login(req, res)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
        .catch((err) => {
            res.status(403).json(err)
        })
        
    },
    decrypt(req, res) {
        processUser.getuserprofile(req, res)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })

    },

    updateOneUser:(req, res)=>{
        var id = req.params.id
        var myUser= new modelsUser({
            name:req.body.name,
            lastname:req.body.lastname,
            age:req.body.age,
            username:req.body.username,
            email:req.body.mail,
            lstReservations: req.body.lstReservations
        })

        processUser.updateUserProcess(id,myUser)
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((errType)=>{
            if(errType=='Not found user') res.status(404).send(errType)
            if(errType=='FindOne user methode problem') res.status(400).send(errType)
            if(errType=='Update user methode problem') res.status(400).send(errType)
        })
    }

}
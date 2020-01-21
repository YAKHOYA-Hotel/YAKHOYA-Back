// ********************************************************************************************
// Serveur Back Express 
// ********************************************************************************************

const express = require('express');
const app = express();
let port = process.env.PORT || 3030
//Déclarer les routes______________________
const routesHotel= require("./src/compoHotel/routesHotel")
const routesRoom= require("./src/compoRoom/routesRoom")
const routesUser= require("./src/compoUser/routesUser")
const routesReservation= require("./src/compoReservation/routesReservation")
//_________________________________________
const connectDB = require('./database');
const ficConfigCROS= require("./config_CROS")

app.use(ficConfigCROS.activateCors);
connectDB()
// Use routes-----------------------------------------------------------
app.use('/reservation',routesReservation)
app.use('/hotel',routesHotel)
app.use('/room',routesRoom)
app.use('/user',routesUser)

//Connection à la DB, Lancement du serveur-------------------------------
app.listen(port,function (req, res) {
  console.log('Express server listening on port: ' + port);
})
module.exports= app

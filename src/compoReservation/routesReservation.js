// ********************************************************************************************
// Méthodes Http et routes Réservations 
// ********************************************************************************************

const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const actionsReservation=require("./actionsReservation")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// Voir toutes les réservations
router.get("", actionsReservation.actionShowAllReservations)
//Voir une réservation
router.get("/:id",actionsReservation.actionShowOnereservation)
//Ajouter une nouvelle réservation
router.post("/",actionsReservation.actionPostOneReservation)
//Modifier une réservation
router.put("/:id",actionsReservation.actionUpdateOneReservation)
//Supprimer une réservation
router.delete("/:id",actionsReservation.actionDeleteOneReservation)

module.exports= router;


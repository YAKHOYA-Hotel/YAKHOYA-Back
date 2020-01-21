// ********************************************************************************************
// Méthodes Http et routes Room 
// ********************************************************************************************

const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const actionsRoom=require("./actionsRoom")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// Voir Toutes les chambres
router.get("", actionsRoom.actionShowAllRooms)
// Voir une chambre
router.get("/:id",actionsRoom.actionShowOneRoom)
// Ajouter une chambre
router.post("",actionsRoom.actionPostOneRoom)
// Modifier une chambre
router.put("/:id",actionsRoom.actionUpdateOneRoom)
// Supprimer une chambre
router.delete("/:id",actionsRoom.actionDeleteOneRoom)

module.exports= router;
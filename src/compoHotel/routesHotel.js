// ********************************************************************************************
// Méthodes Http et routes Hôtel 
// ********************************************************************************************

const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const actionsHotel=require("./actionsHotel")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// Route get tous les hôtels
router.get("",actionsHotel.actionShowAllHotels)
// Route get un hôtels
router.get("/:idHotel",actionsHotel.actionShowOneHotel)
// Route insérer un hôtels
router.post("/",actionsHotel.actionPostOneHotel)
// Route modifier un hôtels
router.put("/:idHotel",actionsHotel.actionUpdateOneHotel)
// Route supprimer un hôtels
router.delete("/:idHotel",actionsHotel.actionDeleteOneHotel)

module.exports= router;
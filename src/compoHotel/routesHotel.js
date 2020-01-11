const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const actionsHotel=require("./actionsHotel")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("",actionsHotel.actionShowAllHotels)
router.get("/:idHotel",actionsHotel.actionShowOneHotel)
router.post("/",actionsHotel.actionPostOneHotel)
router.put("/:idHotel",actionsHotel.actionUpdateOneHotel)
router.delete("/:idHotel",actionsHotel.actionDeleteOneHotel)

module.exports= router;
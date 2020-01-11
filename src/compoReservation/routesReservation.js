const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const actionsReservation=require("./actionsReservation")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("", actionsReservation.actionShowAllReservations)
router.get("/:id",actionsReservation.actionShowOnereservation)
router.post("/",actionsReservation.actionPostOneReservation)
router.put("/:id",actionsReservation.actionUpdateOneReservation)
router.delete("/:id",actionsReservation.actionDeleteOneReservation)

module.exports= router;


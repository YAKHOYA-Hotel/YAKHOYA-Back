const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const actionsRoom=require("./actionsRoom")


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("", actionsRoom.actionShowAllRooms)
router.get("/:id",actionsRoom.actionShowOneRoom)
router.post("",actionsRoom.actionPostOneRoom)
router.put("/:id",actionsRoom.actionUpdateOneRoom)
router.delete("/:id",actionsRoom.actionDeleteOneRoom)

module.exports= router;
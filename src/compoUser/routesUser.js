const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json)

router.get("/showallusers")
router.get("/showoneuser")
router.post("/postoneuser")
router.put("/putoneuser/:idUser")
router.delete("/deleteoneuser/:idUser")

module.exports= router;
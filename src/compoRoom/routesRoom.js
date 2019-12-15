const express= require("express")
const router = express.Router()
const bodyParser= require("body-parser")


router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json)

router.get("/")
router.get("/showoneroom")
router.post("/postoneroom")
router.put("/putoneroom/:idRoom")
router.delete("/deleteoneroom/:idRoom")

module.exports= router;
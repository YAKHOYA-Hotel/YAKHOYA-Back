const router = require('express').Router();
const bodyParser= require("body-parser")

router.use(bodyParser.json());
const actionsUser = require('./actionsUser');


router.post('',actionsUser.register); 

router.post('/login',actionsUser.login);
router.post('/decrypt',actionsUser.decrypt);

router.put('/:id', actionsUser.updateOneUser)
module.exports= router;





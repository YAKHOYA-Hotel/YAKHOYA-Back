// ********************************************************************************************
// Méthodes Http et routes Users 
// ********************************************************************************************

const router = require('express').Router();
const bodyParser= require("body-parser")

router.use(bodyParser.json());
const actionsUser = require('./actionsUser');

// Voir toutes les réservations d'un utilisateur
router.get('/:username',actionsUser.actionShowAllReservationsUser)
// Enregistrer un nouveau compte
router.post('',actionsUser.register); 
// Générer le token
router.post('/login',actionsUser.login);
// Comparer et avoir le compte
router.post('/decrypt',actionsUser.decrypt);
// Modifier un utilisateur
router.put('/:id', actionsUser.updateOneUser)
module.exports= router;





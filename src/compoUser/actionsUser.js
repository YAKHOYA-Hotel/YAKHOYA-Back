const processUser = require('./processUser');
const modelsUser = require('./modelsUser');

module.exports = {

    register(req, res, body) {
        processUser.register(req, res, body)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
        .catch((err) => {
            res.status(409).json(err)
        })
    },

    login(req, res) {
        processUser.login(req, res)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
        .catch((err) => {
            res.status(403).json(err)
        })
        
    },
    decrypt(req, res) {
        processUser.getuserprofile(req, res)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        })

    }

}
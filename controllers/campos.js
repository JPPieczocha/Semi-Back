const Sequelize  = require('sequelize');
const campos  = require('../models').campos;


module.exports = {
 create(req, res) {
    return campos
        .create ({
            nombre: req.body.nombre,
        })
        .then(campos => res.status(200).send(campos))
        .catch(error => res.status(400).send(error))
 },

 find(_, res) {
     return campos
     .findAll({})
     .then(campos => res.status(200).send(campos))
    .catch(error => res.status(400).send(error))
 },

 delete (req, res) {
    return campos.destroy({
            where: {
                nombre: req.body.nombre
            }
        })
        .then(campos => res.status(200).send('ok'))
        .catch(error => res.status(400).send(error))
    }
};
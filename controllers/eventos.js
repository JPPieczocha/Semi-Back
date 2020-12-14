const Sequelize  = require('sequelize');
const eventos  = require('../models').eventos;


module.exports = {
 create(req, res) {
    return eventos
        .create ({
            inicio: req.body.inicio,
            fin: req.body.fin,
            detalle: req.body.detalle,
        })
        .then(eventos => res.status(200).send(eventos))
        .catch(error => res.status(400).send(error))
 },

 find(req, res) {
    return eventos
        .findAll({})
        .then(eventos => res.status(200).send(eventos))
        .catch(error => res.status(400).send(error))
},

 delete (req, res) {
    return eventos.destroy({
            where: {
                detalle: req.body.detalle
            }
        })
        .then(eventos => res.status(200).send('ok'))
        .catch(error => res.status(400).send(error))
    }
};
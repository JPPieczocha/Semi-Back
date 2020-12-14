const Sequelize  = require('sequelize');
const vacunas  = require('../models').vacunas;


module.exports = {
 create(req, res) {
    return vacunas

        .create ({
            vacuna: req.body.vacuna,
            dosis: req.body.dosis,
            caravana: req.body.caravana,
            fecha: req.body.fecha,
            aplicada: req.body.aplicada
        })
        .then(vacunas => res.status(200).send(vacunas))
        .catch(error => res.status(400).send(error))
 },


 find(req, res) {
        return vacunas
    
			.findAll({
            })
            .then(vacas => res.status(200).send(vacas))
			.catch(error => res.status(400).send(error))
 },

};
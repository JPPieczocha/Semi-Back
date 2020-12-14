const Sequelize  = require('sequelize');
const gastos  = require('../models').gastos;


module.exports = {
 create(req, res) {
    return gastos
        .create ({
            fecha: req.body.fecha,
            detalle: req.body.detalle,
            etiqueta: req.body.etiqueta,
            precio: req.body.precio
        })
        .then(gastos => res.status(200).send(gastos))
        .catch(error => res.status(400).send(error))
 },


 find(_, res) {
		return gastos
			.findAll({})
			.then(gastos => res.status(200).send(gastos))
			.catch(error => res.status(400).send(error))
 },

};
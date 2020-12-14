const Sequelize  = require('sequelize');
const pasturas  = require('../models').pasturas;


module.exports = {
 create(req, res) {
    return pasturas
        .create ({
            sembrado: req.body.sembrado,
            renovar: req.body.renovar,
            cantidad: req.body.cantidad,
            tipo: req.body.tipo
        })
        .then(pasturas => res.status(200).send(pasturas))
        .catch(error => res.status(400).send(error))
 },


 find(req, res) {
		return pasturas
			.findAll({
			})
			.then(pasturas => res.status(200).send(pasturas))
			.catch(error => res.status(400).send(error))
 },


}
const Sequelize  = require('sequelize');
const empleados  = require('../models').empleados;


module.exports = {
 create(req, res) {
    return empleados
        .create ({
            dni: req.body.dni,
            sueldo: req.body.sueldo,
            contacto: req.body.contacto,
        })
        .then(empleados => res.status(200).send(empleados))
        .catch(error => res.status(400).send(error))
 },


 find(req, res) {
		return empleados
			.findAll({
			})
			.then(empleados => res.status(200).send(empleados))
			.catch(error => res.status(400).send(error))
 },


 delete (req, res) {
    return empleados.destroy({
            where: {
                dni: req.body.dni
            }
        })
        .then(empleados => res.status(200).send('ok'))
        .catch(error => res.status(400).send(error))
    }
};
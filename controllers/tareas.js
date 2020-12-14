const Sequelize  = require('sequelize');
const tareas  = require('../models').tareas;


module.exports = {
 create(req, res) {
    return tareas
        .create ({
            dni: req.body.dni,
            vencimiento: req.body.vencimiento,
            tareas: req.body.tareas
            //check
        })
        .then(tareas => res.status(200).send(tareas))
        .catch(error => res.status(400).send(error))
 },


 find(req, res) {
		return tareas
			.findAll({
				where: {
					dni: req.body.dni
				}
			})
			.then(tareas => res.status(200).send(tareas))
			.catch(error => res.status(400).send(error))
 },


 delete (req, res) {
    return tareas.destroy({
            where: {
                p: req.body.p
            }
        })
        .then(tareas => res.status(200).send('ok'))
        .catch(error => res.status(400).send(error))
    }
};
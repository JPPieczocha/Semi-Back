const Sequelize  = require('sequelize');
const vacas  = require('../models').vacas;


module.exports = {
 create(req, res) {
    return vacas

        .create ({
            peso: req.body.peso,
            peso_fecha: req.body.peso_fecha,
            caravana: req.body.caravana,
            categoria: req.body.categoria,
            nacimiento: req.body.nacimiento,
            ingreso: req.body.ingreso,
            genero: req.body.genero,
            madre: req.body.madre,
        })
        .then(vacas => res.status(200).send(vacas))
        .catch(error => res.status(400).send(error))
 },


 find(req, res) {
        return vacas
    
			.findAll({})
            .then(vacas => res.status(200).send(vacas))
			.catch(error => res.status(400).send(error))
 },


 delete (req, res) {
    return vacas
        .destroy({
            where: {
                caravana: req.body.caravana
            }
        })
        .then(vacas => res.status(200).send('ok'))
        .catch(error => res.status(400).send(error))
    }
};
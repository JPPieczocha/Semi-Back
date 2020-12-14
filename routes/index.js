/* Controllers */
const camposController = require('../controllers/campos')
const empleadosController = require('../controllers/empleados')
const eventosController = require('../controllers/eventos')
const gastosController = require('../controllers/gastos')
const pasturasController = require('../controllers/pasturas')
const tareasController = require('../controllers/tareas')
const vacasController = require('../controllers/vacas')
const vacunasController = require('../controllers/vacunas')


module.exports = (app) => {
   app.get('/SemiBack', (_, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));


   //web services

   
   app.post('/crearCampos', camposController.create);
   app.get('/listarCampos', camposController.find);
   //app.delete('', camposController.delete);

   
   app.post('/crearEmpleados', empleadosController.create);
   app.get('/listarEmpleados', empleadosController.find);
   // app.delete('', empleadosController.delete);

   app.post('/crearEventos', eventosController.create);
   app.get('/listarEventos', eventosController.find);
   // app.delete('', eventosController.delete);

   app.post('/crearGastos', gastosController.create);
   app.get('/listarGastos', gastosController.find);

   app.post('/crearPasturas', pasturasController.create);
   app.get('/listarPasturas', pasturasController.find);
   // app.delete('', pasturasController.delete);

   app.post('/crearTareas', tareasController.create);
   app.get('/listarTareas', tareasController.find);
   // app.delete('', tareasController.delete);

   app.post('/crearVacas', vacasController.create);
   app.get('/listarVacas', vacasController.find);
   // app.delete('', vacasController.delete);

   app.post('/crearVacunas', vacunasController.create);
   app.get('/listarVacunas', vacunasController.find);


};

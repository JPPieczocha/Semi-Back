const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');

//incorporo cors
const cors = require('cors');
const cookieParser = require('cookie-parser');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));


//aplico cors
app.use(cors());
app.use(cookieParser());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Respuesta por defecto
require('./routes')(app)


app.use(function (req, res) {
     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
});

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
     message: 'Welcome to the beginning of nothingness.',
}));


const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
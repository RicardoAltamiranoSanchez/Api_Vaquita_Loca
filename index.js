const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

// crear el servidor
const app = express();


// habilitar el body-parser
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
app.use('/', routes())


// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})
//Requiero el fichero de configuración .env
require('dotenv').config();

//Requiero mi fichero donde esta la clase Server y su configuración
const Server = require('./models/server');

//Conexion bbdd
const connection = require('./dataBase/connection.js').dataBaseConnection();

//Me hago una instancia de la clase Server
const server = new Server();

server.listen();


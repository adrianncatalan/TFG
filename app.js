//Requiero el fichero de configuración .env
require('dotenv').config();

//Requiero mi fichero donde esta la clase Server y su configuración
const Server = require('./models/server');

//Me hago una instancia de la clase Server
const server = new Server();

//Conexion bbdd
const connection = require('./dataBase/connection.js').connection();

//Invoco al método listen para que el servidor comience a escuchar
server.listen();


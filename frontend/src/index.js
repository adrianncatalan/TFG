//Conexion bbdd
const conection = require('../../backend/dataBase/connection.js').dataBaseConnection();

//He guardado en las dependencias para las peticiones, respuestas y analítica en constantes
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Usamos nuestra conexión a la base de datos y al mismo tiempo usamos Body-Parser para ejecutar futuras consultas y nos devuelvan las respuestas en formato Json
app.use(bodyParser.json());

//Nos permite registrar las peticiones que se realizan al servidor
app.use(morgan('combined'));

//Creamos una constante para utilizar el puerto 3050
const PORT = process.env.PORT || 3050;

//App express comienza a escuchar por el puerto que le hemos indicado
app.listen(PORT, () => {
    console.log(`Servidor haciendo uso del puerto ${PORT} exitosamente.`);
});

//Hacemos uso de las dependencias
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Requiriendo todos lo ficheros que permiten realizar consultas, modificaciones, actualizaciones y supresiones de los users

const register = require('../../backend/middleware/register/register.js').register;

//Creando los endpoints de los usuarios para poder realizar las peticiones

app.post('/register', (req, res) => register(req, res, conection));


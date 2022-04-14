//Requiero express para usar la librería
const express = require('express');

//Requiero los Cors
const cors = require('cors');

//Requiero body-parser
const bodyParser = require('body-parser');

//Me creo una clase y configuro mi servidor
class Server {

    constructor() {

        this.app = express();
        this.userPath = '/users';
        this.port = process.env.PORT;

        //Middlewares: Esto ejecuta en mi clase el método middlewares que hará efecto en app.js
        this.middlewares();

        //Routes: Esto ejecuta en mi clase el método routesque hará efecto en app.js
        this.routes();

    }

    middlewares() {

        //Buscar porque hice esto, lo tenía en la api
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        //Usando Cors para la protección seguridad del navegador 
        //Los Cors restringen las solicitudes HTTP de origen cruzado
        this.app.use(cors());

        //Lectura y parseo del body
        //Esto nos permite rescatar la información que introduce el usuario por POST o DELETE
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public/html/login'));
    }

    //Aquí voy a configurar mis rutas, porque estoy usando el método Router de Express
    //Los paths o Urls que estan en el directorio routes no serán utilizados
    //El path o Url que estoy colocando aquí es el que se va a usar
    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}

//Exportamos el módulo de la clase Server
module.exports = Server;
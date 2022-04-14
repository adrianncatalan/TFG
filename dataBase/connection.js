//Creamos una función para guardar nuestra conexión de la base de datos
function connection() {

    //Creamos una constante para hacer un require a la dependencia MySql, ya que nuestra base de datos es de tipo MySql
    const mysql = require('mysql');

    //Creamos una constante para almacenar los parametros de nuestra base de datos
    const connection = mysql.createConnection({

        host: 'localhost',

        user: 'root',

        password: '',

        database: 'db_tfg',

        port: "3306"

    });

    //Check connect --> Chequeando conexión
    connection.connect((error) => {

        if (error) throw error;

        console.log('Conexión de base de datos exitosa.');

    });

    return connection;

}

//Exportamos nuestra modulo que contiene la conexión a la base de datos y así puede ser utilizado
module.exports.connection = connection;
//En este fichero lo que hacemos es separar la lógica de las rutas(Routes)
//Creamos funciones con sus nombres y el método empleado en los endpoints
//Requerimos Request y Response de Express para usar sus métodos
const { request, response } = require('express');

//Requerimos nuestro paquete de has de contraseñas bcryptjs
const bcryptjs = require('bcryptjs');

//Lógica del endpoint POST
const usersPost = (req = request, res = response, connection) => {
    //Conexion bbdd
    connection = require('../../dataBase/connection').connection();

    //Inserto en la base datos de la tabla registro_usuarios el nuevo usuario
    const sql = "INSERT INTO users SET ?";

    //Rescatamos los valores introducidos por el usuario
    const newUser = { name, surname, age, gender, height, weight, email, phone, password } = req.body;

    //Aquí debemos verificar si el email ya existe





    
    //Aquí hasheamos la contraseña
    const salt = bcryptjs.genSaltSync(); //Asignamos a esta variable el número de vueltas de hash(Valor por defecto 10)
    newUser.password = bcryptjs.hashSync(password, salt); //Hasheamos la contraseña antes guardar al usuario en la base de datos

    //Obtengo por medio de la desestrucuturación datos específicos del body
    connection.query(sql, newUser, (error) => {
        if (error) throw error;
        res.send('Usuario creado exitosamente.');
    });
}

//Exportamos nuestras funciones como objetos para usarlo en el directorio Routes
module.exports.usersPost = usersPost;
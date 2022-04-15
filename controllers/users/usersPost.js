//En este fichero lo que hacemos es separar la lógica de las rutas(Routes)
//Creamos funciones con sus nombres y el método empleado en los endpoints
//Requerimos Request y Response de Express para usar sus métodos
const { request, response } = require('express');

//Requerimos nuestro paquete de has de contraseñas bcryptjs
const bcryptjs = require('bcryptjs');

//Requerimos Express-validator
const { body, validationResult } = require('express-validator');

//Nombre de la constante que tiene la función
//Lógica del endpoint POST
const usersPost = async (req = request, res = response, connection) => {

    //Conexion bbdd
    connection = require('../../dataBase/connection').connection();

    //Creamos una variable constante que guarda todos los errores
    const errors = validationResult(req);

    //Si hay errores, hago un return de los errores que fueron encontrados por Express-validator
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    //Inserto en la base datos de la tabla registro_usuarios el nuevo usuario
    const sql = "INSERT INTO users SET ?";

    //Rescatamos los valores introducidos por el usuario
    const newUser = { name, surname, age, gender, height, weight, email, phone, password } = req.body;

    //Verificar si el email existe
    


    
    //Aquí hasheamos la contraseña
    const salt = bcryptjs.genSaltSync(); //Asignamos a esta variable el número de vueltas de hash(Valor por defecto 10)
    newUser.password = bcryptjs.hashSync(password, salt); //Hasheamos la contraseña antes guardar al usuario en la base de datos

    //Inserto en la base de datos el nuevo usuario
    await connection.query(sql, newUser, (error) => {
        if (error) throw error;
        res.send('Usuario creado exitosamente.');
    });
}

//Exportamos nuestras funciones como objetos para usarlo en el directorio Routes
module.exports.usersPost = usersPost;
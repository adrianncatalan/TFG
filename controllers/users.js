//En este fichero lo que hacemos es separar la lógica de las rutas(Routes)
//Creamos funciones con sus nombres y el método empleado en los endpoints
const connection = require('../dataBase/connection').dataBaseConnection();
//Requerimos Request y Response de Express para usar sus métodos
const { request, response } = require('express');

//Lógica del endpoint GET
const usersGet = (req = request, res = response) => {

    //De esta manera rescatamos los parámetros que envían por la Url
    const params = req.query

    //Otra manera de hacerlo
    const { id, nombre, edad = 'none' } = req.query;

    res.json({
        msg: 'Soy el endpoint get',
        id,
        nombre,
        edad,
    });
}

//Lógica del endpoint POST
const usersPost = (req = request, res = response, connection) => {

    //Obtengo todo lo que introduce el usuario en el body
    // const body = req.body;

    //Obtengo por medio de la desestrucuturación datos específicos del body
    const { name, surname, age, gender, height, weight, email, phone, password } = req.body;

    res.json({
        msg: 'Soy el endpoint post',
    });

}

//Lógica del endpoint PUT
const usersPut = (req = request, res = response) => {

    //Rescatos el id que se introdujo en body o front
    // const id = req.params.id;

    //Otra manera de hacerlo
    const { id } = req.params;

    res.json({
        msg: 'Soy el endpoint put',
        id
    });
}

//Lógica del endpoint PATCH
const usersPatch = (req = request, res = response) => {
    res.json({
        msg: 'Soy el endpoint patch'
    });
}

//Lógica del endpoint DELETE
const usersDelete = (req = request, res = response) => {
    res.json({
        msg: 'Soy el endpoint delete'
    });
}

//Exportamos nuestras funciones como objetos para usarlo en el directorio Routes
module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete,
}
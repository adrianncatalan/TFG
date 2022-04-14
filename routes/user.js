//Requiero Router
const { Router } = require('express');

//Requiero mis controladores
const { usersGet } = require('../controllers/users/usersGet');
const { usersPost } = require('../controllers/users/usersPost');
const { usersPut } = require('../controllers/users/usersPut');
const { usersPatch } = require('../controllers/users/usersPatch');
const { usersDelete } = require('../controllers/users/usersDelete');

//Me creo una constante para guardar el método Router y usar sus funcionalidades
const router = Router();

//Endpoint GET
router.get('/', usersGet);

//Endpoint POST
router.post('/', usersPost);

//Endpoint PUT
//Colocamos un ID para poder saber que tipo de usuario es
router.put('/:id', usersPut);

//Endpoint PATCH
router.patch('/', usersPatch);

//Endpoint DELETE
router.delete('/', usersDelete);

//Exportamos el método Router
module.exports = router;
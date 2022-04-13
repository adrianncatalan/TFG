//Requiero Router
const { Router } = require('express')

//Requiero mis controladores
const { usersGet, usersPut, usersPost, usersPatch, usersDelete } = require('../controllers/users');

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
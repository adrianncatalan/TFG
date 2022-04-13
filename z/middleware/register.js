//Creamos una función middleware para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
const register = (req, res, conection) => {
  const sql = "INSERT INTO users SET ?";

  const bcrypt = require('bcrypt');
  const bcryptjs = require('bcryptjs')
  const salt = 10;

  const userRegister = { id, name, surname, age, gender, height, weight, email, phone, password } = req.body;

  conection.query(sql, userRegister, (error) => {
    if (error) throw error;
    res.send('Usuario creado exitosamente.');
  });
};

//Exportamos el bloque de código que permite registrar al usuario
module.exports.register = register;

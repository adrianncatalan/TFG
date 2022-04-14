//Creamos una función middleware para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
const register = (req, res, connection) => {
  const sql = "INSERT INTO users SET ?";

  // const bcryptjs = require('bcryptjs')
  // const salt = 10;

  const userRegister = { name, surname, age, gender, height, weight, email, phone, password } = req.body;
  
  console.log(name);

  // bcryptjs.hashSync(password, salt);

  connection.query(sql, userRegister, (error) => {
    if (error) throw error;
    res.send('Usuario creado exitosamente.');
  });
};

//Exportamos el bloque de código que permite registrar al usuario
module.exports.register = register;

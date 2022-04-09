//Creamos una función middleware para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
const register = (req, res, conection) => {
  const sql = "INSERT INTO users SET ?";

  const user_obj = {
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    gender: req.body.gender,
    height: req.body.height,
    weight: req.body.weight,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  };

console.log(req.body.gender)

  const result = user_obj;

  conection.query(sql, user_obj, (error) => {
    if (error) throw error;

    res.send('Usuario creado exitosamente.');
    // res.json(result);
  });
};

//Exportamos el bloque de código que permite registrar al usuario
module.exports.register = register;

const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(yourPassword, salt, (err, hash) => {
        console.log(hash)
    });
});


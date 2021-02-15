const Users = require("../models/Users");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const signToken = (_id) => {
  return jwt.sign({ _id }, "my-secret", { expiresIn: 60 * 60 * 24 * 365 });
};

exports.register = (req, res) => {
  const { email, password } = req.body;

  crypto.randomBytes(16, (err, salt) => {
    const newSalt = salt.toString("base64");
    crypto.pbkdf2(password, newSalt, 10000, 64, "sha1", (err, key) => {
      const encryptedPassword = key.toString("base64");
      Users.findOne({ email })
        .exec()
        .then((user) => {
          if (user) return res.status(400).send("El usuario ya existe.");

          Users.create({
            email,
            password: encryptedPassword,
            salt: newSalt,
          }).then(() => {
            return res.send("Usuario creado con éxito");
          });
        });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ email })
    .exec()
    .then((user) => {
      if (!user)
        return res.status(400).send("Usuario y/o contraseña incorrecta");

      crypto.pbkdf2(password, user.salt, 10000, 64, "sha1", (err, key) => {
        const encryptedPassword = key.toString("base64");

        if (user.password === encryptedPassword) {
          const token = signToken(user._id);
          return res.send({ token });
        }
        return res.send.status(400).send("Usuario y/o contraseña incorrecta.");
      });
    });
};

exports.getUserData = (req, res) => {
  res.send(req.user);
};

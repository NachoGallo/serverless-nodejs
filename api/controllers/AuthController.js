const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const signToken = (_id) => {
  return jwt.sign({ _id }, "my-secret", { expiresIn: 60 * 60 * 24 * 365 });
};

exports.register = async (req, res) => {
  const { email, password, name } = req.body;

  const user = new Users({ email, password, name });

  await user.save();

  res.json({
    user,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });

  if (!user) {
    const msg = "Usuario y/o contraseña incorrecta";
    return res.status(400).send({ msg });
  }
  const validPassword = bcryptjs.compareSync(password, user.password);

  if (!validPassword) {
    const msg = "Usuario y/o contraseña incorrecta";
    return res.status(400).send({ msg });
  }
  const token = signToken(user._id);
  return res.send({ token });
};

exports.getUserData = (req, res) => {
  return res.send(req.user);
};

exports.checkExistEmail = async (email = "") => {
  const isExist = await Users.findOne({ email });
  if (isExist) {
    throw new Error(`El email: ${email}, ya está registrado`);
  }

  exports.existsUser = async (_id) => {
    console.log("_id", _id);
    const isExist = await Users.findOne({ _id });
    if (!isExist) {
      throw new Error(`No existe el usuario`);
    }
  };
};

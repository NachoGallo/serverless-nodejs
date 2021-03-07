const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

const isAuthenticated = (req, res, next) => {
  let bearerToken = req.headers.authorization;
  let token = null;

  if (bearerToken) {
    token = bearerToken.split(" ")[1];
  }

  if (!token) return res.sendStatus(403);

  jwt.verify(token, process.env.MY_SECRET, (err, decodedToken) => {
    const { _id } = decodedToken;

    Users.findOne({ _id })
      .exec()
      .then((user) => {
        if (!user) return res.sendStatus(403);

        req.user = user;
        next();
      });
  });
};

const hasRole = (role) => (req, res, next) => {
  if (req.user.role === role) return next();
  return res
    .status(403)
    .send({ msg: "No tenés permisos para realizar la acción." });
};

module.exports = {
  isAuthenticated,
  hasRole,
};

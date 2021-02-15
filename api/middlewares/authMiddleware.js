const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.sendStatus(403);

  jwt.verify(token, "my-secret", (err, decodedToken) => {
    const { _id } = decodedToken;

    Users.findOne({ _id })
      .exec()
      .then((user) => {
        req.user = user;
        next();
      });
  });
};

const hasRole = (role) => (req, res, next) => {
  if (req.user.role === role) return next();

  return res.sendStatus(403);
};

module.exports = {
  isAuthenticated,
  hasRole,
};

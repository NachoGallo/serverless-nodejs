const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = mongoose.model(
  "Users",
  new Schema({
    name: String,
    email: String,
    password: String,
    salt: String,
    role: { type: String, default: "user" },
  })
);

module.exports = Users;

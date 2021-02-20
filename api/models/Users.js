const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
    },
    salt: String,
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const { password, ...usuario } = this.toObject();
  return usuario;
};

//Antes de guardar encripta la password
// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });
module.exports = model("Users", userSchema);

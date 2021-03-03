const { Schema, model } = require("mongoose");
const bcryptjs = require("bcryptjs");
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
  const { password, createdAt, updatedAt, __v, ...usuario } = this.toObject();

  return usuario;
};

userSchema.virtual("domain").get(function () {
  return this.email.slice(this.email.indexOf("@") + 1);
});

//Antes de guardar encripta la password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(user.password, salt);
  }
  next();
});
module.exports = model("Users", userSchema);

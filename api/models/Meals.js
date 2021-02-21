const { Schema, model } = require("mongoose");

const mealSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: { type: Number, required: true },
    visibility: { type: Boolean, default: false },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
    },
  },
  { timestamps: true }
);

mealSchema.methods.toJSON = function () {
  const { __v, createdAt, updatedAt, ...meal } = this.toObject();
  return meal;
};
module.exports = model("Meals", mealSchema);

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
    category: { type: Schema.Types.ObjectId, ref: "Categories" },
  },
  { timestamps: true }
);

module.exports = model("Meals", mealSchema);

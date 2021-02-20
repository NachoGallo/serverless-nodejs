const { Schema, model } = require("mongoose");
const ordersSchema = new Schema(
  {
    meals: [{ type: Schema.Types.ObjectId, ref: "Meals", required: true }],
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "Restaurants",
      required: true,
    },
    additional: String,
    delivered: { type: Boolean, default: false },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = model("Orders", ordersSchema);

const { Schema, model } = require("mongoose");
const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    location: String,
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);
module.exports = model("Restaurants", restaurantSchema);

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

restaurantSchema.methods.toJSON = function () {
  const { __v, createdAt, updatedAt, ...restaurant } = this.toObject();
  return restaurant;
};

module.exports = model("Restaurants", restaurantSchema);

const { Schema, model } = require("mongoose");
const { isMongoId } = require("../utils/validations");
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
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ordersSchema.virtual("count_meals", {
  ref: "Meals",
  localField: "meals",
  foreignField: "_id",
  count: true,
});

ordersSchema.methods.toJSON = function () {
  const { __v, createdAt, updatedAt, ...order } = this.toObject();
  return order;
};

module.exports = model("Orders", ordersSchema);

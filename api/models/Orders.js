const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orders = mongoose.model(
  "Order",
  new Schema({
    meals: { type: Schema.Types.ObjectId, ref: "Meal" },
    userId: String,
    additional: String,
    price: Number,
  })
);

module.exports = Orders;

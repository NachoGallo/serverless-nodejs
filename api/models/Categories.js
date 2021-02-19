const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = mongoose.model(
  "Category",
  new Schema({
    name: String,
    description: String,
    visibility: { type: Boolean, default: false },
    restoranId: { type: Schema.Types.ObjectId, ref: "Restoran" },
  })
);

module.exports = Categories;

const { Schema, model } = require("mongoose");
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    visibility: { type: Boolean, default: false },
    restoranId: { type: Schema.Types.ObjectId, ref: "Restaourant" },
  },
  { timestamps: true }
);

module.exports = model("Categories", categorySchema);

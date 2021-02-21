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

categorySchema.methods.toJSON = function () {
  const { __v, createdAt, updatedAt, ...category } = this.toObject();
  return category;
};

module.exports = model("Categories", categorySchema);

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const subSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Nombre es requerido",
      minlength: [2, "Muy corto"],
      maxlength: [32, "Muy largo"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: { type: ObjectId, ref: "Category", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sub", subSchema);

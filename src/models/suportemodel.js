const mongoose = require("mongoose");

const supSchema = new mongoose.Schema({
  supMessage: {
    type: String,
    required: true,
  },
  supCargo: {
    type: String,
    required: true,
  },
  supStatus: {
    type: String,
    required: true,
    enum: ["on", "off"],
  },
});

const SupModel = mongoose.model("Suporte", supSchema);

module.exports = SupModel;

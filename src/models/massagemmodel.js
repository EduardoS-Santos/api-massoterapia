const mongoose = require("mongoose");

const massSchema = new mongoose.Schema({
  massNome: {
    type: String,
    required: true,
  },
  massDescricao: {
    type: String,
    required: true,
  },
  massPreco: {
    type: String,
    required: true,
  },
  massStatus: {
    type: String,
    required: true,
    enum: ["ON", "OFF"],
    default: "ON",
  },
});

const MassModel = mongoose.model("Massagens", massSchema);

module.exports = MassModel;

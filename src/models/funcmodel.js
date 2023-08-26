const mongoose = require("mongoose");

const funcSchema = new mongoose.Schema({
  nameFunc: {
    type: String,
    required: true,
  },
  cpfFunc: {
    type: String,
    required: true,
  },
  emailFunc: {
    type: String,
    required: true,
  },
  telefoneFunc: {
    type: Number,
    required: true,
  },
  senhaFunc: {
    type: String,
    required: true,
  },
  cargoFunc: {
    type: String,
    required: true,
  },
  statusFunc: {
    type: String,
    required: true,
    enum: ["on", "off"],
  },
});

const FuncModel = mongoose.model("funcionarioMass", funcSchema);

module.exports = FuncModel;

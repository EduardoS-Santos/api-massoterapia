const mongoose = require("mongoose");

const agenSchema = new mongoose.Schema({
  idUser: {
    type: String,
    ref: "UsersMass",
    required: true,
  },
  idFunc: {
    type: String,
    required: true,
  },
  idMass: {
    type: String,
    ref:"Massagens",
    required: true,
  },
  dataMass: {
    type: String,
    required: true,
  },
  horaMass: {
    type: String,
    required: true,
  },
  statusAgend: {
    type: String,
    enum: ["marcado", "desmarcado", "ausente"],
    required: true,
  },
});

const AgedModel = mongoose.model("Agendamento", agenSchema);

module.exports = AgedModel;

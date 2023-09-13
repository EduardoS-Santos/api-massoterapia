const mongoose = require("mongoose");

const agenSchema = new mongoose.Schema({
  idUser: {
    type: String,
    required: true,
  },
  idFunc: {
    type: String,
    required: true,
  },
  idMass: {
    type: String,
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
    enum: ["marcado", "desmarcado", "ausente","concluido"],
    required: true,
  },
});

const AgedModel = mongoose.model("Agendamento", agenSchema);

module.exports = AgedModel;

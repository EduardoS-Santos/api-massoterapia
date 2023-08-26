const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userNome: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userTelefone: {
    type: Number,
    required: true,
  },
  userSenha: {
    type: Number,
    required: true,
  },
  userCargo: {
    type: String,
    required: true,
  },
  userStatus: {
    type: String,
    required: true,
    enum: ["on", "off"],
  },
});

const UserModel = mongoose.model("UsersMass", userSchema);

module.exports = UserModel;

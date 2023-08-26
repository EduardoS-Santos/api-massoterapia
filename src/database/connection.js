const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@hotel.mthf7jq.mongodb.net/beme_star_massoterapia?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Conexao com banco de dados realizada com sucesso");
    })
    .catch((error) => {
      console.log("Falha na conexao com banco de dados", error);
    });
};

module.exports = connectToDatabase;

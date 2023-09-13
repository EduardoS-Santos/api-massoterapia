const express = require("express");
const cors = require("cors");
const UserModel = require("./models/usermodel");
const FuncModel = require("./models/funcmodel");
const MassModel = require("./models/massagemmodel");
const SupModel = require("./models/suportemodel");
const AgedModel = require("./models/agendamodel");
const FeedbackModel = require("./models/feedbackmodel");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:8100","https://bem-estar-massoterapia.onrender.com" // Defina a origem permitida
  })
);

// caminhos
app.set("view engine", "ejs");
app.set("views", "src/views");

//exemplo de middlewares
app.use(
  cors({
    origin: "http://localhost:8100",
  })
);
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date ${new Date()}`);
  next();
});
// porta de conexao
const port = 8080;

//Usuário

// criando uma view em ejs
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users });
});

//cria um user
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//mostra todos os users

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({ userStatus: "on" });

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//localiza users pelo id

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//atualiza os usuarios

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// deletar usuario com patch
// {"userStatus": "off"}

app.patch("/users/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
      userStatus: "off",
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deleta o usuario
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// login usuario

app.get("/users/:email/:senha", async (req, res) => {
  try {
    const email = req.params.email;
    const senha = req.params.senha;
    const users = await UserModel.find({ userEmail: email, userSenha: senha });

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// funcionario

//cria um funcionario
app.post("/func", async (req, res) => {
  try {
    const func = await FuncModel.create(req.body);
    res.status(201).json(func);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//mostra todos os funcionarios

app.get("/func", async (req, res) => {
  try {
    const funcs = await FuncModel.find({ statusFunc: "on" });

    res.status(200).json(funcs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//localiza funcionarios pelo id

app.get("/func/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const func = await FuncModel.findById(id);

    return res.status(200).json(func);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//atualiza os funcionarios

app.patch("/func/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const func = await FuncModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(func);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// desabilita funcionario com patch
// {"userStatus": "off"}

app.patch("/func/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const func = await FuncModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(func);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deleta o funcionario
app.delete("/func/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const func = await FuncModel.findByIdAndRemove(id);

    res.status(200).json(func);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// login usuario

app.get("/func/:email/:senha", async (req, res) => {
  try {
    const email = req.params.email;
    const senha = req.params.senha;
    const funcs = await FuncModel.find({ emailFunc: email, senhaFunc: senha });

    res.status(200).json(funcs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Massagens

//cria uma massagem
app.post("/massagem", async (req, res) => {
  try {
    const mass = await MassModel.create(req.body);
    res.status(201).json(mass);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//mostra todos as massagem

app.get("/massagem", async (req, res) => {
  try {
    const mass = await MassModel.find({ massStatus: "on" });

    res.status(200).json(mass);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//localiza massagem pelo id

app.get("/massagem/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const mass = await MassModel.findById(id);

    return res.status(200).json(mass);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//atualiza os massagem

app.patch("/massagem/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const mass = await MassModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(mass);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// desabilita massagem com patch
// {"userStatus": "off"}

app.patch("/massagem/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const mass = await MassModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(mass);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deleta a massagem
app.delete("/massagem/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const mass = await MassModel.findByIdAndRemove(id);

    res.status(200).json(mass);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// feedback

// cria um feedback
app.post("/feedback", async (req, res) => {
  try {
    const feed = await FeedbackModel.create(req.body);
    res.status(201).json(feed);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// localiza todos os feedback com on
app.get("/feedback", async (req, res) => {
  try {
    const feed = await FeedbackModel.find({ feedStatus: "on" });

    res.status(200).json(feed);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//localiza feedback pelo id

app.get("/feedback/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const feed = await FeedbackModel.findById(id);

    return res.status(200).json(feed);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// atualiza o feedback

app.patch("/feedback/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const feed = await FeedbackModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(feed);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/feedback/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const feed = await FeedbackModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(feed);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deleta a feedback
app.delete("/feedback/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const feed = await FeedbackModel.findByIdAndRemove(id);

    res.status(200).json(feed);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// suporte

// cria um chamado de suporte
app.post("/suporte", async (req, res) => {
  try {
    const sup = await SupModel.create(req.body);
    res.status(201).json(sup);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// localiza todos os suporte com on
app.get("/suporte", async (req, res) => {
  try {
    const sup = await SupModel.find({ supStatus: "on" });

    res.status(200).json(sup);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//localiza suporte pelo id

app.get("/suporte/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sup = await SupModel.findById(id);

    return res.status(200).json(sup);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// atualiza o suporte

app.patch("/suporte/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sup = await SupModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(sup);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/suporte/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sup = await SupModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(sup);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deleta a suporte
app.delete("/suporte/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const sup = await SupModel.findByIdAndRemove(id);

    res.status(200).json(sup);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Agendamento

// cria um agendamento
app.post("/agendamento", async (req, res) => {
  try {
    const agend = await AgedModel.create(req.body);
    res.status(201).json(agend);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// localiza todos os agendamento com on
app.get("/agendamento", async (req, res) => {
  try {
    const agend = await AgedModel.find({ statusAgend: "marcado" });

    res.status(200).json(agend);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//localiza agendamento pelo id

app.get("/agendamento/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const agend = await AgedModel.findById(id);

    return res.status(200).json(agend);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// atualiza o agendamento

app.patch("/agendamento/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const agend = await AgedModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(agend);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/agendamento/del/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const agend = await AgedModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(agend);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deleta a agendamento
app.delete("/agendamento/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const agend = await AgedModel.findByIdAndRemove(id);

    res.status(200).json(agend);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Rodando com Express na Porta ${port}.`));

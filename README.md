# API Massoterapia

API REST desenvolvida para gerenciamento de uma aplicação de massoterapia.

O projeto disponibiliza operações de CRUD para usuários, funcionários, massagens, agendamentos, feedbacks e suporte, além de sistemas de login e consultas específicas para gerenciamento de agendamentos.

---

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- JavaScript

---

## Estrutura do projeto

```text
API-MASSOTERAPIA/
│
├── node_modules/
│
├── src/
│   ├── database/
│   │   └── connection.js
│   │
│   ├── models/
│   │   ├── agendamodel.js
│   │   ├── feedbackmodel.js
│   │   ├── funcmodel.js
│   │   ├── massagemmodel.js
│   │   ├── suportemodel.js
│   │   └── usermodel.js
│   │
│   ├── aplication.js
│   └── index.js
│
├── documentacao_API.txt
├── package.json
└── package-lock.json
```

---

## Modelos

A API utiliza o Mongoose para realizar a conexão com o MongoDB e possui seis modelos através de `Schema()`.

### UserMass

Modelo responsável pelos usuários da aplicação.

```javascript
{
    userNome: String,
    userEmail: String,
    userTelefone: Number,
    userSenha: String,
    userCargo: String,
    userStatus: String
}
```

**Status:**

- `on`
- `off`

---

### funcionarioMass

Modelo responsável pelos funcionários.

```javascript
{
    nameFunc: String,
    cpfFunc: String,
    emailFunc: String,
    telefoneFunc: Number,
    senhaFunc: String,
    cargoFunc: String,
    statusFunc: String
}
```

**Status:**

- `on`
- `off`

---

### Massagens

Modelo responsável pelos serviços de massoterapia.

```javascript
{
    massNome: String,
    massDescricao: String,
    massPreco: String,
    massStatus: String
}
```

**Status:**

- `on`
- `off`

---

### Agendamento

Modelo responsável pelos agendamentos.

```javascript
{
    idUser: String,
    idFunc: String,
    idMass: String,
    dataMass: String,
    horaMass: String,
    statusAgend: String
}
```

O modelo possui referências para outros modelos através do Mongoose.

**Status do agendamento:**

- `marcado`
- `desmarcado`
- `ausente`

---

### Feedback

Modelo responsável pelos feedbacks.

```javascript
{
    feedMessage: String,
    feddCargo: String,
    feedStatus: String
}
```

**Status:**

- `on`
- `off`

---

### Suporte

Modelo responsável pelas mensagens de suporte.

```javascript
{
    supMessage: String,
    supCargo: String,
    supStatus: String
}
```

**Status:**

- `on`
- `off`

---

# Endpoints

A API disponibiliza operações CRUD para os seguintes recursos:

| Recurso | Endpoint |
|---|---|
| Usuários | `/users` |
| Funcionários | `/func` |
| Massagens | `/massagem` |
| Feedbacks | `/feedback` |
| Suporte | `/suporte` |
| Agendamentos | `/agendamento` |

---

# Usuários

### CRUD

```http
/users
```

Permite realizar as operações CRUD relacionadas aos usuários.

Para operações relacionadas a um usuário específico:

```http
/users/:id
```

Para desativação:

```http
/users/del/:id
```

---

# Funcionários

### CRUD

```http
/func
```

Para operações relacionadas a um funcionário específico:

```http
/func/:id
```

Para desativação:

```http
/func/del/:id
```

---

# Massagens

### CRUD

```http
/massagem
```

Para operações relacionadas a uma massagem específica:

```http
/massagem/:id
```

Para desativação:

```http
/massagem/del/:id
```

---

# Feedback

### CRUD

```http
/feedback
```

Para operações relacionadas a um feedback específico:

```http
/feedback/:id
```

Para desativação:

```http
/feedback/del/:id
```

---

# Suporte

### CRUD

```http
/suporte
```

Para operações relacionadas a um suporte específico:

```http
/suporte/:id
```

Para desativação:

```http
/suporte/del/:id
```

---

# Agendamentos

### CRUD

```http
/agendamento
```

Para operações relacionadas a um agendamento específico:

```http
/agendamento/:id
```

Para desativação:

```http
/agendamento/del/:id
```

---

# Sistema de Login

A API possui dois endpoints específicos para autenticação.

### Login de usuário

```http
/Login
```

O endpoint verifica os dados enviados no corpo da requisição utilizando `findOne()` e retorna os dados do usuário caso ele seja encontrado.

### Login de funcionário

```http
/loginf
```

Realiza o mesmo processo para autenticação de funcionários.

---

# Consultas de Agendamento

Além das operações CRUD, a API possui endpoints específicos para consultas de agendamentos.

### Agendamentos do usuário

```http
/listaragendu
```

Busca os agendamentos marcados do usuário e retorna um array de objetos.

### Agendamentos com informações relacionadas

```http
/listaragendF
```

Busca os agendamentos utilizando `model()`, `find()` e `populate()`.

O `populate()` permite recuperar informações de outras coleções, como o nome da massagem e o nome do usuário, substituindo a necessidade de trabalhar apenas com seus respectivos IDs.

---

# ⚙️ Funcionamento

## POST

As requisições `POST` recebem os dados através do `body` da requisição e utilizam o método:

```javascript
.create()
```

O método é utilizado juntamente com o modelo correspondente.

A exceção ocorre nas requisições de login, que utilizam:

```javascript
.findOne()
```

para localizar o usuário ou funcionário.

---

## GET

As requisições `GET` utilizam principalmente:

```javascript
.find()
.findById()
.populate()
```

Esses métodos são utilizados juntamente com os modelos Mongoose para realizar consultas no MongoDB.

---

## PATCH

As requisições `PATCH` utilizam:

```javascript
.findByIdAndUpdate()
```

O método permite atualizar registros específicos através de seus respectivos IDs.

O `findByIdAndUpdate()` também é utilizado nas rotas de desativação.

Dessa forma, determinados dados podem ser desabilitados sem necessariamente serem removidos da coleção.

---

## DELETE

Para exclusões permanentes é utilizado:

```javascript
.findByIdAndRemove()
```

Esse método remove definitivamente o registro da coleção.

---

# Fluxo da API

```text
                 ┌───────────────┐
                 │    Cliente    │
                 └───────┬───────┘
                         │
                         ▼
                 ┌───────────────┐
                 │    Express    │
                 └───────┬───────┘
                         │
                         ▼
                 ┌───────────────┐
                 │    Mongoose   │
                 └───────┬───────┘
                         │
                         ▼
                 ┌───────────────┐
                 │    MongoDB    │
                 └───────────────┘
```

---

# Relacionamentos

O modelo `Agendamento` possui referências relacionadas a outros modelos.

```text
UserMass
   │
   │ idUser
   ▼
Agendamento
   │
   │ idMass
   ▼
Massagens
```

Esses relacionamentos podem ser consultados utilizando o método:

```javascript
.populate()
```

---

# CORS

A aplicação utiliza CORS para permitir requisições provenientes da aplicação cliente.

A origem da aplicação foi liberada através da configuração do CORS após a hospedagem da aplicação.

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/EduardoS-Santos/api-massoterapia
```

Entre na pasta:

```bash
cd API-MASSOTERAPIA
```

Instale as dependências:

```bash
npm install
```

Configure a conexão com o MongoDB no arquivo:

```text
src/database/connection.js
```

Execute a aplicação:

```bash
node src/index.js
```

---

# Considerações

A API foi desenvolvida utilizando uma arquitetura baseada em API REST, utilizando:

- **Express** para criação do servidor e gerenciamento das requisições;
- **Mongoose** para modelagem e comunicação com o MongoDB;
- **MongoDB** para armazenamento dos dados;
- **CORS** para permitir a comunicação com a aplicação cliente.

O projeto possui operações CRUD, sistema de login, gerenciamento de agendamentos e consultas utilizando relacionamentos entre coleções.

---

# Autor

**Eduardo Silva Santos**

Projeto desenvolvido para gerenciamento de uma aplicação de serviços de massoterapia utilizando Node.js, Express, Mongoose e MongoDB.

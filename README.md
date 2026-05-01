# API de Gestão para Aplicação de Massoterapia

API RESTful desenvolvida para gerenciar a comunicação entre a aplicação de massoterapia e o banco de dados, incluindo controle de usuários, funcionários e autenticação.

---

## Visão Geral

Esta API foi construída utilizando Node.js e Express, com integração ao banco de dados via MongoDB utilizando Mongoose.

Ela é responsável por:

* Gerenciar usuários e funcionários
* Controlar autenticação e login
* Realizar operações CRUD
* Servir como camada intermediária entre frontend e banco de dados

---

## Arquitetura

A API segue o padrão:

* **Controller** → Regras de negócio
* **Model** → Estrutura dos dados (Mongoose)
* **Routes** → Endpoints
* **Middleware** → Autenticação e validações

---

## Tecnologias Utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* dotenv
* cors

---

## Autenticação

A API possui controle de login para:

* Usuários
* Funcionários

As credenciais são validadas e processadas antes de permitir acesso aos recursos protegidos.

---

## Endpoints

A API utiliza os seguintes métodos HTTP:

### GET

* Buscar usuários
* Buscar funcionários
* Consultar dados

### POST

* Criar usuários
* Criar funcionários
* Realizar login

### PATCH

* Atualizar dados de usuários e funcionários

### DELETE

* Remover registros

---

## Estrutura do Projeto

```
/src
  /database
  /models
  aplication.js
.env
index.js
```

---

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/EduardoS-Santos/api-massoterapia
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env`:

```
PORT= 8080
MONGO_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
```

4. Execute a aplicação:

```bash
npm run dev
```

---

##  Fluxo da API

1. O cliente envia uma requisição HTTP
2. O controller processa a lógica
3. O model interage com o banco via Mongoose
4. A resposta é retornada ao cliente

---

##  Segurança

* Uso de variáveis de ambiente com dotenv
* Controle de acesso por autenticação
* Restrição de origem com cors

---

##  Autor

Desenvolvido para fins de estudo e portfólio, com foco em boas práticas de desenvolvimento backend.

---

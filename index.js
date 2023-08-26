const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connection");

dotenv.config();

connectToDatabase();

require("./src/aplication");

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");

// enviroment setup
require("dotenv").config();

// app
const app = express();

// db
const db = String(process.env.MONGO_DB_URI);
mongoose
  .connect(db)
  .then(() => console.log("CCOMMERCE DB: CONECTADO"))
  .catch((err) => console.log("CCOMMERCE DB: ERROR DE CONEXIÓN", err));

// middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`Servidor esta corriendo en el puerto ${port}`)
);

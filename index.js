const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
let usuarios = [];
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.get("/", (req, res) => {
  res.send("hola mundo");
});
server.post("/personas", (req, res) => {
  usuarios.push(req.body);
  res.json(req.body);
});
server.get("/personas", (req, res) => {
  res.json(usuarios);
});

server.listen(3000);

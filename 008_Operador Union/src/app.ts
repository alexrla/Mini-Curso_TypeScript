import express from "express";
import { convertCLTToPJ } from "./controllers/calculator-controller.js";
import { listAll } from "./controllers/jobs-controller.js";

const server = express();

server.get("/health", (req, res) => {
  res.send("Foi!!!");
});

server.get("/calculator", convertCLTToPJ);
server.get("/jobs", listAll);

server.listen(4000, () => {
  console.log("Executando...");
});

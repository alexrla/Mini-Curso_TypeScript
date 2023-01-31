import express from "express";
import { convertCLTToPJ } from "./controllers/calculator-controller.js";

const server = express();

server.get("/health", (req, res) => {
  res.send("Foi!!!");
});

server.get("/calculator", convertCLTToPJ);

server.listen(4000, () => {
  console.log("Executando...");
});

import express from "express";
import churrasco from "./Churrasco.js";

const app = express();
const port = 3000;

app.get("/", (requisicao, resposta) => {
  resposta.send(churrasco);
});

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));

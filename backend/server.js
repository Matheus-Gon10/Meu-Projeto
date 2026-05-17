const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/saudacao", (req, res) => {
    const nome = req.query.nome;

    res.json({
        mensagem: `Olá, ${nome}! Seja bem-vindo ao sistema.`
});
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
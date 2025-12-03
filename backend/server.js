const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "Backend da Biblioteca Online funcionando!" });
});

// Importar rotas (vamos criar depois)
const livrosRoutes = require("./routes/livros");
app.use("/livros", livrosRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

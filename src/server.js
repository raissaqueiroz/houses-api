const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');

//import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
  // Use your MongoDB Atlas connection string


// logar na aplicação (perfil cliente e perfil de locatário)
app.get("/", (req, res) => {
    return res.json({ ok: true });
})

// Autenticação
// Recuperação Senha
// C - CREATE cadastrar uma casa
// R - READ listar casas
// U - Update editar uma casa
// D - DELETE deletar uma casa




//voltar pra explicar campo virtual e funções de criptografia



app.listen(process.env.PORT || 3333, () => {
    console.log(`Server Start in Port ${3333}`)
});
const express = require('express'); // chamando a biblioteca express para cuidar das rotas
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express(); // aqui instancio o app para pegar a fução do express()

mongoose.connect('mongodb+srv://linikerj:linikercurso@cluster0-hnpqz.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json()); // .use() para todas configuraçõs
app.use(routes)

app.listen(3333);

//  Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params; usados para GET 90% das vezes não tem corpo ?queryparme.. request.query(Filtros, ordenação, paginação...)
// Rout Params; DELETE você deleta pelo id do usuario exe: users/1 request.params
// Body: Usado no POST e PUT criar um usuario, usado no corpo da requisição.. formato JSON

// MongoDB (Não-relacional) Ecommerce não funciona...




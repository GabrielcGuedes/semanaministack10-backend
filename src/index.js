const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-crtux.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, // para n mostrar erro
    useUnifiedTopology: true, // para n mostrar erro
    
  
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(cors())
app.use(express.json()); // para o express entender que o body usa json
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: request.query (Filtros, ordenação, paginção,...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criaçâo ou alteração de um registro)



server.listen(3333);
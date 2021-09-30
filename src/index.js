const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://arthur:senha229@cluster0.rcnz5.mongodb.net/omniStack?retryWrites=true&w=majority');

app.use(express.json());
app.use(routes);

app.listen(3333);


// Metodos HTTP:
// get, post, put, delete

// get = pegar informação
// post = criar informação
// put = editar uma informação

// Query params: request.query(filtros, ordenação, paginação, ... )
// Route Params: request.params ( identificar um recurso na alteração ou remoção)
// Body: request.body ( dados para criação ou alteração de um registro )

/*app.get('/', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello Mayan'});
}); */

/* app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({ message: 'Hello Mayan'});
}); */

// MongoDB (Não-relacional)




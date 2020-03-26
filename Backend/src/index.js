const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Metodos HTTP
 * 
 * GET: Buscar/listar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao) = request.query
 * Route: Parametros utilizados para identificar recursos = request.params
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */



app.listen(3333);
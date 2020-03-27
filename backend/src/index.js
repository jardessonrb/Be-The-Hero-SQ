/*
*Rota / recurso
*Metodos http
Get: Buscar Backend
Post: Criar Backend
Put: Alterar Backend
Delete: Deletar no Backend
*/

/*
Tipos de parametros
Query : Parametros nomeados enviados após "?" (Filtros e paginação) EX /users?name=jrs&teste=1
Route : Parametros para identificar recursos Ex:/users/:d rota =>  /users/1
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
Driver : SELECT * FROM users
Query Builder: table('users').select('*').where()
*/


const express =  require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
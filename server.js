// Este é o arquivo principal da API

const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
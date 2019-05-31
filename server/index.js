const express = require('express');
const proxy = require('http-proxy-middleware');
const parser = require('body-parser');
const request = require('request');
const cors = require('cors');
const path = require('path');

const server = express();
const port = 4005;
// const route = express.Router();

server.use(parser.json())
server.use(parser.urlencoded({extended:true}))
server.use(express.static(path.join(__dirname, '../dist')))
server.use(cors())

server.use('/', proxy({
  target: 'localhost:3000',
  router: {
    '/navbar': "http://localhost:3001",
    '/productDescription': "http://localhost:3002",
    '/morelooks': 'http://localhost:4003',
    '/reviews': 'http://localhost:3004',
  },
  changeOrigin: true
}))


server.listen(port, () => console.log(`listening on proxy port ${port}`))
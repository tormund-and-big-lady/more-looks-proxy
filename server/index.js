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

server.use('/nordstrom', proxy({
  target: 'localhost:4005',
  router: {
    '/navbar': "http://localhost:3000",
    '/morelooks': 'http://localhost:4000',
  },
  changeOrigin: true
}))


server.listen(port, () => console.log(`listening on proxy port ${port}`))
const express = require('express');
const proxy = require('http-proxy-middleware');
const parser = require('body-parser');
const request = require('request');
const path = require('path');

const server = express();
const port = 4005;
const router = express.Router();

server.use(parser.json())
server.use(paser.urlencodede({extended:true}))
server.use(express.static(path.join(__dirname, '../dist')))

server.use('/norstrom', proxy({
  target: 'localhost:4005',
  router: {
    '/navbar': "localhost:3000",
    '/more-looks': 'localhost:4000',
  },
  changeOrigin: true
}))

server.listen(port, () => console.log(`listening on proxy port ${port}`))
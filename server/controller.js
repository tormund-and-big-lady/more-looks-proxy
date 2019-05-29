const axios = require('axios');

const controller = {
  navbar: (req, res) => {
    axios.get('http://localhost:3000/navbar/navbar')
      .then(data => res.status(202).send(data.data))
      .catch(err => res.status(404).send(err))
  },
  navbarid: (req, res) => {
    let {_id} = req.params;
    axios.get(`http://localhost:3000/navbar/navbar/${_id}`)
      .then(data => res.status(202).send(data.data))
      .catch(err => res.status(404).send(err))
  },
  navbarterms: (req, res) => {
    let {term} = req.params;
    axios.get(`http://localhost:3000/navbar/search/${term}`)
    .then(data => res.status(202).send(data.data))
    .catch(err => res.status(404).send(err))
  },
  morelooks: (req, res) => {
    axios.get('http://localhost:4000/morelooks/api/purses')
      .then(data => res.status(202).send(data.data))
      .catch(err => res.status(404).send(err))
  }
}

module.exports = controller;
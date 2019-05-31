const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router
  .route('/navbar')
  .get(controller.navbar)

router
  .route('/navbar/navbar/:_id')
  .get(controller.navbarid)

// router
//   .route('/navbar/search/:term')
//   .get(controller.navbarterms)

router
  .route('/morelooks')
  .get(controller.morelooks)

module.exports = router;
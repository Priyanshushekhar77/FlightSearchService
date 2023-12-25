 const express = require('express');
 const router= express.Router();

 const v1ApiRoutes = require('./v1/index')//mapping
//  const v1ApiRoutes = require('./v2/index')//mapping

 router.use('/v1',v1ApiRoutes);
//  router.use('./v2',v1ApiRoutes);

 module.exports = router;


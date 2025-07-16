// routes/networkRoutes.js
const express = require('express');
const router  = express.Router();
const ctl     = require('../controllers/networkController');

// existing GET
router.get('/', ctl.showGraph);

// new POST endpoint
router.post('/config', express.json(), ctl.postConfig);

// after your POST and GET “/”
router.get('/config', ctl.getConfig);


module.exports = router;

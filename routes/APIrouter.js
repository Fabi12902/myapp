const express = require('express');
const router = express.Router();
const Controller = require('../controllers/APIcontroller')


router.get('/api', Controller.list); 



module.exports = router;

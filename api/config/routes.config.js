const express = require('express');
const router = express.Router();
const establishments = require('../controllers/establishments.controllers');

router.get('/establishments', establishments.list);
router.post('/establishments', establishments.create);

module.exports = router;
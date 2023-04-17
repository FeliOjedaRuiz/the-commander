const express = require('express');
const router = express.Router();
const locals = require('../controllers/locals.controllers');

router.get('/locals', locals.list);

module.exports = router;
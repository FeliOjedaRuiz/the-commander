const express = require('express');
const router = express.Router();
const establishments = require('../controllers/establishments.controllers');
const users = require('../controllers/users.controllers');

const establishMid = require('../middlewares/establishments.mid')

// ESTABLISHMENTS
router.get('/establishments', establishments.list);
router.post('/establishments', establishments.create);
router.get('/establishments/:id', establishMid.exists, establishments.detail)
router.delete('/establishments/:id', establishMid.exists, establishments.delete);
router.patch('/establishments/:id', establishMid.exists, establishments.update)

// USERS
router.get('/users', users.list)
router.post('/users', users.create)
router.get('/users/:id', users.detail)
router.delete('/users/:id', users.delete)
router.patch('/users/:id', users.update)

router.post('/login', users.login)

module.exports = router;
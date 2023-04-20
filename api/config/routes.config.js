const express = require('express');
const router = express.Router();
const establishments = require('../controllers/establishments.controllers');
const establishMid = require('../middlewares/establishments.mid')

router.get('/establishments', establishments.list);
router.post('/establishments', establishments.create);
router.get('/establishments/:id', establishMid.exists, establishments.detail)
router.delete('/establishments/:id', establishMid.exists, establishments.delete);
router.patch('/establishments/:id', establishMid.exists, establishments.update)

module.exports = router;
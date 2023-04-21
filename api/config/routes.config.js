const express = require('express');
const router = express.Router();
const establishments = require('../controllers/establishments.controllers');
const users = require('../controllers/users.controllers');
const products = require('../controllers/products.controller');
const services = require('../controllers/services.controller');

const establishmentsMid = require('../middlewares/establishments.mid');
const usersMid = require('../middlewares/users.mid');
const productsMid = require('../middlewares/products.mid');
const servicesMid = require('../middlewares/services.mid');

// ESTABLISHMENTS
router.post('/establishments', establishments.create);
router.get('/establishments', establishments.list);
router.get('/establishments/:id', establishmentsMid.exists, establishments.detail);
router.patch('/establishments/:id', establishmentsMid.exists, establishments.update);
router.delete('/establishments/:id', establishmentsMid.exists, establishments.delete);

// USERS
router.post('/users', users.create);
router.get('/users', users.list);
router.get('/users/:id', usersMid.exists, users.detail);
router.patch('/users/:id', usersMid.exists, users.update);
router.delete('/users/:id', usersMid.exists, users.delete);

router.post('/login', users.login);

//PRODUCTS
router.post('/products', products.create);
router.get('/products', products.list);
router.get('/products/:id', productsMid.exists, products.detail);
router.patch('/products/:id', productsMid.exists, products.update);
router.delete('/products/:id', productsMid.exists, products.delete);

//SERVICES
router.post('/establishments/:id/service', services.create);
router.get('/establishments/:id/services', services.list);
router.get('/establishments/:id/service/:serviceId', servicesMid.exists, services.detail);
router.patch('/establishments/:id/service/:serviceId', servicesMid.exists, services.update);
router.delete('/establishments/:id/service/:serviceId', servicesMid.exists, services.delete);


module.exports = router;
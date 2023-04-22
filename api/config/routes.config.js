const express = require('express');
const router = express.Router();
const establishments = require('../controllers/establishments.controllers');
const users = require('../controllers/users.controllers');
const products = require('../controllers/products.controllers');
const services = require('../controllers/services.controllers');
const orders = require('../controllers/orders.controllers');

const establishmentsMid = require('../middlewares/establishments.mid');
const usersMid = require('../middlewares/users.mid');
const productsMid = require('../middlewares/products.mid');
const servicesMid = require('../middlewares/services.mid');
const ordersMid = require('../middlewares/orders.mid');
const secure = require('../middlewares/secure.mid');

// USERS
router.post('/users', users.create);
router.get('/users', users.list);
router.get('/users/:id', usersMid.exists, users.detail);
router.patch('/users/:id', usersMid.exists, users.update);
router.delete('/users/:id', usersMid.exists, users.delete);

router.post('/users/establishmentId', secure.auth, establishmentsMid.owner, users.create);

router.post('/login', users.login);

// ESTABLISHMENTS
router.post('/establishments', secure.auth, establishments.create);
router.get('/establishments', secure.auth, establishmentsMid.owner, establishments.list);
router.get('/establishments/:id', secure.auth, establishmentsMid.owner, establishments.detail);
router.patch('/establishments/:id', secure.auth, establishmentsMid.owner, establishments.update);
router.delete('/establishments/:id', secure.auth, establishmentsMid.owner, establishments.delete);

//PRODUCTS
router.post('/establishments/:id/products', secure.auth, establishmentsMid.owner, products.create);
router.get('/establishments/:id/products', products.list);
router.get('/establishments/:id/products/:productId', productsMid.exists, products.detail);
router.patch('/establishments/:id/products/:productId', secure.auth, establishmentsMid.owner, productsMid.exists, products.update);
router.delete('/establishments/:id/products/:productId', secure.auth, establishmentsMid.owner, productsMid.exists, products.delete);

//SERVICES
router.post('/establishments/:id/services', secure.auth, establishmentsMid.owner, services.create);
router.get('/establishments/:id/services', secure.auth, establishmentsMid.owner, services.list);
router.get('/establishments/:id/service/:serviceId', secure.auth, establishmentsMid.owner, servicesMid.exists, services.detail);
router.patch('/establishments/:id/service/:serviceId', secure.auth, establishmentsMid.owner, servicesMid.exists, services.update);
router.delete('/establishments/:id/service/:serviceId', secure.auth, establishmentsMid.owner, servicesMid.exists, services.delete);

//ORDERS
router.post('/:serviceId/orders', secure.auth, orders.create);
router.get('/:serviceId/orders', secure.auth, orders.list);
router.get('/:serviceId/order/:orderId', secure.auth, ordersMid.exists, orders.detail);
router.patch('/:serviceId/order/:orderId', secure.auth, ordersMid.exists, orders.update);
router.delete('/:serviceId/order/:orderId', secure.auth, ordersMid.exists, orders.delete);


module.exports = router;
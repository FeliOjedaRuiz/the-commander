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
router.post('/users', users.createAdmin);
router.get('/users/:establishmentId', secure.auth, establishmentsMid.owner, users.list);
router.get('/users/:establishmentId/:id', secure.auth, usersMid.exists, establishmentsMid.owner, usersMid.isAdmin, users.detail);
router.patch('/users/:establishmentId/:id', secure.auth, usersMid.exists, establishmentsMid.owner, usersMid.isAdmin, users.update);
router.delete('/users/:establishmentId/:id', secure.auth, usersMid.exists, establishmentsMid.owner, usersMid.isAdmin, users.delete);

router.post('/users/:establishmentId', secure.auth, establishmentsMid.owner, users.createStaff);

router.post('/login', users.login);

// ESTABLISHMENTS
router.post('/establishments', secure.auth, usersMid.isAdmin, establishments.create);
router.get('/establishments', secure.auth, usersMid.isAdmin, establishments.list);
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
router.post('/establishments/:id/services', secure.auth, establishmentsMid.staff, usersMid.canTakeService, services.create);
router.get('/establishments/:id/services', secure.auth, establishmentsMid.staff, usersMid.canTakeService, services.list);
router.get('/establishments/:id/service/:serviceId', secure.auth, establishmentsMid.staff, usersMid.canTakeService, servicesMid.exists, services.detail);
router.patch('/establishments/:id/service/:serviceId', secure.auth, servicesMid.exists, establishmentsMid.staff, servicesMid.canEdit, services.update);
router.delete('/establishments/:id/service/:serviceId', secure.auth, servicesMid.exists, establishmentsMid.staff, servicesMid.canEdit, services.delete);

//ORDERS
router.post('/:serviceId/orders', secure.auth, servicesMid.canEdit, orders.create);
router.get('/:serviceId/orders', secure.auth, servicesMid.canEdit, orders.list);
router.get('/establishments/:id/orders', secure.auth, establishmentsMid.owner, orders.listAll);
router.get('/:serviceId/order/:orderId', secure.auth, ordersMid.exists, servicesMid.canEdit, orders.detail);
router.patch('/:serviceId/order/:orderId', secure.auth, ordersMid.exists, servicesMid.canEdit, orders.update);
router.delete('/:serviceId/order/:orderId', secure.auth, ordersMid.exists, servicesMid.canEdit, orders.delete);



module.exports = router;
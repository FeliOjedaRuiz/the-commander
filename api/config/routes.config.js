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
router.get('/establishments/:id', secure.auth, establishments.detail);
router.patch('/establishments/:id', secure.auth, establishmentsMid.owner, establishments.update);
router.delete('/establishments/:id', secure.auth, establishmentsMid.owner, establishments.delete);

//PRODUCTS
router.post('/products', secure.auth, establishmentsMid.owner, products.create);
router.get('/products/:establishmentId', secure.auth, products.list);
router.get('/products/:productId', productsMid.exists, products.detail);
router.patch('/products/:productId', secure.auth, establishmentsMid.owner, productsMid.exists, products.update);
router.delete('/products/:productId', secure.auth, establishmentsMid.owner, productsMid.exists, products.delete);

//SERVICES
router.post('/services', secure.auth, usersMid.canTakeService, services.create);
router.get('/services/:establishmentId', secure.auth, establishmentsMid.exists, establishmentsMid.staff, usersMid.canTakeService, services.list);
router.get('/services/:userId/user', secure.auth,  usersMid.canTakeService, services.list);
router.get('/services/detail/:serviceId', secure.auth, servicesMid.exists, servicesMid.canEdit, services.detail);
router.patch('/services/:serviceId', secure.auth, servicesMid.exists, establishmentsMid.staff, servicesMid.canEdit, services.update);
router.delete('/services/:serviceId', secure.auth, servicesMid.exists, establishmentsMid.staff, servicesMid.canEdit, services.delete);

//ORDERS
router.post('/orders/:serviceId', secure.auth, servicesMid.canEdit, orders.create);
router.get('/orders/:serviceId', secure.auth, servicesMid.canEdit, orders.list);
router.get('/orders/:establishmentId/all', secure.auth, establishmentsMid.staff, orders.listAll);
router.get('/orders/:orderId', secure.auth, ordersMid.exists, servicesMid.canEdit, orders.detail);
router.patch('/orders/:orderId', secure.auth, ordersMid.exists, orders.update);
router.delete('/orders/:orderId', secure.auth, ordersMid.exists, servicesMid.canEdit, orders.delete);



module.exports = router;
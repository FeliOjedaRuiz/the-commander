const Order = require('../models/order.model');

module.exports.create = (req, res, next) => {
  Order.create({
    product: req.body.product,
    service: req.params.serviceId,
  })    
    .then((order) => res.status(201).json(order))
    .catch(next)
};

module.exports.list = (req, res, next) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch(next)
};

module.exports.detail = (req, res, next) => res.json(req.order);

module.exports.update = (req, res, next) => {
  Object.assign(req.order, req.body);
  req.order
    .save()
    .then((order) => res.json(order))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Order.deleteOne({ _id: req.order.id })    
    .then(() => res.status(204).send())
    .catch(next)
};

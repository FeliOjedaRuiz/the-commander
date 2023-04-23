const Order = require('../models/order.model');
const Service = require('../models/service.model');
const Establishment = require('../models/establishment.model');

module.exports.create = (req, res, next) => {
  Order.create({
    product: req.body.product,
    service: req.params.serviceId,
  })    
    .then((order) => res.status(201).json(order))
    .catch(next)
};

module.exports.list = (req, res, next) => {
  Service.findById(req.params.serviceId)
    .populate("orders")
    .then((service) => res.json(service.orders))
    .catch(next)
};

module.exports.listAll = (req, res, next) => {
  const seeList = []
  Order.find()
    .populate("service")
    .then((orders) => {
      orders.forEach(element => {
        if (order.service.Establishment === req.params.id) {
        seeList.push(order)
        }
      });
      res.json(seeList)
    } )
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

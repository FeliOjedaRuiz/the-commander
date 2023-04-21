const Order = require("../models/order.model")
const createError = require("http-errors")

module.exports.exists = (req, res, next) => {
  const orderId = req.params.orderId || req.params.id
  Order.findById(orderId)
    .then((order) => {
      if (order) {
        req.order = order;
        next();        
      } else {
        next(createError(404, "Order not found"))
      }
    })
    .catch(next);
};
const Service = require("../models/service.model")
const createError = require("http-errors")

module.exports.exists = (req, res, next) => {
  const serviceId = req.params.serviceId || req.params.id
  Service.findById(serviceId)
    .then((service) => {
      if (service) {
        req.service = service;
        next();        
      } else {
        next(createError(404, "Service not found"))
      }
    })
    .catch(next);
};


const Service = require('../models/service.model');
const Establishment = require('../models/establishment.model');

module.exports.create = (req, res, next) => {
  Service.create(req.body)    
    .then((service) => res.status(201).json(service))
    .catch(next)
};

module.exports.list = (req, res, next) => {
  Establishment.findById(req.params.establishmentId)
    .populate("services")
    .then((establishment) => res.json(establishment.services))
    .catch(next)
};

module.exports.detail = (req, res, next) => res.json(req.service);

module.exports.update = (req, res, next) => {
  Object.assign(req.service, req.body);
  req.service
    .save()
    .then((service) => res.json(service))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Service.deleteOne({ _id: req.service.id })    
    .then(() => res.status(204).send())
    .catch(next)
};

const Service = require('../models/service.model');

module.exports.create = (req, res, next) => {
  Service.create({
    table: req.body.table,
    establishment: req.params.id,
    taker: req.body.taker,
  })    
    .then((service) => res.status(201).json(service))
    .catch(next)
};

module.exports.list = (req, res, next) => {
  Service.find()
    .then((services) => res.json(services))
    .catch(next)
};

module.exports.detail = (req, res, next) => res.json(req.service);

module.exports.delete = (req, res, next) => {
  Service.deleteOne({ _id: req.service.id })    
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  Object.assign(req.service, req.body);
  req.service
    .save()
    .then((service) => res.json(service))
    .catch(next);
};
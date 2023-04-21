const Establishment = require('../models/establishment.model');

module.exports.list = (req, res, next) => {
  Establishment.find()
    .populate("users")
    .then((establishments) => res.json(establishments))
    .catch(next)
};

module.exports.create = (req, res, next) => {
  Establishment.create(req.body)    
    .then((establishment) => res.status(201).json(establishment))
    .catch(next)
};

module.exports.detail = (req, res, next) => res.json(req.establishment);

module.exports.delete = (req, res, next) => {
  Establishment.deleteOne({ _id: req.establishment.id })    
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  Object.assign(req.establishment, req.body);
  req.establishment
    .save()
    .then((establishment) => res.json(establishment))
    .catch(next);
};

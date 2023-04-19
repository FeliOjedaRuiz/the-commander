const Establishment = require('../models/establishment.model');

module.exports.list = (req, res, next) => {
  Establishment.find()
    .then((establishments) => res.json(establishments))
    .catch(next)
};

module.exports.create = (req, res, next) => {
  Establishment.create(req.body)    
    .then((project) => res.status(201).json(project))
    .catch(next)
};
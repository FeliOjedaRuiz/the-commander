const Establishment = require('../models/establishment.model');
const User = require('../models/user.model');

module.exports.list = (req, res, next) => {
  User.findById(req.user)
    .populate('establishments')
    .then((user) => res.json(user.establishments))
    .catch(next);  
};

module.exports.create = (req, res, next) => {
  if (req.body) {
    req.body.admin = req.user.id    
  }
  Establishment.create(req.body)
    .then((newEstablishment) => {
      User.findById(req.user.id)
        .then((user) => {
          let prevEstablish = []
          prevEstablish = user.establishments
          User.findByIdAndUpdate(req.user.id, { establishments: [...prevEstablish, newEstablishment.id] })
            .then((user => res.status(201).json(newEstablishment)))
            .catch(next);
        })
        .catch(next)      
    })
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

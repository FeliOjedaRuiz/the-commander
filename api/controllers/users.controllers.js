const User = require('../models/user.model');
const createError = require("http-errors")

module.exports.list = (req, res, next) => {
  User.find()
    .populate("establishments")
    .then((users) => res.json(users))
    .catch(next)
};

module.exports.create = (req, res, next) => {
  User.create(req.body)    
    .then((users) => res.status(201).json(users))
    .catch(next)
};

module.exports.detail = (req, res, next) => res.json(req.user);

module.exports.delete = (req, res, next) => {
  User.deleteOne({ _id: req.user.id })    
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  Object.assign(req.user, req.body);
  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return next(createError(401, 'Invalid credentials'))
      }
    })
    .catch()
}
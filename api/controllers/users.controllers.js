const User = require('../models/user.model');
const Establishment = require('../models/establishment.model')
const createError = require("http-errors")
const jwt = require("jsonwebtoken")

module.exports.list = (req, res, next) => {
  Establishment.findById(req.params.establishmentId)
    .populate("users")
    .then((establishment) => res.json(establishment.users))
    .catch(next)
};

module.exports.createAdmin = (req, res, next) => {
  if (req.body) {
    delete req.body.establishment
  }
  User.create(req.body)    
    .then((users) => res.status(201).json(users))
    .catch(next)
};

module.exports.createStaff = (req, res, next) => {
  req.body.establishments = [req.params.establishmentId]
  User.create(req.body)    
    .then((users) => res.status(201).json(users))
    .catch(next)
};

module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(next)
};

module.exports.delete = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })    
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body)
        .then((user => {
          User.findById(user.id)
            .then((user => res.json(user)))
            .catch(next);
        }))
        .catch(next);
  };

module.exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return next(createError(401, 'Invalid credentials'))
      }
      user.checkPassword(req.body.password).then((match) => {
        if (!match) {
          return next(createError(401, 'Invalid credentials'));
        }

        const token = jwt.sign(
          { sub: user.id, exp: Date.now() / 1000 + 10_800 },
          process.env.JWT_SECRET
        );

        res.json({ token });
      });
    })
    .catch(next);
};
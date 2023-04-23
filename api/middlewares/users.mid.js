const User = require("../models/user.model")
const createError = require("http-errors")

module.exports.exists = (req, res, next) => {
  const userId = req.params.userId || req.params.id
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        req.user = user;
        next();        
      } else {
        next(createError(404, "User not found"))
      }
    })
    .catch(next);
};

module.exports.isAdmin = (req, res, next) => {
  User.findById(req.user.id)
    .then((user) => {
      if (user.role === "admin") {
        next();
      } else {
        next(createError(401, "Unauthorized"))
      }
    })
    .catch(next);
};

module.exports.canTakeService = (req, res, next) => {
  if (req.user.role === "service" || req.user.role === "admin") {
    next();
  } else {
    next(createError(401, "Unauthorized"))
  }
};
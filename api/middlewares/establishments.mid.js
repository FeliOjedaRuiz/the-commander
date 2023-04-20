const Establishment = require("../models/establishment.model")
const createError = require("http-errors")

module.exports.exists = (req, res, next) => {
  const establishmentId = req.params.establishmentId || req.params.id
  Establishment.findById(req.params.id)
    .then((establishment) => {
      if (establishment) {
        req.establishment = establishment;
        next();        
      } else {
        next(createError(404, "Establishment not found"))
      }
    })
    .catch(next);
};
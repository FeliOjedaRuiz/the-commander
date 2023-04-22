const Establishment = require("../models/establishment.model")
const createError = require("http-errors")

module.exports.exists = (req, res, next) => {
  const establishmentId = req.params.establishmentId || req.params.id
  Establishment.findById(establishmentId)
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


module.exports.owner = (req, res, next) => {
  const establishmentId = req.params.establishmentId || req.params.id
  Establishment.findById(establishmentId)
    .then((establishment) => {
      if (establishment) {
        if ( req.user.establishment.id === establishmentId ) {
          req.establishment = establishment;
          next();
        } else {
          next(createError(401, "Unauthorized"))
        }       
      } else {
        next(createError(404, "Establishment not found"))
      }
    })
    .catch(next);
};
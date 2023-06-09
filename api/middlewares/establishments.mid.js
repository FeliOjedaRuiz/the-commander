const Establishment = require("../models/establishment.model")
const createError = require("http-errors")
const User = require("../models/user.model");
const e = require("express");

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
  const establishmentId = req.params.establishmentId || req.body.establishment
  console.log(establishmentId)  
  Establishment.findById(establishmentId)
    .populate("admin")
    .then((establishment) => {  
      console.log(establishment)    
      if (establishment) {
        if ( req.user.id === establishment.admin.id ) {
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


module.exports.staff = (req, res, next) => {
  const establishmentId = req.params.establishmentId || req.body.establishment
  User.findById(req.user.id)
    .then((user) => {
      if (user.role === "admin") {
        if (user.establishments.includes(establishmentId)) {
          next()        
        } else {
          next(createError(401, "Unauthorized"))
        }        
      } else {
        if (user.establishments.toString() === establishmentId) {
          next()        
        } else {
          next(createError(401, "Unauthorized"))
        }    
      }  
      
    })
    .catch(next)
};


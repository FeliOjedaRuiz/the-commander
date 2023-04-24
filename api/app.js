require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const createError = require('http-errors');
const secure = require('./middlewares/secure.mid')


require('./config/db.config')
const app = express();

const cors = require('./config/cors.config');
app.use(cors);
app.use(express.json())
app.use(logger('dev'));
app.use(secure.cleanBody);

const api = require('./config/routes.config')
app.use('/api/v1', api);


app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((error, req, res, next) => {
  if(error instanceof mongoose.Error.ValidationError) {
    error = createError(400, error);
  }else if (
    error instanceof mongoose.Error.CastError &&
    error.path === '_id'
  ) {
    const resourceName = error.model().constructor.modelName;
    error = createError(404, `${resourceName} not found`);
  } else if (!error.status) {
    error = createError(500, error);
  }
  console.error(error);

  const data = {
    message: error.message
  }

  if (error.errors) {
    const errors = Object.keys(error.errors).reduce((errors, errorKey) => {
      errors[errorKey] = error.errors[errorKey].message;
      return errors;
    }, {});
    data.errors = errors;
  }

  res.status(error.status).json(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Aplication is running al port ${port}`))
